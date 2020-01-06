//express和mysql框架
var express = require('express');
var mysql = require('mysql');
var fs = require("fs");
var app = express();

//mysql的连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pcy1314',
    port: '3306',
    database: 'blog'
})
connection.connect();

var mySql = " select * from tags";
var myResult = ""; //将获得的数据保存到myResult

connection.query(mySql, function(err, result) {
    if (err) {
        console.log('查询失败' + err);
        return;
    }
    //由于浏览器无法直接识别从数据库获得的数据result，需要用JSON解析
    myResult = JSON.stringify(result);
    //console.log(myResult);
})

//get方法 / myResult就是接口
app.get('/myResult', function(req, res) {
    res.send(myResult); //发送到网页前端
})

//方法1：通过express.static访问静态文件，这里访问的是ajax.html
app.use(express.static("./"));

//方法2：使用fs.readFile打开html文件
app.get("/index.html", function(request, response) {
    fs.readFile("./" + request.path.substr(1), function(err, data) {
        // body
        if (err) {
            console.log(err);
            //404：NOT FOUND
            response.writeHead(404, { "Content-Type": "text/html" });
        } else {
            //200：OK
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data.toString());
        }
        response.end();
    });
});

connection.end();

//监听端口，默认localhost:3000
app.listen(3000, function() {
    console.log('start server url: 127.0.0.1:3000/index.html')
});