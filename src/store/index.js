import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './auth/index.js'

Vue.use(Vuex)



export default new Vuex.Store({
  modules:{
    'auth':AuthModule
  }
})
