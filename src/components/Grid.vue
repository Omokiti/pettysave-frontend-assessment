<template>
  <div>
    <div id="images" v-if="$store.state.loading">
      <Loading v-for="index in 10" :key="index" />
    </div>
    <div id="images">
      <Card
        v-for="photo in $store.state.articles"
        v-bind:key="photo.id"
        :url="photo.url"
        :author="photo.users.name"
        :title="photo.title"
        :content="photo.body"
      ></Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
import Loading from "./Loading.vue";

export default {
  name: "Grid",
  components: {
    Card,
    Loading,
  },
  data: function () {
    return {
      count: 0,
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
      if (this.count === this.$store.state.articles.length / 4) {
        this.resizeAllGridItems();
        console.log("Loading complete");
        this.$store.commit("stopLoading");
      }
    },
    getDataFromApi: async function () {
      const users = {};
      const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responses = [];
      for (const response of await data.json()) {
        const userId = response["userId"];
        if (!users[userId]) {
          const user = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + userId,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          users[userId] = await user.json();
        }

        response.users = users[userId];
        response.url = `https://via.placeholder.com/${this.getSize()}.png/000000/FFFFFF?text=${response[
          "body"
        ].substr(0, 50)}`;
        responses.push(response);
      }

      this.$store.commit("setArticles", responses);
    },
    getSize: function () {
      const max_ = 200;
      const h = Math.min(Math.round(Math.random() * max_) + 150, max_);
      const w = Math.min(Math.round(Math.random() * max_) + 150, max_);

      return `${h}x${w}`;
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
