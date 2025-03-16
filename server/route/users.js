const express = require('express');
const pool = require('../db');  // 引入 db.js

const router = express.Router();

// 获取所有用户
router.get('/', async (req, res) => {
    try {
        const [users] = await pool.query('SELECT * FROM users');
        console.log(users)
        res.json(users);
    } catch (error) {
        console.error('查询失败:', error);
        res.status(500).json({ error: '数据库查询失败' });
    }
});

// 新增用户
router.post('/', async (req, res) => {
    const { name, login } = req.body;
    try {
        await pool.query('INSERT INTO users (name, login) VALUES (?, ?)', [name, login]);
        res.json({ message: '用户添加成功' });
    } catch (error) {
        console.error('插入失败:', error);
        res.status(500).json({ error: '数据库插入失败' });
    }
});

module.exports = router;
