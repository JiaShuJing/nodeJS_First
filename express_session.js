/**
 * Created by jsj on 2018/3/20.
 * 中间件 express-session   通过req.session.sname可以设置和取得session
 */
var  express = require('express');
var  session = require('express-session');
app = express();
app.use(session({'secret':'WBLOG',resave:false,saveUninitialized:true}));

//设置session
app.get('/login',function (req,res) {
    req.session.user={
        name:'jingjing',
        pass:'123321'
    }
    res.send('session get ok.')
})
//取得session
app.get('/gets',function (req,res) {
    console.log(req.session.user)
})
app.listen(9999)
