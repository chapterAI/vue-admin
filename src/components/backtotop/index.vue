<template>
  <transition :name="transitionName">
    <div v-show="visible" class="back-to-top-icon-container" :style="containerStyle" @click="backToTop">
      <i class="el-icon-upload2" :style="iconStyle"></i>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visibleHeight: {
      type: Number,
      default: 200,
    },
    backPosition: {
      type: Number,
      default: 0,
    },
    containerStyle: {
      type: Object,
      default: function () {
        return {
          right: "50px",
          bottom: "50px",
          width: "40px",
          height: "40px",
          "border-radius": "4px",
          "line-height": "45px",
        };
      },
    },
    iconStyle: {
      type: Object,
      default: function () {
        return {
          "font-size": "20px",
        };
      },
    },
    transitionName: {
      type: String,
      default: "fade",
    },
  },
  data() {
    return {
      visible: false,
      aniRef: undefined,
      element: undefined,
    };
  },
  methods: {
    handleScroll() {
      this.visible = this.element.scrollTop > this.visibleHeight;
    },
    backToTop() {
        requestAnimationFrame(this.scrollAnimation)
    },
    scrollAnimation(){
        this.element.scrollTop -= this.element.scrollHeight/50
        this.aniRef = requestAnimationFrame(this.scrollAnimation)
        if(this.element.scrollTop<=0){
            this.element.scrollTop = 0 
            cancelAnimationFrame(this.aniRef)
        }
    }
  },
  mounted() {
    this.element = document.getElementById("main-container");
    this.element.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.element.removeEventListener("scroll", this.handleScroll);
    if (this.aniRef) {
      cancelAnimationFrame(this.aniRef)
    }
  },
};
</script>

<style lang="scss" scoped>
.back-to-top-icon-container {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}

.back-to-top-icon-container:hover {
  background: #d5dbe7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>