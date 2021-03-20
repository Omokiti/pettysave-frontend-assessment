<template>
  <div id="modal-card">
    <div id="modal-close">
      <i class="fa fa-times" v-on:click="hideModal" aria-hidden="true"></i>
    </div>
    <div id="modal-image">
      <img :src="url" />
    </div>
    <div id="modal-text" v-bind:style="{ width: imageWidth + 'px' }">
      <div id="name">{{ name }}</div>
      <div id="approved">{{ approved }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCard",
  props: ["name", "url", "approved"],
  data: () => {
    return {
      imageWidth: 0,
    };
  },
  mounted() {
    window.addEventListener("resize", this.modalResize);
    this.modalResize();
  },
  methods: {
    modalResize() {
      this.imageWidth = document.querySelector("#modal-image img").clientWidth;
    },
    hideModal() {
      alert();
      this.showModal = false;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.modalResize);
  },
};
</script>

<style scoped>
#modal-card {
  margin: 2rem;
}

#modal-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

#modal-close i {
  color: white;
}

#modal-image {
  max-width: calc(100vw - 4rem);
  max-height: calc(100vh - 10rem);
}

#modal-card img {
  border-radius: 1rem 1rem 0 0;
  max-height: inherit;
  max-width: inherit;
}

#modal-text {
  background-color: white;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  border-radius: 0 0 1rem 1rem;
  margin: auto;
  margin-top: -0.2rem;
}

#modal-text div {
  text-align: left;
  padding-left: 2rem;
  padding-top: 0.5rem;
}
</style>
