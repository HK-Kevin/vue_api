<template>

  <div>
    <Alert type="success" class="item_title"><p>vm.props</p>
      <p style="text-align: right">Array &lt;string&gt; | Object</p></Alert>
    <!--1.概述-->
    <div>
      <Row>
        <Col span="3" style="text-align: left">
        <Tag color="blue">1.概述</Tag>
        </Col>
      </Row>
      <ol style="text-align: left;font-size: 18px;line-height: 28px">
        <li><p> <Icon type="chevron-right"></Icon> Vue官网：<code class="code">props</code>可以是数组或对象，用于接收来自父组件的数据。<code class="code">props</code>可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。<code class="code">props</code>最多的使用场景是父组件向子组件专递数据，在构建组件过程中也是被大量应用。
        </p></li>
        <li><p> <Icon type="chevron-right"></Icon> 组件是有自己的数据属性的，这个跟实例不一样，子实例可以访问自己的数据，还能拿到集成的父类的数据。子组件只能访问自己的数据，不能直接访问父组件的数据，子组件想要拿到父组件的数据则需通过<code class="code">props</code>传递。
        </p></li>
        <li><p> <Icon type="chevron-right"></Icon> <code class="code">propsData</code>只用于<code class="code">new</code>创建的实例中，用于全局扩展时进行数据传递，主要作用是方便测试。。
        </p></li>
      </ol>

    </div>

    <!-- 2.实例-->
    <div>
      <Row>
        <Col span="3" style="text-align: left">
        <Tag color="blue">2.实例</Tag>
        </Col>
      </Row>
      <ol style="text-align: left">
        <li><p class="exampleTitle">一般使用：向组件中传递参数，在组件中可以通过<code class="code">props</code>拿到这个数据，参数未加<code class="code">v-bind</code>绑定，父组件数据变化时，是不能传递到子组件。</p>
          <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
        // 声明 props
        Vue.component('child', {
                props: ['message'], // 就像 data 一样，prop 可以用在模板内
                // 同样也可以在 vm 实例中像“this.message”这样使用
                template: '&lt;span&gt; { { message } } &lt;/span&gt'})

        //向组件传递prop
        &lt;child message="hello!"&gt;&lt;/child&gt;
        </code></pre>
          </div>
        </li>
        <li><p class="exampleTitle">动态绑定：在传递参数的时候通过<code class="code">v-bind</code>绑定，父组件数据变化时，子组件也会变化。下面是<code class="code">iview</code>的一个表单组件。</p>
          <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
        &lt;Form  :rules="ruleInline" &gt;&lt;/Form&gt;
        </code></pre>
          </div>
        </li>

      </ol>
    </div>

    <!--  3.注意-->
    <div>
      <Row>
        <Col span="3" style="text-align: left">
        <Tag color="blue">3.注意</Tag>
        </Col>
      </Row>
      <ol style="text-align: left">
        <li><p class="question">1.<code class="code">props</code>是双向数据流吗？</p>
          <p class="answer">答：<code class="code">vue2.0</code>，作者认为双向绑定破坏了【单向数据流】，为了防止子组件随意修改父组件的状态，取消了 <code class="code">.sync</code>修饰符。但是我们很多时候有修<code class="code">props</code>数据的冲动，主要是两个场景：1.局部共享数据；2.处理成子组件的输出数据；于是在<code class="code">vue2.3</code>中重新引入了 <code class="code">.sync</code> 修饰符。
        </p>
          <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
          // 1.定义一个局部变量，并用 prop 的值初始化它：
          props: ['initialCounter'],
          data: function () {
                return { counter: this.initialCounter }}

          // 2.定义一个计算属性，处理 prop 的值并返回。
          props: ['size'],
          computed: {
                 normalizedSize: function () {

          // 3.使用.sync 修饰符
          &lt;comp :foo.sync="bar"&gt;&lt;/comp&gt;
        </code></pre>
          </div>
        </li>

        <li><p class="question">2.props是引用数据类型的时候，子组件能动态的改变父级的数据。</p>
          <p class="answer">答：因为在JS中，对象和数组是引用数据类型，指向同一个内存空间，如果<code class="code">props</code>是一个对象或者是数组的时候，在子组件内部可以改变父组件的数据。</p>
        </li>
      </ol>
    </div>

    <!--4.理解-->
    <div>
      <Row>
        <Col span="3" style="text-align: left">
        <Tag color="blue">4.深入</Tag>
        </Col>
      </Row>
      <ol style="text-align: left">
        <li><p class="exampleTitle"><code class="code">props</code>静态props原理：静态<code class="code">props</code>的原理是通过遍历组件的自定义属性，然后解析并将其绑定到<code class="code">$data</code>中去。这也解释了为什么通过<code class="code">props</code>传递的数据可以直接通过<code class="code">this.someData</code>拿到。</p>
          <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
      exports._initProps = function () {
          let isComponent = this.$options.isComponent;
          if (!isComponent) return;  //判断是否是组件
          let el = this.$options.el; //获取当前元素
          let attrs = Array.from(el.attributes);//获取该元素上的自定义属性
          attrs.forEach((attr) => { //遍历自定义属性数组
          let attrName = attr.name; //解析
          let attrValue = attr.value;
          this.$data[attrName] = attrValue;}); };//添加到$data中
        </code></pre>
          </div>
        </li>
      </ol>
    </div>

  </div>
</template>
<script>
</script>


<style scoped>
  /*  .scroll-area {
      !*position: relative;*!
      margin: auto;
      width: 500px;
     height: 300px;
    }*/

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
    width: 50%;
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
