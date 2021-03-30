<template>
  <div id="modal" v-if="$store.state.showModal">
    <div id="modal-close">
      <i class="fa fa-times" v-on:click="hideModal" aria-hidden="true"></i>
    </div>
    <ModalCard
      :author="this.$store.state.modalData.author"
      :title="this.$store.state.modalData.title"
      :url="this.$store.state.modalData.url"
      :content="this.$store.state.modalData.content"
    />
  </div>
</template>

<script>
import ModalCard from "./ModalCard";
export default {
  name: "Modal",
  components: {
    ModalCard,
  },
  props: ["name", "title", "url", "content", "showModal"],
  methods: {
    hideModal: function() {
      this.$store.commit("hideModal");
    },
  },
};
</script>

<style scoped>
#modal {
  background-color: rgba(2, 2, 2, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  right: 0;
}

#modal-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

#modal-close i {
  color: wheat;
}
</style>
