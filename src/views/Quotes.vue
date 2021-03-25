<template>
<div>
  <div class="container">
    <div  v-if="quotes" class="row">
         <h2>{{msg}}</h2>
       
    <div v-for ="quote in quotes" :key="quote.id" class="col-md-4">
      <router-link :to="{ name: 'Quote',params: { id: quote.id }}">
            <div class="cardz">
              <p class="text">{{ quote.title}}</p>
              
          </div>
              </router-link>
        
            
         </div>
   
       
    
    </div>
   <div v-else>
       <p> Authors Quotes Loading</p>
   </div>
  </div>
  </div>
</template>

<style scoped>
*{
box-sizing:border-box;
}

html{
font-size:62.5%;
scroll-behavior: smooth;
}
body{
font-size:1.6rem;
}
.cardz{
background:#ffffff;
box-shadow:0px 100px 80px rgba(0, 0, 0, 0.03), 0px 51.1542px 51.419px rgba(0, 0, 0, 0.0182814), 0px 31.2614px 32.7222px rgba(0, 0, 0, 0.0145485), 0px 19.7px 20.341px rgba(0, 0, 0, 0.0131802), 0px 12.1574px 11.8781px rgba(0, 0, 0, 0.012699), 0px 6.89112px 6.09643px rgba(0, 0, 0, 0.0121579), 0px 3.01109px 2.28593px rgba(0, 0, 0, 0.0102347);
color:#000000;
padding:20px  20px;
margin:20px 20px;
width:18.75rem;
height:12.5rem;
}
h2{
text-align:center;
}
a{
text-decoration: none;
}
.text{
font-size:1.2rem;
}
@media only screen and(max-width:500px){
.result {
  width: 100%;
  display: flex;
    justify-content: center;
  flex-wrap: wrap;
}
  .cardz {
    width:18.75rem;
    margin-top:1.125rem;
    border-radius: 5px;
  }
    
}
</style>
<script>
export default {
    name:'Quotes',
    data(){
        return{
        msg:'List of Authors Quotes',
         }
      
    },
    computed:{
        quotes(){
        return this.$store.state.quotes
        }
    },
    mounted(){
    this.$store.dispatch("getQuotes");
    }
}
</script>
