<template>
  <div v-if="!route.hidden">
    <template v-if="!hasChildren">
      <router-link :to="basicPath">
        <el-menu-item :index="basicPath" :class="{'nest-color':isNest}">
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
    return {};
  },
  methods: {
    reslovePath(path) {
      return reslovePath(this.basicPath, path);
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
.nest-color {

}
</style>