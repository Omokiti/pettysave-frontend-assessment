<template>
  <div>
    <div id="images" v-if="loading">
      <Loading v-for="index in 10" :key="index" />
    </div>
    <div id="images">
      <Card
        v-for="photo in photos"
        v-bind:key="photo.authorid"
        :url="photo.url"
        :name="photo.authordisplay"
        :approved="photo.approved"
      ></Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
import Loading from "./Loading.vue";
import xmlJS from "xml-js";

export default {
  name: "Grid",
  components: {
    Card,
    Loading,
  },
  data: function () {
    return {
      photos: [],
      count: 0,
      loading: true,
    };
  },
  updated() {
    document.querySelectorAll("#images img").forEach((item) => {
      item.onload = this.updateCount;
    });
  },
  mounted() {
    this.getDataFromApi();
    window.addEventListener("resize", this.resizeAllGridItems);
    this.resizeAllGridItems();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resizeAllGridItems);
  },
  methods: {
    updateCount: function () {
      this.count += 1;
      if (this.count === this.photos.length) {
        this.loading = false;
        this.resizeAllGridItems();
        console.log("Loading complete");
      }
    },
    formatXMLData: function (data) {
      const res = {};
      for (const d of data) {
        if (d.elements) {
          res[d.name] = d.elements[0].text;
        }
      }
      return res;
    },
    getDataFromApi: async function () {
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
        const res = this.formatXMLData(d.elements);
        res["uri"] = d.attributes.uri;
        res["url"] = `https://via.placeholder.com/${this.getSize()}.png/000000/FFFFFF?text=${res["authordisplay"]}`
        responses.push(res);
      }
      this.photos = responses;
      console.log(responses);
      this.loading = false;
    },
    getSize: function () {
      const max_ = 200;
      const h = Math.min(Math.round(Math.random() * max_) + 150, max_);
      const w =  Math.min(Math.round(Math.random() * max_) + 150, max_);

      return `${h}x${w}`
    },
    resizeGridItem: function (item) {
      const grid = document.getElementById("images");
      const rowHeight = 8;
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      const rowSpan = Math.ceil(
        (item.querySelector(".card").getBoundingClientRect().height + rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = `span ${rowSpan}`;
    },
    resizeAllGridItems: function () {
      const allItems = document.getElementsByClassName("item");
      for (let i = 0; i < allItems.length; i++) {
        this.resizeGridItem(allItems[i]);
      }
    },
  },
};
</script>

<style scoped>
#images {
  position: relative;
  top: -2rem;
  display: grid;
  margin: 0 8rem 0 8rem;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

@media screen and (max-width: 768px) {
  #images {
    margin: 0 4rem 0 4rem;
  }
}
</style>
