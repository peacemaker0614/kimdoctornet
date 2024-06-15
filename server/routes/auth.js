const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 회원가입
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.redirect('/login.html');
});

// 로그인
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.redirect('/index.html');
    } else {
        res.redirect('/login.html');
    }
});

module.exports = router;
