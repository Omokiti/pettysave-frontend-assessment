<template>
  <div class="item">
    <div class="card" v-on:click="showModal">
      <div class="overlay">
        <img :src="url" />
      </div>
      <div class="title">{{ title }}</div>
      <div class="author">Written By {{ author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["url", "author", "title", "content"],
  methods: {
    showModal: function () {
      this.$store.commit("showModal", {
        title: this.title,
        content: this.content,
        author: this.author,
      });
    },
  },
};
</script>

<style lang="scss" scoped>

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.25rem;
}

.card :hover {
  cursor: pointer;
}

.card img {
  width: 100%;
  opacity: 1;
}

.card .author,
.card .title {
  position: absolute;
  left: 0.5rem;
  color: wheat;
}

.card .title {
  bottom: 3rem;
  font-size: 1.5rem;
}

.card .author {
  bottom: 1rem;
  font-size: 0.75rem;
}

.overlay:hover {
  background-color: #000;
}

.overlay:hover > img {
  opacity: 0.5;
}
</style>
