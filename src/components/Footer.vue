<template>
<footer>
 <div class="footer">
<div class="container">
 <div class="row">
 <div class="col-md-4">
<a href="#"><p>About Us</p></a>
 <a href="#">Our Company</a>
 <a href="#">Work With Us</a>
 <a href="#">Details Published</a>
 <a href="#">Career</a>
    </div>
 
 <div class="col-md-4">
 <a href="#"><p>Useful Links</p></a>
 <a href="#">Privacy Policy</a>
 <a href="#">Cookie Policy</a>
 <a href="#">Terms and Condition</a>
 
</div>
 <div class="col-md-4">
  <img src="../assets/location icon.svg" alt="facebook" width="20px"/>
  <span class="social">
    8 Apo Legislative Quarters,Apo Abuja
  </span>
  <br/>
  <img src="../assets/phone.svg" alt="phone logo" width="20px"/> 
  <span class="social">+2347038185926</span>
  <br/>
  <img src="../assets/facebook.svg" alt="facebook logo" width="20px"/>
  <img src="../assets/twitter.svg" alt="twitter logo" width="20px" class="social"/>
 </div>
 </div>
 </div>
 </div>
</footer>

</template>

<style scoped>
footer{
background:#000000;
min-height:40vh;
color:#ffffff;
padding:1rem 0;
}
a{
text-decoration: none;
color:#ffffff;
display: block;
margin:1rem;
}
.social{
display:inline-block;
margin:0.5rem;
}
@media screen and (max-width:500px){
footer{
position: absolute;
left:0;
right:0;
}
}
</style>

<script>
export default {
name:'Footer'
}
</script>