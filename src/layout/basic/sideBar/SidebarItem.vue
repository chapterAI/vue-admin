<template>
  <div v-if="!route.hidden">
    <template v-if="noMenu(route)">
      <router-link :to="reslovePath(routeForNoMenu.path)">
        <el-menu-item :index="reslovePath(routeForNoMenu.path)">
          <i :class="routeForNoMenu.meta && routeForNoMenu.meta.icon"></i>
          <span slot="title">{{ routeForNoMenu.meta && routeForNoMenu.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <template v-else-if="!hasChildren">
      <router-link :to="basicPath">
        <el-menu-item :index="basicPath">
          <i :class="route.meta && route.meta.icon"></i>
          <span slot="title">{{ route.meta && route.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="basicPath" popper-append-to-body>
      <template slot="title">
        <i :class="route.meta && route.meta.icon"></i>
        {{ route.meta && route.meta.title }}
      </template>
      <sidebar-item
        v-for="route in route.children"
        :key="route.path"
        :route="route"
        :basic-path="reslovePath(route.path)"
        :is-nest="true"
        class="nest-menu"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
import { hasShowingChild, reslovePath } from "@/layout/basic/helper";
import Link from "./Link.vue";

export default {
  name: "SidebarItem",
  components: {
    "router-link": Link,
  },
  props: {
    route: {
      type: Object,
      required: true,
    },
    basicPath: {
      type: String,
      default: "",
    },
    isNest: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      routeForNoMenu: undefined,
    };
  },
  methods: {
    reslovePath(path) {
      return reslovePath(this.basicPath, path);
    },
    noMenu(route) {
      const meta = route.meta;
      const children = route.children;
      if (meta && meta.noMenu) {
        if (!children) {
          return false;
        } else {
          this.routeForNoMenu = children[0];
          return true;
        }
      } else {
        return false;
      }
    },
  },
  computed: {
    hasChildren() {
      const children = this.route.children;
      if (children) {
        return hasShowingChild(children);
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>