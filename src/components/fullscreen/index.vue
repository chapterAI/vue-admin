<template>
  <div>
    <i
      :class="[isFull?'el-icon-copy-document':'el-icon-full-screen','screenfull-icon-container']"
      @click="click"
    ></i>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "fullscreen",
  data() {
    return {
      isFull: false,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "you browser doesn't support fullscreen",
          type: "warning",
        });
        return;
      }
      screenfull.toggle();
    },
    change() {
      this.isFull = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off("change", this.change);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.screenfull-icon-container {
  font-size: 26px;
  cursor: pointer;
}
</style>