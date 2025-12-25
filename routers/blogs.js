const express = require('express')
const app = express()
const path = require('path')
const router = express.Router();
const blogs = require('../data/blogs')

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '../templates/index.html'));
});

router.get("/blog", (req, res)=>{
res.sendFile(path.join(__dirname, '../templates/bloghome.html'));
});

router.get("/blogpost/:slug", (req, res)=>{
    myBlog = blogs.filter((e) =>{
        return e.slug == req.params.slug;
    });
res.sendFile(path.join(__dirname, '../templates/blogpost.html'));
});


module.exports = router;