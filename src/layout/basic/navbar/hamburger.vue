<template>
  <div class="hamburger" @click="toggleClick">
    <i :class="getCollapse?iconBefore:iconAfter" class="icon-style"></i>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    iconBefore: {
      type: String,
      required: true,
    },
    iconAfter: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    },
  },
  computed: {
    ...mapGetters({
      getCollapse: "layout/getCollapse",
    }),
  },
};
</script>

<style lang="scss" scoped>
.hamburger {
  .icon-style {
    font-size: 25px;
    line-height: 50px;
  }
}
</style>