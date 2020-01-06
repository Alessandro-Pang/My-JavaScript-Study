var mysql = require('mysql');
// 创建一个数据库连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Pcy1314',
    port: '3306',
    database: 'books'
});
// 从连接池中获取一个连接
var query = function(sql, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            console.log('和mysql数据库建立连接失败，异常信息：' + err);
            callback(err, null, null);
        } else {
            console.log('和mysql数据库连接成功');
            conn.query(sql, (error, result, fields) => {

                if (error) {
                    console.log('查询数据库失败，异常信息：' + error);
                } else {
                    //释放连接
                    conn.release();
                    //事件驱动回调
                    callback(error, result, fields);
                }
            })
        }
    });
};

module.exports = query;