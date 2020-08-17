<template>
  <el-menu>
    <sidebar-item></sidebar-item>
    {{ routes }}
  </el-menu>
</template>

<script>
import SidebarItem from "./item/SidebarItem";

export default {
  components: {
    SidebarItem,
  },
  data(){
    return {
      routes:this.$store.getters['auth/getRoutes']
    }
  }
};
</script>

<style>
</style>