const modelBlog = require('../model/modelBlog');
const Joi = require('@hapi/joi');







const allPost = async (req, res) => {
    const posts = await modelBlog.find();
    res.render("index", {posts:posts});
}

const PostDedails = async (req, res) => {
    
    let id = req.params.id;
    console.log(id);
    const post = await modelBlog.findOne({_id: id});
    console.log(post);
    res.render("postDetail",{
        post: post,
    });
}

const addPost = async (req, res) => {
    res.render('addpost');
    const blog = new modelBlog({
        title: req.body.title,
        image: req.body.image,
        comment: req.body.comment
    });
    await blog.save();
}

const editPost = async (req, res) => {
    const blogs = await modelBlog.find();
    let blog =  blogs.find((b) => b._id == req.params.id);
    console.log(blog);
    
    res.render("editpost",{
        blog: blog,
    });
    
  
    blog.title = req.body.title;
    blog.image = req.body.image;
    blog.comment = req.body.comment;

    console.log(blog);
    const newBlog = await blog.save();
    console.log(newBlog);
    console.log("me");
}

const deletePost = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    const post = await modelBlog.findOne({_id: id});
    await post.delete();
    res.redirect('/');
}


module.exports = {
    allPost,
    PostDedails,
    addPost,
    editPost,
    deletePost
}





