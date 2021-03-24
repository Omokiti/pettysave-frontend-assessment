<template>
  <div>
    <section class="header">
      <div class="container">
        <div class="row">
          <div class="headers">
            <div class="mt-5 pt-3">
              <p>
                Get your favorite author's quotes
              </p>

              <h2>
                All your favourite<br />
                author quotes in one place
              </h2>
              <a href="/quotes" class="actionbutton">Get Quotes</a>
            </div>
            <div class="mt-5 pt-3">
              <img src="../assets/header.png" alt="header" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="authorcards">
      <div class="container">
        <div class="row">
          <h3 class="mt-4">Trending Authors Quotes</h3>
          <div class="cards mt-5 mx-auto">
            <div>
              <div class="cardz box">
                <img
                  src="../assets/Profile Photo.svg"
                  width="60px"
                  alt="author's display picture"
                />
                <span>Dan brown</span>
                <div>
                  <p id="books">Books</p>
                  <p>Dan vinchi Code</p>
                </div>
              </div>
            </div>
            <div>
              <div class="cardz box">
                <img
                  src="../assets/Profile Photo.svg"
                  width="60px"
                  alt="author's display picture"
                />
                <span>Dan brown</span>
                <div>
                  <p id="books">Books</p>
                  <p>Dan vinchi Code</p>
                </div>
              </div>
            </div>
            <div>
              <div class="cardz box">
                <img
                  src="../assets/Profile Photo.svg"
                  width="60px"
                  alt="author's display picture"
                />
                <span>Dan brown</span>
                <div>
                  <p id="books">Books</p>
                  <p>Dan vinchi Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
}
.header {
  background: #141419;
  width: 100%;
  min-height: 80vh;
}
.headers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header p {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 900;
  line-height: 1.875rem;
  letter-spacing: 0.2px;
}
.header h2 {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 500;
  line-height: 5.5rem;
  letter-spacing: 0.2px;
  white-space: pre-line;
}
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.authorcards {
  background: #000000;
  width: 100%;
  min-height: 70vh;
  color: #ffffff;
}
.cardz {
  background: #141419;
  border-radius: 32px;
  width: 20.75rem;
  height: 12.5rem;
  color: #ffffff;
  padding: 1.25rem 1.25rem;
}
#books {
  color: grey;
}
.actionbutton {
  background: #fa6602;
  color: #ffffff;
  text-decoration: none;
  padding: 1em 1em;
  border-radius: 10px;
}
.box {
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.03),
    0px 51.1542px 51.419px rgba(0, 0, 0, 0.0182814),
    0px 31.2614px 32.7222px rgba(0, 0, 0, 0.0145485),
    0px 19.7px 20.341px rgba(0, 0, 0, 0.0131802),
    0px 12.1574px 11.8781px rgba(0, 0, 0, 0.012699),
    0px 6.89112px 6.09643px rgba(0, 0, 0, 0.0121579),
    0px 3.01109px 2.28593px rgba(0, 0, 0, 0.0102347);
}
@media screen and (max-width: 500px) {
  html {
    font-size: 50%;
  }
  body {
    font-size: 1.5rem;
  }
  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .cardz {
    width: 12.25rem;
    height: 10.35rem;
    margin: 2.33rem 3.33rem;
    font-size: 1.2rem;
    padding: 0.5rem 0.5rem;
  }
  .header h2 {
    font-size: 1.5rem;
    line-height: 1.5625rem;
  }
  .header p {
    font-size: 1rem;
    line-height: 0.9375rem;
  }
  .actionbutton {
    padding: 0.5em 0.2em;
  }
}
@media screen and (max-width: 768px) {
  .cards {
    display: flex;
    flex-flow: row wrap;
  }
  .cardz {
    width: 12.25rem;
    height: 11.35rem;
    margin: 0.33rem 0.33rem;
  }
}
</style>
<script>
export default {
  name: "Home",
};
</script>
