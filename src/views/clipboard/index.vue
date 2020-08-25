<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="global function" name="directly">
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px;max-width:100%;"
          class="margin-top"
        />
        <el-button
          type="primary"
          icon="el-icon-document"
          @click="handleCopy(inputData,$event,'copy')"
        >copy</el-button>
      </el-tab-pane>
      <el-tab-pane label="v-directive" name="v-directive">
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px;max-width:100%;"
          class="margin-top"
        />
        <el-button
          v-clipboard:copy="inputData"
          v-clipboard:success="clipboardSuccess"
          type="primary"
          icon="el-icon-document"
        >copy</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import clipboard from "@/directives/clipboard/index";
import clip from "@/shared/clip";

export default {
  name: "ClipboardView",
  directives: {
    clipboard,
  },
  data() {
    return {
      activeName: "directly",
      inputData: "https://github.com/chapterAI",
    };
  },
  methods: {
    handleCopy(text, event, action) {
      clip(text, event, action, () => {
        this.$message({
          message: "Copy successfully",
          type: "success",
          duration: 1500,
        });
      });
    },
    clipboardSuccess() {
      this.$message({
        message: "Copy successfully",
        type: "success",
        duration: 1500,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.margin-top {
  margin-top: 20px;
}
</style>