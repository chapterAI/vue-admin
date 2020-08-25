<template>
  <div class="editor">
    <js-editor :value="value"></js-editor>
  </div>
</template>

<script>
import JsEditor from "@/components/jseditor/index";
export default {
  name:'Js-Editor',
  components: {
    JsEditor,
  },
  data(){
    return {
      value:"function a(){}"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>