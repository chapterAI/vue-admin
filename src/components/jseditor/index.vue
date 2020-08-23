<template>
  <div>
    <textarea v-model="content" class="editor-size editor-font"></textarea>
    <textarea :value="errLog" class="editor-size editor-font"></textarea>
    <br />
    <el-button @click="run">执行</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      errLog: "",
    };
  },
  methods: {
    run() {
      let fn;
      try {
        fn = new Function(this.content);
      } catch (error) {
        this.errLog = error;
        return;
      }
      try {
        fn();
        this.errLog = "success";
      } catch (error) {
        this.errLog = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>