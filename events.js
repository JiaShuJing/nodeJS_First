/**
 * Created by jsj on 2018/4/2.
 * events模块只有唯一的一个对象EventEmitter
 * 当添加新的监听器的时候，newListener事件被触发
 * 当移除监听器的时候，removeListener事件被触发
 * 产生事件的对象就是events.EventEmitter的实例
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

//添加事件监听 可以添加多个监听器 监听器按照注册先后顺序执行
event.on('some_event',function (arg1,arg2) {
console.log('some_event被触发...监听器1...参数1为'+arg1+';参数2为'+arg2)
});
event.on('some_event',function (arg1,arg2) {
    console.log('some_event被触发...监听器2...参数1为'+arg1+';参数2为'+arg2)
});
//1s后触发事件监听  
setTimeout(function () {
    event.emit('some_event','参数1','参数2');
},1000)

//自定义监听器 并绑定事件
var listener1=function listener1() {
    console.log('监听器1正在执行...')
}
var listener2=function listener2() {
    console.log('监听器2正在执行...')
}
//监听connection事件
event.on('connection',listener1);
event.addListener('connection',listener2)
function countListener() {
    var eventListenerCount  = EventEmitter.listenerCount(event,'connection');
    console.log('connection事件有'+eventListenerCount+'个监听器...');
}

//触发connection事件
event.emit('connection');
//检查connection事件一共有几个监听器
countListener();
//移除监听器1
event.removeListener('connection',listener1)
console.log('监听器1不再监听connection事件')
//再次触发connection事件
event.emit('connection');
//检查connection事件一共有几个监听器
countListener();

