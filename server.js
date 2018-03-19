/**
 * Created by jsj on 2018/3/17.
 * Http服务器简单实现
 */
var http = require('http');
http.createServer(function (request,response) {
        //发送http头部
        response.writeHead(200,{'Content-Type':'text/plain'});
        //发送响应数据
        response.end('hello world\n');
    }
).listen(8888);
console.log('Server are running at locahost://8888');