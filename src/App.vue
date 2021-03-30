<template>
  <div id="app">
    <Modal />
    <Header />
    <Grid />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Grid from "./components/Grid.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Header,
    Grid,
    Modal,
  },
};
</script>

<style>
:root {
  --grey: #dbe3ea;
  --image-placeholder: #ebecec;
  --text-placeholder: #e4e4e4;
  --card-placeholder: #a4b3c2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
