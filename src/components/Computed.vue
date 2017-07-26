<template>

  <div>
    <Alert type="success" class="item_title"><p>vm.computed</p>
      <p style="text-align: right">{ [key: string]: Function | { get: Function, set: Function } }</p></Alert>
    <!--1.概述-->
    <div>
      <Row>
        <Col span="3" style="text-align: left">
        <Tag color="blue">1.概述</Tag>
        </Col>
      </Row>
      <ol style="text-align: left;font-size: 18px;line-height: 28px">
        <li><p> <Icon type="chevron-right"></Icon> 计算属性是用来声明式的描述一个值依赖了其它的值。当模板里把数据绑定到一个计算属性上时， <code class="code">Vue</code>会在其依赖的任何值导致该计算属性改变时更新 <code class="code">DOM</code> 。
        </p></li>
        <li><p> <Icon type="chevron-right"></Icon>
          使用场景：在需要对数据进行复杂处理，且可能多次使用的情况下，尽量采取计算属性的方式。
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
        <li><p class="exampleTitle">一般使用：用法和 <code class="code">methods</code>差不太多，只是数据会被缓存起来，等依赖的数据发生变化的时候才会重新计算</p>
          <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
        &lt;p&gt;Original message: "{{ message }}"&lt;/p&gt;
        &lt;p&gt;Computed reversed message: "{{ reversedMessage }}"&lt;/p&gt;

        var vm = new Vue({
             el: '#example',
             data: {message: 'Hello'},
             computed: {
                reversedMessage: function () {
                return this.message.split('').reverse().join('')}}})
        </code></pre>
          </div>
        </li>
        <li><p class="exampleTitle">使用<code class="code">setter</code>：在<code class="code">computed</code>中不仅可以设置<code class="code">getter</code>，同时可以设置<code class="code">setter</code>。</p>
          <div class="codeBox">
          <pre v-highlight><code class="codeStyle">
       var vm = new Vue({
          data: { a: "hello" },
          computed: {
        // 读取和设置
          aPlus: {
            get: function () {
               return this.a + 'boy'
             },
            set: function (a) {
               this.a = a}}}})
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
        <li><p class="question">1.vue组件中computed不能使用箭头函数？</p>
          <p class="answer">答：因为因为箭头函数绑定父级的上下文，不会指向预定的<code class="code">vue</code>实例。而<code class="code">computed</code>computed是挂载<code class="code">vue</code>实例上的方法。
        </p>
        </li>

        <li><p class="question">2.computed中的函数名能和data中的一样么？</p>
          <p class="answer">答：建议不要用相同的名字，在V2.0.3中computed定义的属性会覆盖<code class="code">data</code>中的数据，而在V2.2.4中做了判断，<code class="code">computed</code>不会覆盖<code class="code">data</code>，data<code class="code">data</code>数据优先，不能取到<code class="code">computed</code>中的数据。</p>
        </li>
        <li><p class="question">3.computed必须使用data里面的数据吗？</p>
          <p class="answer">答：不是必须，建议依赖<code class="code">data</code>里面的数据，<code class="code">computed</code>是严重依赖<code class="code">data</code>属性的，如果<code class="code">computed</code>里面没有依赖<code class="code">data</code>里面的属性，也就没有用<code class="code">computed</code>的必要了。
        </p>
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
           //初始化计算属性
      function initComputed (vm: Component, computed: Object) {
         const watchers = vm._computedWatchers = Object.create(null)
         for (const key in computed) {
            const userDef = computed[key]
            const getter = typeof userDef === 'function' ? userDef : userDef.get
            //通过watch为计算属性添加动态响应.
            watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions)
            //组件定义的计算属性已经在组件原型上定义了。我们只需要在这里定义实例化的计算属性。
            if (!(key in vm)) {
            defineComputed(vm, key, userDef)}}
         }

      function defineComputed (target: any, key: string, userDef: Object | Function) {
           //userDef如果是函数类型，只有getter
           if (typeof userDef === 'function') {
              sharedPropertyDefinition.get = createComputedGetter(key)
              sharedPropertyDefinition.set = noop
           } else {
            //userDef如果是对象类型，可能存在getter或者setter
              sharedPropertyDefinition.get = userDef.get
              ? userDef.cache !== false
              ? createComputedGetter(key): userDef.get: noop
              sharedPropertyDefinition.set = userDef.set? userDef.set: noop}

          Object.defineProperty(target, key, sharedPropertyDefinition)}

      function createComputedGetter (key) {
            return function computedGetter () {
            const watcher = this._computedWatchers && this._computedWatchers[key]
            if (watcher) {
                if (watcher.dirty) {
                      watcher.evaluate()}
                if (Dep.target) {
                      watcher.depend()}
              return watcher.value}}}

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
    font-size: 16px;
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
