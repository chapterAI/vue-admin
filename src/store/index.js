import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './module-auth/index.js'
import SideBar from './module-layout/sidebar'

Vue.use(Vuex)



export default new Vuex.Store({
  modules:{
    'auth':AuthModule,
    'layout':SideBar
  }
})
