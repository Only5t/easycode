<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{path:'/index'}">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="bread in breadList" v-bind:key="bread">
      {{breadsName[bread]}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
  import {Provide, Component, Vue, Watch} from 'vue-property-decorator'

  @Component
  export default class BreadCrumb extends Vue {
    @Provide() private breadsName: {[index: string]: string} = {
      '1': 'title1',
      '1-1': 'user'
    };
    @Provide() private breadList: string[] = [];
    private create() {
      this.getBreadList();
    }
    @Watch('$route')
    private getBreadList() {
      this.breadList = []
      for (const routeInfo of this.$route.matched) {
        if (typeof routeInfo.name === 'string' && routeInfo.name != 'index') {
          this.breadList.push(routeInfo.name)
        }
      }
    }
  }
</script>
