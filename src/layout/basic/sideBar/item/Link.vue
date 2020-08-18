<template>
  <component :is="type" v-bind:to="checkhref(to)">
    <slot />
  </component>
</template>

<script>
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
    /** 为使得 */
    checkhref(to) {
      return to
    },
  },
  computed: {
    type() {
      return "router-link";
    },
  },
};
</script>


<style lang="scss" scoped>
a {
  border: 0px;
  text-decoration: none;
}
</style>