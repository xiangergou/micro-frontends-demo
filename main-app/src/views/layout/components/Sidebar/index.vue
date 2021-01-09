<template>
  <div class="layout-side">
    <el-menu
      :default-active="$route.path"
      mode="vertical"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
    >
      <sidebar-item :routes="permission_routers" />
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["permission_routers"])
  }
};
</script>
<style lang="scss" scoped>
.el-menu {
  min-height: 100%;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  border-right: 0;
  box-sizing: border-box;
}
</style>
