<template>
  <div class="about" @click.right="right">
    <h1>This is an about page</h1>
    <router-link to="/">/</router-link><br>
    <router-link to="/admin">/admin</router-link><br>
    <router-link to="/admin/demo">/admin/demo</router-link>
  </div>
</template>

<script>
export default {
  name:'About',
  methods:{
    right($event){
      console.log($event)
    }
  }
}
</script>