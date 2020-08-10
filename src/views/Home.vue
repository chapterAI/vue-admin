<template>
  <div class="home">
    <router-link to="./about">about</router-link><br><br>
    <router-link to="./login">login</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
