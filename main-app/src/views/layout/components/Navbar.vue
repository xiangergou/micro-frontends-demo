/*
 * @Author: liuxia
 * @Date: 2019-01-16 10:13:02
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-16 10:13:02
 */

<template>
  <div class="navbar-wrapper">
    <el-menu
      class="navbar"
      mode="horizontal">

      <!-- tabBar -->
      <hamburger
        :toggle-click="toggleSideBar"
        :is-active="sidebar.opened"
        class="hamburger-container"/>
      <tags-view/>
      <div class="right_container">
        <div class="right-menu">
          <el-tooltip
            effect="dark"
            content="全屏"
            placement="bottom">
            全屏
            <screenfull class="screenfull right-menu-item"/>
          </el-tooltip>
          <el-tooltip
            effect="dark"
            content="换肤"
            placement="bottom">
            <theme-picker class="theme-switch right-menu-item"/>
          </el-tooltip>
          <el-dropdown
            class="avatar-container right-menu-item"
            trigger="click">
            <div class="avatar-wrapper">
              <img :src="avatar"  class="user-avatar">
              <span class="user-name">{{ name }}</span>
              <i class="el-icon-arrow-down"/>
            </div>
            <el-dropdown-menu
              slot="dropdown"
              class="user-dropdown">
              <el-dropdown-item>
                <span
                  style="display:block;"
                  @click="layer_showUserInfo = true">个人信息</span>
              </el-dropdown-item>
              <router-link
                class="inlineBlock"
                to="/">
                <el-dropdown-item>
                  首页
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span
                  style="display:block;"
                  @click="logout">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-menu>
    <!-- 个人信息 -->
    <el-dialog
      :visible.sync="layer_showUserInfo"
      title="个人信息"
      width="600px"
      @close="dialogClose">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        status-icon
        label-width="100px">
        <el-form-item
          label="用户名"
          prop="name">
          <el-input
            v-model="ruleForm.name"
            disabled/>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import ThemePicker from '@/components/ThemePicker'
import TagsView from './TagsView'
export default {
  name: 'Navbar',
  components: {
    Hamburger,
    Screenfull,
    ThemePicker,
    TagsView
  },
  data () {
    return {
      layer_showUserInfo: false,
      ruleForm: {
        name: this.$store.state.user.name
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name'
    ])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    },
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    dialogClose () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-wrapper{
  width: 100%;
  height: 60px;
  .navbar{
    height: 100%;
    border-radius: 0px !important;
    display: flex;
    align-content: center;
    align-items: center;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .08);
    padding: 0 10px;
    box-sizing: border-box;
  }
  .right_container {
    position: absolute;
    right: 20px;
    z-index: 1;
  }
  .right-menu {
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    height: 100%;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 5px;
    }
    .screenfull {
      padding: 4px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
    }
    .avatar-container {
      .avatar-wrapper {
        cursor: pointer;
        position: relative;
        height: 40px;
        display: flex;
        align-items: center;
      }
      .user-name {
        position: relative;
        margin: 0 5px;
        max-width: 60px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .user-avatar {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
