<template>
  <div>
    <Col span="3">
    <div>
      <div style="width: 200px;height:20px;background-color: rgb(78,84,107);color: white">全局配置</div>
      <ul class="apiList" style="text-align: left;padding-left: 15px;">
        <li> <router-link to="/index">silent</router-link></li>
        <li> <router-link to="/index">optionMergeStrategies</router-link></li>
        <li> <router-link to="/index">devtools</router-link></li>
        <li> <router-link to="/index">errorHandler</router-link></li>
        <li> <router-link to="/index">ignoredElements</router-link></li>
        <li> <router-link to="/index">keyCodes</router-link></li>
        <li> <router-link to="/index">performance</router-link></li>
        <li> <router-link to="/index">productionTip</router-link></li>

      </ul>
    </div>
    </Col>
  </div>
</template>
<script>
  export default {
     name:'Config',
  }
</script>
<style scoped>

</style>
