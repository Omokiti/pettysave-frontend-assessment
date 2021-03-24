// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
// state
const state ={
quotes:[],
quote:null
}

//to handle state
const getters = {
allQuotes:(state) => state.quotes,
allQuote:(state)=> state.quote
}

// actions
const actions = {
    getQuotes({ commit }){
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(data => {
            commit('SET_QUOTES',data.data)
            console.log(data)
        })
      .catch( error => {
        console.log(error)
        })
        },
    getQuote({commit},quoteId){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${quoteId}`)
          .then(data => {
            commit('SET_QUOTE',data.data)
            console.log(data)
            
          })
          .catch( error => {
            console.log(error)
            })
        }
  }


// mutations
const mutations = {
    SET_QUOTES(state, quotes){
    state.quotes = quotes
    },

    SET_QUOTE(state, quote){
    state.quote = quote
    }
}

//export store module
export default new Vuex.Store({
state,
getters,
actions,
mutations
})