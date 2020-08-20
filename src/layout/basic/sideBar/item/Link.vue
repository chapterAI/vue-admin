<template>
  <component :is="type" v-bind="checkhref(to)" @click="activeLightHack">
    <slot />
  </component>
</template>

<script>
import { isHttpRequest, matchHttp } from "@/layout/basic/helper";
import { mapMutations } from "vuex";
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    checkhref(to) {
      if (isHttpRequest(to)) {
        to = matchHttp(to);
        return {
          href: to,
          target: "_blank",
          rel: "noopener",
        };
      } else {
        return {
          to: to,
        };
      }
    },
  },
  computed: {
    type() {
      if (isHttpRequest(this.to)) {
        return "a";
      } else {
        return "router-link";
      }
    },
  },
};
</script>


<style lang="scss" scoped>
</style>