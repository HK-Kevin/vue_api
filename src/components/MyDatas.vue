<template>
  <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
    <div>
      <Alert type="success" class="item_title"><p>vm.data</p>
        <p style="text-align: right">Object | Function</p></Alert>
      <Row>
        <Col span="3" style="text-align: left">
        <Tag color="blue">1.概述</Tag>
        </Col>
      </Row>
      <Row>
        <Col span="24">
        <p style="font-size: 10px">data属性是Vue实例的数据对象(<code class="code">Vue.prototype.data={}</code>),通过vm.$data可以访问到原始数据，由于Vue做过代理处理，Vue实例能够直接访问到data对象上的所有属性（vm.a=vm.$data.a）
        </p>
        </Col>

      </Row>
      <Row>
        <Col span="3" style="text-align: left;margin-top: 20px">
        <Tag color="blue">2.实例</Tag>
        </Col>
      </Row>
      <div>
        <Row>
          <Col span="3" style="text-align: left">
          <Tag color="blue">3.注意</Tag>
          </Col>
        </Row>
        <ol style="text-align: left">
          <li><p class="question">1.为什么组件中的data必须通过函数返回对象？</p>
            <p class="answer">答：因为我们知道，<code class="code">data</code>是挂载<code class="code">Vue</code>的原型上面的，如果直接写成对象形式，会造成组件之间的 <strong>数据共用问题</strong>；若是通过函数 <code
              class="code">return</code>的对象是唯一的对象，不会产生组件之间的共用问题。</p>

            <p class="answer">
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp如下代码所示 :<code class="code">component1</code>和<code class="code">component2</code>共用数据体。
        </p>
            <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
          var MyComponent = function(){}
              MyComponent.prototype.data={
                       a:1
                       b:2}
          var component1 = new MyComponent()
          var component2 = new MyComponent()
          component1.data.a = component2.data.b

        </code></pre>
            </div>
            <p class="answer">
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp如下代码所示 :<code class="code">component1</code>和<code class="code">component2</code>拥有各自的数据体。
        </p>
            <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
          var  Mycomponent  = function(){
                 this.data = this.data() }
          MyComponent.prototype.data  = function(){
           return { a:1
                    b:2}}
        </code></pre>
            </div>


          </li>
          <li><p class="question">1.为什么组件中的data必须通过函数返回对象？</p>
            <p class="answer">答：因为我们知道，<code class="code">data</code>是挂载<code class="code">Vue</code>的原型上面的，如果直接写成对象形式，会造成组件之间的 <strong>数据共用问题</strong>；若是通过函数 <code
              class="code">return</code>的对象是唯一的对象，不会产生组件之间的共用问题。</p>

            <p class="answer">
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp如下代码所示 :<code class="code">component1</code>和<code class="code">component2</code>共用数据体。
        </p>
            <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
          var MyComponent = function(){}
              MyComponent.prototype.data={
                       a:1
                       b:2}
          var component1 = new MyComponent()
          var component2 = new MyComponent()
          component1.data.a = component2.data.b

        </code></pre>
            </div>
            <p class="answer">
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp如下代码所示 :<code class="code">component1</code>和<code class="code">component2</code>拥有各自的数据体。
        </p>
            <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
          var  Mycomponent  = function(){
                 this.data = this.data() }
          MyComponent.prototype.data  = function(){
           return { a:1
                    b:2}}
        </code></pre>
            </div>


          </li>

          <li><p class="question">2.vue组件中data函数不能使用箭头函数</p>
            <p class="answer">答：因为我们知道，<code class="code">data</code>是挂载<code class="code">Vue</code>的原型上面的，如果直接写成对象形式，会造成组件之间的 <strong>数据共用问题</strong>；若是通过函数 <code
              class="code">return</code>的对象是唯一的对象，不会产生组件之间的共用问题。</p>
          </li>
        </ol>
      </div>

      <div>
        <Row>
          <Col span="3" style="text-align: left">
          <Tag color="blue">4.深入</Tag>
          </Col>
        </Row>
        <p>深入理解深度响应</p></div>

    </div>
  </VuePerfectScrollbar>
</template>
<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    name: 'Props',
    data() {
      return {
        settings: {
          maxScrollbarLength: 600,
          wheelPropagation: false,
          wheelSpeed: 0.5,
        }
      }
    },
    components: {VuePerfectScrollbar}

  }
</script>


<style scoped>
  .scroll-area {
    position: relative;
    margin: auto;
    width: 400px;
    height: 300px;
  }
  .item_title {
    border-left: 10px solid red;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
  }

  pre, xmp, plaintext, listing {
    margin: 0;
  }

  .question {
    color: red;
    font-size: 16px;
    font-weight: bolder;
  }

  .answer {
    font-size: 16px;
  }

  .codeBox {
    background-color: rgb(246, 246, 246) !important;
    width: 480px;
    margin-left: 10%;
  }

  .code {
    color: #e96900;
    padding: 3px 5px;
    margin: 0 2px;
    border-radius: 2px;
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 0.8em;
    background-color: #f8f8f8;
  }

  .codeStyle {
    background-color: rgb(246, 246, 246) !important;
    font-size: 16px;
  }

  .hljs {
    padding: 0;
  }
</style>
