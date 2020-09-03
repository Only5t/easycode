<template>
  <div class="app">
    <el-container>
      <el-aside class="app-side index-side-left" :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
        <div class="app-side-logo">
          <img src="../../assets/logo.png" :width="isCollapse ? '60' : '60'" height="60"/>
        </div>
        <div>
          <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" :collapse="isCollapse">
            <el-submenu index="index">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">权限管理</span>
              </template>
              <el-menu-item index="1-1" >用户管理</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="app-header">
          <div style="width:60px;cursor: pointer" @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>
          <el-menu default-active="1" class="el-menu-demo tab-page" mode="horizontal"
                   @select="handleSelect" active-text-color="#409EFF">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
              <a href="#">订单管理</a>
            </el-menu-item>
          </el-menu>
          <div class="app-header-userinfo">
            <el-dropdown trigger="hover" :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main class="main">
          <BreadCrumb/>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Vue from 'vue'
import BreadCrumb from 'BreadCrumb.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    BreadCrumb
  }
})
export default class Container extends Vue {}
</script>
<style>
</style>
