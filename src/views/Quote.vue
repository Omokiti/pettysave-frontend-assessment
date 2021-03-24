<template>
  <div class="container">
    <div class="box">
      <div v-if="quote">
        <router-link :to="{ name: 'Quotes' }">
          <div class="cardz mb-5">
            <h2>Author Quotes</h2>
            <p>The Author id is {{ id }}</p>
            <p>Author Specefic quote is {{ quote.title }}</p>
          </div>
        </router-link>
      </div>
      <div v-else>
        <p>Author Quote loading</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin-top: 180px;
  display: flex;
  justify-content: center;
}
.cardz {
  background: #ffffff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.03),
    0px 51.1542px 51.419px rgba(0, 0, 0, 0.0182814),
    0px 31.2614px 32.7222px rgba(0, 0, 0, 0.0145485),
    0px 19.7px 20.341px rgba(0, 0, 0, 0.0131802),
    0px 12.1574px 11.8781px rgba(0, 0, 0, 0.012699),
    0px 6.89112px 6.09643px rgba(0, 0, 0, 0.0121579),
    0px 3.01109px 2.28593px rgba(0, 0, 0, 0.0102347);
  width: 400px;
  color: #000000;
  padding: 20px 20px;
  margin-top: 10px;
  font-size: 1.2rem;
}
a {
  text-decoration: none;
}
</style>
<script>
export default {
  name: "Quote",
  props: ["id"],

  computed: {
    quote() {
      return this.$store.state.quote;
    },
  },
  mounted() {
    this.$store.dispatch("getQuote", this.id);
  },
};
</script>
