import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('acces_token') || null ,
    username: '',
    password: '',
  },
  getters: {
    loggedIn(state) {
      return state.token  !== null 
    }
  },
  mutations: {
    retriveToken(state, token) {
      state.token = token
    }
  },
  actions: {

  retriveToken(context, credentials) {

    return new Promise((resolve, reject)=> { 
      axios.post('https://reqres.in/api/login', {
          username: credentials.username,
          password: credentials.password,
      })
      .then(response => {
        const token = response.data.token
        sessionStorage.setItem('acces_token', token)
        context.commit('retriveToken', token)
        console.log('response ok');
        resolve(response)
        //console.log("token", response)
      })
      .catch(error => {
        console.log("error")
        reject(error)
      })
    })
  },

  },
  modules: {
  }
})

