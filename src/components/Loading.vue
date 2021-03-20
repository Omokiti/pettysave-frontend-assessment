<template>
  <div class="item">
    <div
      class="loading card"
      :style="{ height: Math.random() * 20 + 10 + 'rem' }"
    >
      <div class="name"></div>
      <div class="approved"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loading {
  background-color: #e4e4e4;
  height: 20rem;
  position: relative;
  animation: animate 2s ease-in infinite;
}

@keyframes animate {
  0% {
    background-color: #e4e4e4;
  }

  25% {
    background-color: #c4ccd4;
  }

  50% {
    background-color: #919cac;
  }

  75% {
    background-color: #ebecec;
  }

  100% {
    background-color: #e4e4e4;
  }
}

.loading .name,
.loading .approved {
  position: absolute;
  background: var(--text-placeholder);
  left: 0.5rem;
}

.loading .name {
  bottom: 3rem;
  font-size: 1.5rem;
  background-color: #f4f4f4;
  padding: 1rem 2rem 0 4rem;
}

.loading .approved {
  bottom: 1rem;
  font-size: 0.75rem;
  background-color: #f4f4f4;
  padding: 0.5rem 1rem 0 2rem;
}
</style>
