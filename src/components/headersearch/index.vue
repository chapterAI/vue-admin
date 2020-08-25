<template>
  <div>
    <i :class="[open?'el-icon-zoom-out':'el-icon-zoom-in','icon-container']" @click.stop="click"></i>
    <transition name="translation">
      <el-select
        v-show="open"
        ref="headerSearchSelect"
        v-model="search"
        :remote-method="querySearch"
        filterable
        default-first-option
        remote
        placeholder="Search"
        class="header-search-select"
        @change="change"
      >
        <el-option
          v-for="item in options"
          :key="item.item.path"
          :value="item.item"
          :label="item.item.title.join(' > ')"
        />
      </el-select>
    </transition>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import path from "path";
import { mapGetters } from "vuex";
import { log } from "util";

export default {
  data() {
    return {
      open: false,
      search: "",
      options: [],
      searchPool: [],
      fuse: undefined,
    };
  },
  mounted() {
    this.searchPool = this.filterRoutes(this.getRoutes);
  },
  computed: {
    ...mapGetters({
      getRoutes: "auth/getRoutes",
    }),
  },
  watch: {
    getRoutes() {
      this.searchPool = this.filterRoutes(this.getRoutes);
    },
    searchPool(list) {
      this.initFuse(list);
    },
    open(value) {
      if (value) {
        document.body.addEventListener("click", this.close);
      } else {
        document.body.removeEventListener("click", this.close);
      }
    },
  },
  methods: {
    change(val) {
      this.search = "";
      this.options = [];
      this.$nextTick(() => {
        this.open = false;
      });
      if (this.$route.path === val.path) {
        return;
      }
      this.$router.push(val.path);
    },
    querySearch(query) {
      console.log(query);
      if (query !== "") {
        this.options = this.fuse.search(query);
      } else {
        this.options = [];
      }
      console.log(this.options);
    },
    click() {
      this.open = !this.open;
      if (this.open) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus();
      }
    },
    close() {
      this.options = [];
      this.open = false;
    },
    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: "title",
            weight: 0.7,
          },
          {
            name: "path",
            weight: 0.3,
          },
        ],
      });
    },
    filterRoutes(routes, basePath = "/", prefixTitle = []) {
      let res = [];

      for (const route of routes) {
        // skip hidden router
        if (route.hidden) {
          continue;
        }

        const data = {
          path: path.resolve(basePath, route.path),
          title: [...prefixTitle],
        };

        if (route.meta && route.meta.title) {
          data.title = [...data.title, route.meta.title];

          if (route.redirect !== "noRedirect") {
            res.push(data);
          }
        }

        if (route.children) {
          const tempRoutes = this.filterRoutes(
            route.children,
            data.path,
            data.title
          );

          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes];
          }
        }
      }
      return res;
    },
  },
};
</script>

<style lang="scss">
.icon-container {
  font-size: 26px;
  cursor: pointer;
}
.header-search-select {
  font-size: 18px;

  .el-input__inner {
    position: relative;
    top: -5px;
    height: 35px;
    vertical-align: middle;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #d9d9d9;
    box-shadow: none !important;
    margin-left: 10px;
    cursor: text !important;
    transition: width 0.2s;
  }
}
</style>