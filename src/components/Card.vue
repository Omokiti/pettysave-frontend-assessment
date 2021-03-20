<template>
  <div class="item">
    <div class="card">
      <div class="overlay">
        <img :src="url" />
      </div>
      <div class="name">{{ name }}</div>
      <div class="approved">{{ approved }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["url", "name", "approved"],
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.25rem;
}

.card img {
  width: 100%;
  opacity: 1;
}

.card .name,
.card .approved {
  position: absolute;
  left: 0.5rem;
  color: white;
}

.card .name {
  bottom: 3rem;
  font-size: 1.5rem;
}

.card .approved {
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
