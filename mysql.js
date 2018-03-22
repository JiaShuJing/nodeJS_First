/**
 * Created by jsj on 2018/3/22.
 */
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test'
});
connection.connect();
connection.query('SELECT 1+1 AS HEHE',function (err,results,fileds) {
    if(err){throw err}
    else{
        console.log(results[0].HEHE)
    }
})
//查询数据
var query='select * from person';
connection.query(query,function (err,result) {
    if(err){
        console.log('err message:'+err.message)
        return;
    }
    else {
        console.log('-------------------------select------------------------\n')
        console.log(result)
        console.log('-------------------------------------------------------\n\n')
    }
})
//插入数据
var insert='INSERT INTO PERSON(ID,NAME,CID) VALUES(?,?,?)';
var insertParams=['8','屋顶上的猫','2'];
connection.query(insert,insertParams,function (err,result) {  // result返回什么？？
    if(err){
        console.log('err message:'+err.message)
        return
    }else {
        console.log('------------------------------insert------------------------------')
        console.log('insert id is '+result.id+';')
        console.log('------------------------------------------------------------------\n\n')
    }
})
//更新数据
var update='UPDATE PERSON SET NAME=? WHERE ID=?';
var updateParams=['老夫子','6'];
connection.query(update,updateParams,function (err,result) {
    if(err){
        console.log('err message:'+err.message)
    }else{
        console.log('------------------------------update------------------------------')
        console.log('UPDATE AFFECT ROWS:'+result.affectedRows)
        console.log('------------------------------update------------------------------')
    }
})
//删除数据
var delsql ='DELETE FROM PERSON WHERE ID=?';
var delParams=[7];
connection.query(delsql,delParams,function (err,result) {
    if (err){
        console.log('err message:'+err.message)
        return
    }else{
        console.log('------------------------------delte------------------------------')
        console.log('DELETE AFFECT ROWS:'+result.affectedRows)
        console.log('------------------------------delete------------------------------')
    }
})

connection.end()