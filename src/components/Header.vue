<template>
  <header>
    <div id="search">
      <i class="fa fa-search"></i>
      <input type="search" placeholder="Search for users" id="search" />
    </div>
  </header>
</template>

<style scoped>
header {
  background: var(--grey);
}

header i {
  position: absolute;
  top: 4rem;
  left: 4rem;
  padding: 1rem;
  background: white;
}

header input {
  margin: 4rem;
  width: calc(100% - 8rem);
  padding: 1rem;
  padding-left: 4rem;
  border-radius: 0rem;
  border: none;
}

header input:focus {
  outline: none;
}
</style>
