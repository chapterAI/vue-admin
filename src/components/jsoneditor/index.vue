<template>
  <div class="json-editor">
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
/** lint */
require("script-loader!jsonlint");
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/json-lint";

export default {
  name: "JsonEditor",
  props: ["value"],
  data() {
    return {
      jsonEditor: false,
    };
  },
  watch: {
    value(value) {
      const editorValue = this.jsonEditor.getValue();
      if (value !== editorValue) {
        this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
      }
    },
  },
  mounted() {
    this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
      lineNumbers: true,
      mode: "application/json",
      gutters: ["CodeMirror-lint-markers"],
      theme: "duotone-light",
      lint: true,
    });

    this.jsonEditor.setValue(JSON.stringify(this.value, null, 2));
    this.jsonEditor.on("change", (cm) => {
      this.$emit("changed", cm.getValue());
      this.$emit("input", cm.getValue());
    });
  },
  methods: {
    getValue() {
      return this.jsonEditor.getValue();
    },
  },
};
</script>

<style lang="scss" scoped>
.json-editor {
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

    .cm-s-rubyblue span.cm-string {
      color: #f08047;
    }
  }
}
</style>