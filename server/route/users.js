const express = require('express');
const pool = require('../db');  // 引入 db.js
const bcrypt = require('bcryptjs'); // 引入 bcryptjs 用于密码哈希

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
    const { email, password } = req.body;

    // 检查邮箱是否已存在
    try {
        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: '邮箱已被使用' });
        }

        // 对密码进行哈希处理
        const hashedPassword = await bcrypt.hash(password, 10);

        // 插入新用户
        await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
        res.status(201).json({ message: '用户添加成功' });
    } catch (error) {
        console.error('插入失败:', error);
        res.status(500).json({ error: '数据库插入失败' });
    }
});

module.exports = router;
