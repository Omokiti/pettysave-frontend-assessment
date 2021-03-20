<template>
  <div id="modal" v-if="showModal">
    <ModalCard
      :name="name"
      :approved="approved"
      :url="url"
      v-model="showModal"
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
  data: function () {
    return {
      showModal: false,
      name: "",
      approved: "",
      url: "",
    };
  },
};
</script>

<style scoped>
#modal {
  background-color: rgba(2, 2, 2, 0.7);
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  right: 0;
}
</style>
