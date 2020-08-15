import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './module-auth/index.js'

Vue.use(Vuex)



export default new Vuex.Store({
  modules:{
    'auth':AuthModule
  }
})
