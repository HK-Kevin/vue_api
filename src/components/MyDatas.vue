<template>
    <div>
      <Alert type="success" class="item_title"><p>vm.data</p>
        <p style="text-align: right">Object | Function</p></Alert>
      <div>
        <Row>
          <Col span="3" style="text-align: left">
          <Tag color="blue">1.概述</Tag>
          </Col>
        </Row>
        <ol style="text-align: left;font-size: 18px">
          <li><p><code class="code">data</code>属性是<code class="code">Vue</code>实例的数据对象(<code class="code">Vue.prototype.data={}</code>)，通过<code class="code">vm.$data</code>)可以访问到原始数据，由于<code class="code">Vue</code>做过代理处理，<code class="code">Vue</code>实例能够直接访问到data对象上的所有属性（<code class="code">vm.a=vm.$data.a</code>）。
        </p></li>
        </ol>

      </div>
      <div>
        <Row>
          <Col span="3" style="text-align: left">
          <Tag color="blue">2.实例</Tag>
          </Col>
        </Row>
        <ol style="text-align: left">
          <li><p class="exampleTitle">一般使用</p>
            <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
          var data = { a: 1 }// 直接创建一个实例
          var vm = new Vue({
          data: data})
          vm.a               // -> 1
          vm.$data === data  // -> true

        </code></pre>
            </div>
          </li>
          <li><p class="exampleTitle">组件中使用</p>
            <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
          var Component = Vue.extend({
           data: function () {//在组件中使用必须是函数形式
           return { a: 1 }}})
        </code></pre>
            </div>
          </li>

        </ol>
      </div>
      <div>
        <Row>
          <Col span="3" style="text-align: left">
          <Tag color="blue">3.注意</Tag>
          </Col>
        </Row>
        <ol style="text-align: left">
          <li><p class="question">1.为什么组件中的data必须通过函数返回对象？</p>
            <p class="answer">答：因为<code class="code">data</code>是挂载<code class="code">Vue</code>的原型上面的，如果直接写成对象形式，会造成组件之间的 <strong>数据共用问题</strong>；若是通过函数 <code
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
            <p class="answer">答：因为因为箭头函数绑定父级的上下文，不会指向预定的<code class="code">vue</code>实例。</p>
            <p style="color: red;font-size: 14px">PS:关于this需要记住的几点：</p>
            <ul style="margin-left: 40px;font-size: 14px">
              <li>①给元素的事件绑定方法，事件触发的时候，方法中的<code class="code">this</code>是当前元素(<code class="code">DOM2</code>事件绑定在IE低版本浏览器中方法中的<code
                class="code">this</code>依然是<code class="code">window=>attachEvent</code>)；


              </li>
              <li>②函数被调用的时候，看前面是否有点，点前面是谁，<code class="code">this</code>就是谁;如果没有点，默认是被<code class="code">window</code>调用的；
              </li>
              <li>③自执行函数(或者部分匿名函数)中的<code class="code">this</code>是<code class="code">window</code>；</li>
              <li>④构造函数中的<code class="code">this</code>是当前的类的一个实例；</li>
              <li>⑤使用call/apply/bind可以改变<code class="code">this</code>指向问题；</li>
              <li>⑥箭头函数中的<code class="code">this</code>就看所在的父级作用域<code class="code">this</code>是谁</li>
            </ul>
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

</template>
<script>

  export default {
    name: 'Props',
    components: {}
  }
</script>


<style scoped>
  .item_title {
    border-left: 10px solid red;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
  }

  pre, xmp, plaintext, listing {
    margin: 0;
  }

  .exampleTitle {
    border-left: 3px solid dodgerblue;
    font-size: 16px;
    padding: 3px 0 3px 3px
  }

  .question {
    color: red;
    font-size: 16px;
    font-weight: bolder;
  }

  .answer {
    font-size: 18px;
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
