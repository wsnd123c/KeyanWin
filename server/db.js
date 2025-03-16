const mysql = require('mysql2/promise');
const  password ='wsnd123c'
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:  password,
    database: 'server',  // 确保这里的数据库名正确
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;