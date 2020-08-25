<template>
  <div :style="{zIndex:zIndex,height:height+'px'}">
    <div
      :class="className"
      :style="{top:(isSticky ? stickyTop +'px' : ''),zIndex:zIndex,position:position,width:width,height:height+'px'}"
    >
      <slot>
        <div>sticky</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "sticky",
  props: {
    stickyTop: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    className: {
      type: String,
      default: "",
    },
    isUse: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      position: "",
      height: undefined,
      width: undefined,
      isSticky: false,
      scroll: undefined,
      active: false,
    };
  },
  mounted() {
    this.height = this.$el.getBoundingClientRect().height;
    this.scroll = document.getElementById("main-container");
    this.scroll.addEventListener("scroll", this.handleScroll);
    this.scroll.addEventListener("resize", this.handleResize);
  },
  activated() {
    this.scroll.addEventListener("scroll", this.handleScroll);
    this.scroll.addEventListener("resize", this.handleResize);
    this.handleScroll();
  },
  deactivated() {
    this.scroll.removeEventListener("scroll", this.handleScroll);
    this.scroll.removeEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    this.scroll.removeEventListener("scroll", this.handleScroll);
    this.scroll.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll() {
      if (!this.isUse) {
        return;
      }
      const width = this.$el.getBoundingClientRect().width;
      this.width = width || "auto";
      const offsetTop = this.$el.getBoundingClientRect().top;
      if (offsetTop <= this.stickyTop) {
        this.sticky();
        return;
      }
      this.reset();
    },
    sticky() {
      if (this.isSticky) {
        return;
      }
      this.position = "fixed";
      this.width = this.width + "px";
      this.isSticky = true;
    },
    reset() {
      if (!this.isSticky) {
        return;
      }
      this.position = "";
      this.width = "auto";
      this.isSticky = false;
    },
    handleResize() {
      if (!this.isUse) {
        return;
      }
      if (this.isSticky) {
        this.width = this.$el.getBoundingClientRect().width + "px";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>