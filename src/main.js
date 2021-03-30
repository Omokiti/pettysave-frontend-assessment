import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    articles: [],
    modalData: {
      title: "",
      author: "",
      content: "",
    },
    loading: true,
    showModal: false,
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
    stopLoading(state) {
      state.loading = false;
    },
    showModal(state, data) {
      const { title, content, author } = data;
      state.showModal = true;
      state.modalData.title = title;
      state.modalData.author = author;
      state.modalData.content = content;
    },
    hideModal(state) {
      state.showModal = false;
    },
  },
  actions: {},
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
