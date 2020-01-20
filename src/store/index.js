import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('acces_token') || null ,
    username: '',
    password: '',
    error: '',
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

      return axios.post('https://reqres.in/api/login', {
          username: credentials.username,
          password: credentials.password,
      })
      .then(response => {
        const token = response.data.token
        sessionStorage.setItem('acces_token', token)
        context.commit('retriveToken', token)
        console.log('response ok');
        //console.log("token", response)
        return response
      })
      .catch(error => {
        
        this.$vToastify.error(error)
        console.log("error gato", error)
        return error
      })
  },

  },
  modules: {
  }
})

