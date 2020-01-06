const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Hello Node.js\n')
}).listen(3000, '127.0.0.1');
//引用了Node.js SDK 内置的名为http的模块
//通过http.createServer创建了一个HTTP服务
//通过listen方法指定端口和IP地址，启动服务
/*
    res是HTTP里的response(响应)的别名，通过res控制对浏览器的操作
    设置返回状态码是200，设置HTTP头部字段的Content-type为text/plain类型
    最后向浏览器返回 ('Hello Node.js\n') 文本，由浏览器解析
*/
console.log('Server running at http://127.0.0.1:3000') 