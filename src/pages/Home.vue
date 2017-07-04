<template>

<div>
<my-data></my-data>
<config></config>

</div>
</template>
<script>
  import Config from './Config.vue'
  import MyData from './MyData.vue'
  export default {
  components:{Config,MyData},

  }
</script>
<style>
  .apiList li{
    padding: 6px 0;
  }
  .apiList a{
    font-size: 15px;
  color:#2B2F3E ;
  }
  .apiList a:hover{
    color: #ff404b;
    text-decoration: underline;
  }
</style>

