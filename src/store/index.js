import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './module/user.js'
import SideBar from './module/layout'
import Cache from './module/cache'

Vue.use(Vuex)



export default new Vuex.Store({
  modules:{
    'auth':AuthModule,
    'layout':SideBar,
    'cache':Cache
  }
})
