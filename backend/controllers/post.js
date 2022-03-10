const Post = require("../models/Post")

exports.createPost = async(req,res) =>{
    try {
        
        const newPostData = {
            caption: req.body.caption,
            image:{
                public_id: "req.body.public_id",
                url: "req.body.url",
            },
            owner: req.user._id
        }
        const newPost = await post.create(newPostData)
        res.status(201).json({
            success: true,
            post: newPost
        })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}