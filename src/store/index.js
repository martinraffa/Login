import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {

    async login (context) {
      const fetch = (url,options) => {
        return new Promise( ( resolve, reject ) => {
          const body = JSON.parse( options.body );
          const correctUser = body.email === "admin@admin.com";
          const correctPassword = body.password === "admin"
          resolve( correctUser && correctPassword );
        } );
      }
      const res = await fetch("api.com", {method:'POST', body: JSON.stringify({email:emaiInput, password:passwordInput})} );
    }

  },
  modules: {
  }
})

