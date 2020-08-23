<template>
  <div>
    <downing></downing>
    <upload></upload>
  </div>
</template>

<script>
import Downing from "@/components/downing/index";
import Upload from "@/components/upload/index";

export default {
  name:'setting',
  components: {
    Downing,
    Upload,
  },
};
</script>

<style lang="scss" scoped>
</style>