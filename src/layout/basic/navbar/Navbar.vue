<template>
  <div class="navbar">
    <div class="left">
      <humburger
        class="humbuger-container"
        icon-before="el-icon-date"
        icon-after="el-icon-date"
        @toggleClick="toggleSideBar"
      ></humburger>
      <breadcrumb class="breadcrumb-container"></breadcrumb>
    </div>
    <div class="right">
      <header-search class="search-container"></header-search>
      <screenfull class="screenfull-container"></screenfull>
      <el-button class="logout" @click="logout">登出</el-button>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb";
import Humburger from "./hamburger";
import HeaderSearch from "@/components/headersearch";
import Screenfull from "@/components/fullscreen"
import { mapMutations, mapActions } from "vuex";

export default {
  components: {
    Breadcrumb,
    Humburger,
    HeaderSearch,
    Screenfull
  },
  methods: {
    ...mapMutations({
      toggleCollapse: "layout/toggleCollapse",
    }),
    ...mapActions({
      clear: "auth/logout",
    }),
    toggleSideBar() {
      this.toggleCollapse();
    },
    logout() {
      this.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding-right: 20px;
  .left {
    display: flex;
    justify-content: left;
    align-items: center;
    .humbuger-container {
      padding: 0 9px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: rgba(0, 0, 0, 0.025);
        transition: 0.3s;
      }
    }
  }
  .right{
    .search-container{
      display: inline-block;     
      position: relative;
      top:5px;
    }
    .screenfull-container{
      display: inline-block; 
      position: relative;
      top:5px;
      margin-left:1vw;
    }
    .logout{
      margin-left:1.5vw;
    }
  }
}
</style>