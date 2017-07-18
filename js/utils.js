
var utils = {
    //类数组转数组
    makeArray: function (arg) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(arg);
        } catch (e) {
            for (var i = 0; i < arg.length; i++) {
                ary.push(arg[i]);
            }
        }
        return ary;
    },
    //JSON字符串格式转数组格式
    jsonParse: function (jsonStr) {
        return 'JSON' in window ? JSON.parse(jsonStr) : eval('+jsonStr+');
    },
    //获得当前元素的上一个哥哥元素节点
    prev: function (curEle) {
        if (curEle.previousElementSibling) {
            return curEle.previousElementSibling;
        }
        var pre = curEle.previousSibling;
        while (pre && pre.nodeType !== 1) {
            pre = pre.previousSibling;
        }
        return pre;
    },
    //获得当前元素的所有子元素
    getChildren: function (curEle) {
        var aChild = curEle.childNodes;
        var ary = [];
        for (var i = 0; i < aChild.length; i++) {
            if (aChild[i].nodeType === 1) {
                ary.push(aChild[i])
            }
        }
        return ary;
    },
    //判断当前属性是否是某个对象的共有属性
    hasPubProperty: function (attr, obj) {
        return 'attr' in obj.prototype && !obj.hasOwnProperty(attr);
    },
    getCss:function (curEle,attr){
        var val=null;
        var reg=null;
        if('getComputedStyle' in window){
            val=getComputedStyle(curEle,false)[attr];
        }else{
            if(attr=='opacity'){
                val=curEle.currentStyle.filter;//alpha(opacity=10)
                reg=/^alpha\(opacity[=:](\d+(\.\d+)?)\)$/g;
                //如果正则中加了全局g,test和exec都会影响lastIndex;
                // return reg.test(val)?reg.exec(val)[1]/100:1;
                /*if(reg.test(val)){
                 console.log(RegExp.$1)//拿到当前大正则的第一个小分组； RegExp.$2 拿到第二个小分组； 。。。。最大能拿到$9；
                 }*/
                return reg.test(val)?RegExp.$1/100:1;
            }
            val=curEle.currentStyle[attr];
        }
        //升级1：对单位的处理
        reg=/^(left|top|right|bottom|width|height|((margin|padding)(left|top|right|bottom)?))$/gi;//记得一定要区分大小写；
        return reg.test(attr)?parseFloat(val):val;
    },
    win:function win(attr,value){
        //arguments接收的是实参的个数；跟形参没关系；
        if(arguments.length==1){
            return document.documentElement[attr]||document.body[attr];
        }else if(arguments.length==2){
            document.documentElement[attr]=document.body[attr]=value;
        }
    },
    offset: function(curEle){
        var par=curEle.offsetParent;
        var l=curEle.offsetLeft;
        var t=curEle.offsetTop;
        while(par){
            //IE8浏览器下offsetLeft已经包含了边框；
            //只有在非IE8浏览器下，才需要累加边框；
            if(window.navigator.userAgent.indexOf('MSIE 8')===-1){
                l+=par.clientLeft;
                t+=par.clientTop;
            }
            l+=par.offsetLeft;
            t+=par.offsetTop;
            par=par.offsetParent;
        }
        return {left:l,top:t};
    }
};

