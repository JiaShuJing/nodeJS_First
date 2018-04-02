/**
 * Created by jsj on 2018/4/2.
 */
const fs = require('fs');
const child_process = require('child_process');

for(var i=0;i<3;i++){
    var workProcess = child_process.exec('node support.js '+i,function (error,stout,sterr) {
        if(error){
            console.log(error.stack)
            console.log('Err code:'+error.code)
            console.log('Signal received:'+error.signal)
        }
        console.log('stout:'+stout)
        console.log('sterr:'+sterr)
    });
   workProcess.on('exit',function (code) {
       console.log('子进程已退出，退出码'+code)
   })
}