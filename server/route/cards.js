const express = require('express');
const pool = require('../db');  // 引入 db.js

const router = express.Router();

// 获取所有卡片
router.get('/', async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM cards');
    console.log(result);
    res.json(result); // 直接返回查询结果对象
  } catch (err) {
    console.error(err);
    res.status(500).send('服务器错误');
  }
});

// 新增卡片
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: '标题和内容不能为空' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO cards (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('服务器错误');
  }
});

module.exports = router;