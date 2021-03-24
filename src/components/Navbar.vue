<template>

<nav class="navbar navbar-expand-lg mt-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="../assets/Penguin_logo.svg" alt="" width="30" height="24" class="d-inline-block align-top">
      Authors Quotes
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
     <img src="../assets/menu-tog.svg" alt="navbar"/>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
          </li>
        
       <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
          
        </li>

        <li class="nav-item">
        <router-link to="/quotes" class="nav-link">Get Quotes</router-link>
          
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    
</template>

<style scoped>
.navbar{
background:#141419;
}

.nav-link,.navbar-brand{
color:#ffffff;
}

</style>
<script>
export default {
name:'Navbar'
}
</script>