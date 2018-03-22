/**
 * Created by jsj on 2018/3/20.
 * http://blog.csdn.net/pretent/article/details/45204909 cookie和session
 */
var express = require('express');
// var util=require('util');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/setc',function (req,res) {
    res.cookie('mycookie','jingjing had came here...',{expires:new Date(Date.now()+900000),httpOnly:true})
    res.end('cookie set ok');
});
app.get('/getc',function (req,res) {
    console.log(req.cookies.mycookie);
    res.end('cookie get ok');    
})

var server = app.listen(8888,function () {
    var host = server.address().address
    var port = server.address().port
    console.log("%s:%s is running...",host,port)
});
