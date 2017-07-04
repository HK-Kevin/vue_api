<template>
  <div id="app">
    <div class="layout">
      <Row type="flex">
        <i-col span="3" class="layout-menu-left">
          <Menu active-name="1-1   " theme="dark" width="auto" :open-names="['1']" accordion>
            <Input placeholder="请输入关键字" size="small" class="search">
            </Input>
            <div class="home" >
              <Icon type="fireball"></Icon>
              HOME
            </div>
            <Submenu name="1">
              <template slot="title" >
                <Icon type="fireball"></Icon>
                全局API
             </template>
              <Menu-item name="1-1">Vue.extend</Menu-item>
              <Menu-item name="1-2">Vue.nextTick</Menu-item>
              <Menu-item name="1-3">Vue.delete</Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="fireball"></Icon>
                选项/数据
            </template>
              <Menu-item name="2-1"><router-link to="/myDatas">data</router-link></Menu-item>
              <Menu-item name="2-2"><router-link to="/props">props</router-link></Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="fireball"></Icon>
                选项 / DOM
            </template>
              <Menu-item name="3-1">el</Menu-item>
              <Menu-item name="3-2">template</Menu-item>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="fireball"></Icon>
                生命周期钩子
            </template>
              <Menu-item name="4-1">beforeCreate</Menu-item>
              <Menu-item name="4-2">created</Menu-item>
              <Menu-item name="4-3">beforeMount
mounted</Menu-item>
              <Menu-item name="4-4">beforeUpdate</Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="21">
          <div class="layout-header" >hfhsdfh</div>
          <div class="layout-content">
            <div class="layout-content-main">
              <router-view style="height: 800px;width:100%;overflow: hidden"> </router-view>
            </div>
          </div>
          <div class="layout-copy">
            2011-2017 &copy; HK
        </div>
        </i-col>
      </Row>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
 .layout{
   border: 1px solid #d7dde4;
   background: #f5f7f9;
   position: relative;
 }
.layout-breadcrumb{
  padding: 0 15px 0;
}
.layout-content{
  min-height: 800px;
  margin: 0;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main{
  padding: 10px;
}
.layout-copy{
  text-align: center;
  padding: 0 0 20px;
  color: #9ea7b4;
}
.layout-menu-left{
  background: #464c5b;
}
.layout-header{
  height: 40px;
  background: #ff404b;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 0 auto;
}
.search{
  margin: 10px 0;
  padding:0 20px ;
}
.ivu-menu-item{
  text-align: left;
}
.ivu-menu-submenu{
  text-align: left;
  border-top:1px dotted gray;
}
.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
  padding: 8px 24px!important;
}
.home{
  height: 20px;
  color: white;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover{
  background: #313540!important;
  font-size: 18px;
  border-left: 5px solid white;

}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item:hover{
  font-size: 18px;
}
.ivu-menu-opened{
  background: #ff404b;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}


</style>
