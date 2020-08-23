<template>
  <div class="editor">
    <js-editor></js-editor>
    <el-button @click="reload">reload</el-button>
  </div>
</template>

<script>
import JsEditor from "@/components/jseditor/index";
export default {
  name:'Js-Editor',
  components: {
    JsEditor,
  },
  inject: ["reload"],
};
</script>

<style lang="scss">
.editor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.editor-size {
  width: 400px;
  height: 500px;
}
.editor-font {
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>