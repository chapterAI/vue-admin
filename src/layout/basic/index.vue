
<template>
  <div id="layout">
    <!-- 侧边栏 -->
    <div id="sideBar-container">
      <sidebar :collapse="collapse"></sidebar>
    </div>
    <!-- 右侧主体 -->
    <div>
      <!-- 上导航 -->
      <!-- 上记录栏 -->
      <!-- 设置窗口 -->
      <!-- body部分 -->
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view id="main-app"></router-view>
        </keep-alive>
      </transition>
    </div>
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
    return {
      collapse: false,
    };
  },
  methods: {
    toggleCollapse() {
      if (this.collapse) {
        this.collapse = false;
      } else {
        this.collapse = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";

#layout {
  display: flex;
  #sideBar-container {
    width: 15vw;
    height: 100vh;
    background-color: $menuBg;
    overflow: auto;
  }

  #main-app {
    width: 85vw;
    height: 100vh;
    overflow: auto;
  }
}
</style>
