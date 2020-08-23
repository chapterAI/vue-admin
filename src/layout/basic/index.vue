<template>
  <div id="layout">
    <!-- 侧边栏 -->
    <div id="sideBar-container">
      <sidebar onselectstart="return false"></sidebar>
    </div>
    <!-- 右侧主体 -->

    <div id="main-container">
      <!-- 上导航 -->
      <navbar id="nav-bar" onselectstart="return false"></navbar>
      <!-- 上记录栏 -->
      <tagviews id="tag-views" onselectstart="return false"></tagviews>
      <!-- 设置窗口 -->
      <!-- main部分 -->
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="getCacheViews">
          <router-view id="main-app" v-if="isRouterAlice"></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import Tagviews from "./tagviews/TagViews";
import { mapGetters } from "vuex";

export default {
  components: {
    Sidebar,
    Navbar,
    Tagviews,
  },
  data() {
    return {
      isRouterAlice: true,
    };
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      this.isRouterAlice = false;
      this.$nextTick(function () {
        this.isRouterAlice = true;
      });
    },
  },
  computed:{
    ...mapGetters({
      getCacheViews:'cache/getCacheViews'
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
$sideBarWidth: 13.4vw;

#layout {
  display: flex;
  #sideBar-container {
    width: $sideBarWidth;
    height: 100vh;
    background-color: $menuBg;
  }

  #main-container {
    width: 100-$sideBarWidth;
    height: 100vh;
    overflow: auto;
    overflow-x: hidden;
    #nav-bar {
      height: 7.2vh;
      overflow: hidden;
    }
    #tag-views {
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }
    #main-app {
    }
  }
}
</style>
