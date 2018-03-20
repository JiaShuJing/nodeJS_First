/**
 * Created by jsj on 2018/3/19.
 * 菜鸟教程
 * 路由
 */
var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var fs=require('fs'); //文件操作
/*multer中间件
Multer是Express官方推出的，用于Node.jsmultipart/form-data请求数据处理的中间件。
它基于busboy构建，可以高效的处理文件上传，但并不处理multipart/form-data之外的用户请求。*/
var multer=require('multer');
//创建application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.json());
//public为静态资源路径   图片访问路径为 http://localhost:8082/image/1.jpg
app.use(express.static('public'));
//构造函数 最基本参数：文件存储位置
app.use(multer({dest:'/temp/'}).array('image'));

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})


//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})
//访问index.html页面
app.get('/index.html',function (req,res) {
    console.log('当前路径:'+__dirname)
    res.sendFile( __dirname+'/'+'index.html')
})
// get请求路径的请求参数
app.get('/login_get',function (req,res) {
    var param={
        'first_name':req.query.first_name,
        'last_name':req.query.last_name
    }
    console.log(param)
    res.end(JSON.stringify(param));
})
//post请求的请求参数
app.post('/login_post',urlencodedParser,function (req,res) {
    var param={
        'first_name':req.body.first_name,
        'last_name':req.body.last_name
    }
    console.log(param)
    res.end(JSON.stringify(param))
    }

)

//上传代码
app.post('/file_upload',function (req,res) {
    console.log(req.files[0].name)
    var des_file = __dirname+'/'+req.files[0].originalname;
    var info={};
    fs.readFile(req.files[0].path,function (err,data) {
        console.log('执行了readFile......')
        fs.writeFile(des_file,data,function (err) {
            if (err){
                console.log('执行writeFile错误......')
                console.log(err)
            }else {
                console.log('执行了writeFile......')
                info={
                    'message':'上传成功！',
                    'name':req.files[0].originalname
                };
            }
            console.log(info);
            res.end(JSON.stringify(info))  //此处中文出现乱码
        })
    })
})









var server = app.listen(8082, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})