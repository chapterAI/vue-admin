<template>
  <el-scrollbar style="height:100vh">
    <el-menu
      :default-active="activeMenu"
      :collapse="false"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :route="route"
        :basic-path="route.path"
      ></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from "./item/SidebarItem";
import { mapGetters } from "vuex";
import variables from "@/style/variables.scss";

export default {
  components: {
    SidebarItem,
  },
  data() {
    return {
      refresh: false,
    };
  },
  computed: {
    ...mapGetters({
      routes: "auth/getRoutes",
      getCollapse: "layout/getCollapse"
    }),
    variables() {
      return variables;
    },
    activeMenu() {
      let { path } = this.$route;
      return path;
    },
    isCollapse() {
      return this.getCollapse;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>