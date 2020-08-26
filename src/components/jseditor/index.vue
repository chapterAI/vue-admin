<template>
  <div class="js-editor">
      <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from "codemirror";
/** 核心样式 */
import "codemirror/lib/codemirror.css";
/** 主题 */
import "codemirror/theme/duotone-light.css";
/** mode模块 */
import "codemirror/mode/javascript/javascript";

export default {
  name: "JsEditor",
  props: ["value"],
  data() {
    return {
      jsEditor: false,
    };
  },
  watch: {
    value(value) {
      const editorValue = this.jsEditor.getValue();
      if (value !== editorValue) {
        this.jsEditor.setValue(JSON.stringify(this.value, null, 2));
      }
    },
  },
  mounted() {
    this.jsEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: "javascript",
      gutters: ["CodeMirror-lint-markers"],
      theme: "duotone-light",
      lint: true,
    });

    this.jsEditor.setValue(JSON.stringify(this.value, null, 2));
    this.jsEditor.on("change", (cm) => {
      this.$emit("changed", cm.getValue());
      this.$emit("input", cm.getValue());
    });
  },
  methods: {
    getValue() {
      return this.jsEditor.getValue();
    },
  },
};
</script>

<style lang="scss" scoped>
.js-editor {
  height: 100%;
  position: relative;

  ::v-deep {
    .CodeMirror {
      font-size: 16px;
      height: auto;
      min-height:100vh;
    }

    .CodeMirror-scroll {
      min-height: 300px;
      overflow-x: hidden !important;
    }
  }
}
</style>