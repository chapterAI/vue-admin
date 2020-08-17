<template>
  <div>
    <el-submenu index="1-7">
      <template slot="title">选项4</template>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
    <el-menu-item>
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <router-link to="/about">/about</router-link>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  components: {},
};
</script>

<style>
</style>