<template>
  <div id="modal-card">
    <div id="modal-text" v-bind:style="{ width: cardWidth + 'px' }">
      <div id="name">{{ title }}</div>
      <div id="writer">Written by {{ author }}</div>
      <article>
        {{ content }}
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCard",
  props: ["author", "url", "title", "content"],
  data: () => {
    return {
      cardWidth: 0,
    };
  },
  mounted() {
    window.addEventListener("resize", this.modalResize);
    this.modalResize();
  },
  methods: {
    modalResize() {
      this.cardWidth = document.querySelector("body").clientWidth / 2;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.modalResize);
  },
};
</script>

<style scoped>
article {
  margin: 2rem 1rem;
  font-size: 1.5rem;
}

#name {
  font-size: 3rem;
  font-family: "Droid Serif", serif;
  text-transform: capitalize;
  text-transform: uppercase;
}

#writer {
  font-size: 1.5rem;
  font-family: "Playfair Display", serif;
}

#writer::before {
  border-top: 1px solid #000;
  content: "";
  width: 50%;
  height: 7px;
  display: block;
  margin: 0 auto;
}

#writer::after {
  border-top: 1px solid #000;
  content: "";
  width: 50%;
  height: 7px;
  display: block;
  margin: 0 auto;
}

#modal-card {
  margin: 2rem;
}

#modal-image {
  max-width: calc(100vw - 4rem);
  max-height: calc(100vh - 10rem);
}

#modal-card img {
  border-radius: 1rem;
  max-height: inherit;
  max-width: inherit;
}

#modal-text {
  font-family: "Times New Roman", Times, serif;
  font-size: 1px;
  background-color: white;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  border-radius: 1rem;
  margin: auto;
  margin-top: -0.2rem;
  text-align: center;
}

#modal-text div {
  text-align: center;
  padding-left: 2rem;
  padding-top: 0.5rem;
}
</style>
