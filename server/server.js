const express = require('express');
const cors = require('cors');
const usersRouter = require('./route/users');  // 引入 users.js
const lablesRouter = require('./route/lable');  // 引入 users.js
const cardsRouter = require('./route/cards');  

const app = express();
const PORT = 3000;

app.use(cors());        // 允许跨域
app.use(express.json()); // 解析 JSON 请求

// 使用 /users 这个路由
app.use('/users', usersRouter);
app.use('/lable', lablesRouter);
app.use('/cards',cardsRouter);

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
