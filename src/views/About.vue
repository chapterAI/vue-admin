<template>
  <div class="about" @click.right="right">
    <h1>This is an about page</h1>
    <router-link to="/">/</router-link><br>
    <router-link to="/admin">/admin</router-link><br>
    <router-link to="/admin/demo">/admin/demo</router-link><br>
    <text-hover-effect text="about-vue-admin"></text-hover-effect>
  </div>
</template>

<script>
import TextHoverEffect from '@/components/texthovereffect'

export default {
  name:'About',
  components:{
    TextHoverEffect
  },
  methods:{
    right($event){
      console.log($event)
    }
  }
}
</script>