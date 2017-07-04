<template>
  <div>
    <Col span="3">
    <div>
      <div style="width: 200px;height:20px;background-color: rgb(78,84,107);color: white">数据</div>
      <ul class="apiList" style="text-align: left;padding-left: 15px;">
        <li> <router-link to="/myDatas">data</router-link></li>
        <li> <router-link to="/props">props</router-link></li>


      </ul>
    </div>
    </Col>
  </div>
</template>
<script>
  export default {
     name:'MyData',
  }
</script>
<style scoped>

</style>
