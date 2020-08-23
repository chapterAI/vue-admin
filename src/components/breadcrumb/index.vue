<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <router-link to="/index" class="breadcrumb-font a-font">Dashboard</router-link>
      </el-breadcrumb-item>
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(record,index) in getCurRecord" :key="record.name">
          <router-link
            v-if="index !== getCurRecord.length-1"
            :to="record.path"
            class="breadcrumb-font a-font"
          >{{record && record.name}}</router-link>
          <span v-else class="breadcrumb-font span-font">{{record && record.name}}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  methods: {
    redirect(record, item) {
      if (record.redirect) {
        item.path = record.redirect;
      }
    },
    isSamePath(path) {
      const { fullPath } = this.$route;
      return fullPath === path;
    },
  },
  computed: {
    getCurRecord() {
      const res = [];
      this.$route.matched.forEach((record) => {
        const noMenu = record.meta && record.meta.noMenu;
        const name = record.meta && record.meta.title;
        if (noMenu) return;

        const item = {};
        if (record.path === "") {
          item.path = "/";
        } else {
          item.path = record.path;
        }
        item.name = name;
        this.redirect(record, item);
        res.push(item);
      });
      return res;
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-font {
  font-size: 15px;
  font-weight: 200;
}
.span-font {
  color: lightgrey;
}
</style>