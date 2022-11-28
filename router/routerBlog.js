const express = require('express');
const multer = require('../middleware/config_multer');
const { allPost , PostDedails , addPost , editPost , deletePost } = require('../controller/blogController');

const router = express.Router();

router.get('/', allPost);
router.get('/PostDedails/:id', PostDedails);
router.post('/addPost', addPost);
router.post('/editPost/:id', editPost);
router.get('/deletePost/:id', deletePost);

module.exports = router;
