//express和mysql框架
var express = require('express');
var fs = require("fs");
var app = express();
var query = require('./api');

let tagsSQL = 'select * from books';
let myResult = null;
query(tagsSQL, (err, result) => {
    myResult = JSON.stringify(result);
})

// res.json这个方法是以json对象的形式返回去，还有以下方法
// res.send以页面的方式返回去
// res.download以文件的方式返回去，前端请求会下载此文件
app.get('/', (req, res) => {
    res.send(myResult)
})

//监听端口，默认localhost:3000
app.listen(3000, function() {
    console.log('start server url: 127.0.0.1:3000/')
});