<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
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
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      routes: "auth/getRoutes",
    }),
    variables() {
      return variables;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    isCollapse() {
      return this.collapse;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>