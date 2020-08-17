
<template>
  <div id="sideBar-container">
    <sidebar></sidebar>
  </div>
</template>

<script>
import Sidebar from "./sideBar/Sidebar";

export default {
  components: {
    Sidebar,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
    #sideBar-container{
        width: 12vw;
    }
</style>
