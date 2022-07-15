<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';
// const fill = ref(true);
</script>

<template>
  <AppHeader />
  <AppSidebar />
  <!-- 子路由出口 -->
  <router-view />
</template>

<style scoped lang="scss">
.layout {
  height: 100%;

  .logo {
    font-size: 24px;
  }

  .el-header {
    @include style(calc(10px + 2vmin), #ffffff);
    @include flexContainer(row, space-between);

    min-height: 60px;
    background-color: $bg;

    .el-space {
      .el-dropdown {
        color: #ffffff;
        cursor: pointer;

        .el-icon {
          margin-left: 5px;
        }
      }
    }
  }

  .el-aside {
    .el-scrollbar {
      .el-menu {
        height: 100%;

        .el-menu-item {
          a {
            display: inline-block;
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
  }

  .el-main {
    padding: 0;
  }
}
</style>
