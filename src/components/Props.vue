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
        <ol style="text-align: left;font-size: 16px;line-height: 28px">
          <li><p> <Icon type="chevron-right"></Icon> Vue官网：<code class="code">props</code>可以是数组或对象，用于接收来自父组件的数据。<code class="code">props</code>可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。<code class="code">props</code>最多的使用场景是父组件向子组件专递数据，在构建组件过程中也是被大量应用。
        </p></li>
          <li><p> <Icon type="chevron-right"></Icon> 组件是有自己的数据属性的，这个跟实例不一样，子实例可以访问自己的数据，还能拿到集成的父类的数据。子组件只能访问自己的数据，不能直接访问父组件的数据，子组件想要拿到父组件的数据则需通过<code class="code">props</code>传递。
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

      <!--4.理解-->
      <div>
        <Row>
          <Col span="3" style="text-align: left">
          <Tag color="blue">4.深入</Tag>
          </Col>
        </Row>
        <ol style="text-align: left">
          <li><p class="exampleTitle"><code class="code">props</code>源码：<code class="code">props</code>的原理是通过遍历组件的自定义属性，然后解析并将其绑定到<code class="code">$data</code>中去。这也解释了为什么通过<code class="code">props</code>传递的数据可以直接通过<code class="code">this.someData</code>拿到。</p>
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
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    name: 'Props',
    data() {
      return {
        settings: {
          maxScrollbarLength: 600,
          wheelPropagation: true,
          wheelSpeed: 0.5,
        }
      }
    },
    components: {VuePerfectScrollbar}

  }
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
    font-size: 16px;
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