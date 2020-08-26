<template>
  <div class="about" @click.right="right">
    <h1>This is an about page</h1>
    <router-link to="/">/</router-link><br>
    <router-link to="/admin">/admin</router-link><br>
    <router-link to="/admin/demo1">/admin/demo1</router-link><br>
    <text-hover-effect v-auth="['admin']" text="about-vue-admin"></text-hover-effect><br>
    <text-hover-effect v-if="checkAuth(['editor'])" text="about-vue-editor"></text-hover-effect>
  </div>
</template>

<script>
import TextHoverEffect from '@/components/texthovereffect'
import Auth from '@/directives/auth/index'
import { checkAuth } from '@/shared/checkAuth'

export default {
  name:'About',
  components:{
    TextHoverEffect
  },
  directives:{
    Auth
  },
  methods:{
    right($event){
      console.log($event)
    },
    checkAuth
  }
}
</script>