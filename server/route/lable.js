const express = require('express');
const pool = require('../db');  // 引入 db.js

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const [lable] = await pool.query('SELECT * FROM lable');
        console.log(lable)
        res.json(lable);
    } catch (error) {
        console.error('查询失败:', error);
        res.status(500).json({ error: '数据库查询失败' });
    }
});
module.exports = router;