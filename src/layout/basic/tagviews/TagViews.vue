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
export default {
  data() {
    return {
      activePath: "/index",
      tabs: [
        {
          title: "Dashboard",
          path: "/index",
          closable:false
        },
        {
          title: "Admin-editor",
          path: "/admin/demo2",
          closable:true
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
          closable:true
        });
        this.activePath = newTab.path;
      }
      if (action === "remove") {
        const path = obj;
        let tabs = this.tabs;
        let activePath = this.activePath;
        if (activePath === path) {
          tabs.forEach((tab, index) => {
            if (tab.path === path) {
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
    handleRoutes(fullPath, title) {
      const index = this.hasSameTab(fullPath);
      if (index >= 0) {
        this.activePath = fullPath;
      } else {
        this.handleTabsEdit({ title: title, path: fullPath }, "add");
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
      if (this.$route.fullPath === this.activePath) {
        return;
      }
      this.$router.push(this.activePath);
    },
  },
  watch: {
    $route: function () {
      const { fullPath, meta } = this.$route;
      const title = meta.title;
      this.handleRoutes(fullPath, title);
    },
  },
  created() {
    const { fullPath, meta } = this.$route;
    const title = meta.title;
    this.handleRoutes(fullPath, title);
  },
};
</script>

<style lang="scss" scoped>
</style>