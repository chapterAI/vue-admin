<template>
  <el-tabs v-model="activePath" type="card" @edit="handleTabsEdit" @tab-click="routerPush">
    <el-tab-pane
      v-for="item in tabs"
      :key="item.path"
      :label="item.title"
      :name="item.path"
      :closable="item.closable"
    ></el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activePath: "/index",
      tabs: [
        {
          title: "Dashboard",
          path: "/index",
          name: "About",
          closable: false,
        },
      ],
    };
  },
  methods: {
    handleTabsEdit(obj, action) {
      if (action === "add") {
        const newTab = obj;
        this.tabs.push({
          title: newTab.title,
          path: newTab.path,
          name: obj.name,
          closable: true,
        });
        this.activePath = newTab.path;
        this.addCacheView(obj.name)
      }
      if (action === "remove") {
        const path = obj;
        let tabs = this.tabs;
        let activePath = this.activePath;
        if (activePath === path) {
          tabs.forEach((tab, index) => {
            if (tab.path === path) {
              this.delCacheView(tab.name)
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activePath = nextTab.path;
              }
            }
          });
        }
        this.activePath = activePath;
        this.tabs = tabs.filter((tab) => tab.path !== path);
        this.routerPush();
      }
    },
    handleRoutes(fullPath, title, name) {
      const index = this.hasSameTab(fullPath);
      if (index >= 0) {
        this.activePath = fullPath;
      } else {
        this.handleTabsEdit(
          { title: title, path: fullPath, name: name },
          "add"
        );
      }
    },
    hasSameTab(path) {
      let targetIndex = -1;
      this.tabs.forEach((tab, index) => {
        if (path === tab.path) {
          targetIndex = index;
          return;
        }
      });
      return targetIndex;
    },
    routerPush() {
      if (this.$route.path === this.activePath) {
        return;
      }
      this.$router.push(this.activePath);
    },
    ...mapMutations({
      addCacheView: "cache/addCacheView",
      delCacheView: "cache/delCacheView",
    }),
  },
  watch: {
    $route: function () {
      const { path, meta, matched } = this.$route;
      const title = meta.title;
      //1写死，表示第二层
      name = matched[1].components.default.name;
      this.handleRoutes(path, title, name);
    },
  },
  created() {
    const { path, meta, matched } = this.$route;
    const title = meta.title;
    const name = matched[1].components.default.name;
    this.handleRoutes(path, title, name);
  },
};
</script>

<style lang="scss" scoped>
</style>