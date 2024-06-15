const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// 게시물 작성
router.post('/create', async (req, res) => {
    const { title, content, author } = req.body;
    const post = new Post({ title, content, author });
    await post.save();
    res.redirect('/index.html');
});

// 게시물 조회
router.get('/all', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

module.exports = router;
