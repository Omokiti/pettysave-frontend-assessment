import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import xmlJS from "xml-js";

Vue.use(Vuex);
Vue.config.productionTip = false;

const formatXMLData = function (data) {
  const res = {};
  for (const d of data) {
    if (d.elements) {
      res[d.name] = d.elements[0].text;
    }
  }
  return res;
}
const getSize = function () {
  const max_ = 200;
  const h = Math.min(Math.round(Math.random() * max_) + 150, max_);
  const w = Math.min(Math.round(Math.random() * max_) + 150, max_);

  return `${h}x${w}`;
}

const store = new Vuex.Store({
  state: {
    photos: [],
    loading: true,
    showModal: false,
  },
  mutations: {
    stopLoading(state) {
      state.loading = false;
    },
    setPhotos(state, data) {
      state.photos = data;
    },
  },
  actions: {
    async setAuthors(context) {
      const res = await fetch(
        "https://stark-coast-82064.herokuapp.com/https://reststop.randomhouse.com/resources/authors?expandLevel=1&start=0&max=50&firstName=graham",
        {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa("testuser:testpassword"),
            "Content-Type": "application/json",
          },
        }
      );
      const data = JSON.parse(
        xmlJS.xml2json(await res.text(), { compact: false, spaces: 4 })
      );

      const responses = [];
      for (const d of data.elements[0].elements) {
        const res = formatXMLData(d.elements);
        res["uri"] = d.attributes.uri;
        res[
          "url"
        ] = `https://via.placeholder.com/${getSize()}.png/000000/FFFFFF?text=${
          res["authordisplay"]
        }`;
        responses.push(res);
      }
      context.commit("setPhotos", responses);
    },
  },
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
