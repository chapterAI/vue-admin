<template>
  <div class="guide-container">
      <el-button @click.prevent.stop="guide">start guide process</el-button>
  </div>
</template>

<script>
import steps from "./steps";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

export default {
  name: "Guide",
  data() {
    return {
      driver: undefined,
    };
  },
  mounted() {
    this.driver = new Driver();
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps);
      this.driver.start();
    },
  },
};
</script>

<style lang="scss" scoped>
.guide-container{
    box-sizing: border-box;
    padding:3em;
    height:85vh
}
</style>