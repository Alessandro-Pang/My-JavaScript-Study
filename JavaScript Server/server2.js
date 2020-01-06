//express和mysql框架
var express = require('express');
var fs = require("fs");
var app = express();
var cookieParser = require('cookie-parser');
var query = require('./mysql/mysql/getsql');

//方法1：通过express.static访问静态文件，这里访问的是ajax.html
app.use(express.static("./"));

//方法2：使用fs.readFile打开html文件
app.get("/mysql/mysql.html", function(request, response) {
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

let tagsSQL = 'select * from tags';
let myResult = null;
query(tagsSQL, (err, result) => {
    myResult = JSON.stringify(result);
})

//app.use(cookieParser());
//console.log(req.cookies['cookieName'])

// res.json这个方法是以json对象的形式返回去，还有以下方法
// res.send以页面的方式返回去
// res.download以文件的方式返回去，前端请求会下载此文件
app.get('/api/myResult', (req, res) => {
    res.send(myResult)
})

let insertSQL = `insert into test(${username},${password})`
query(insertSQL,(err,result)=>{
    
})


//监听端口，默认localhost:3000
app.listen(3000, function() {
    console.log('start server url: 127.0.0.1:3000/mysql/mysql.html')
});