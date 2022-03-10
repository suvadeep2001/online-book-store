const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{ 
        type:String,
        required:[true,"Please enter your name"]
    },
    avatar:{
        public_id:String,
        url:String,
    },
    email:{ 
        type:String,
        required:[true,"Please enter your email"]
    },
    password:{ 
        type:String,
        required:[true,"Please enter your password"],
        minLength:[6,"Please enter at least six character"],
        select:false
    },
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    followers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    following:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})

module.exports = mongoose.model('User',userSchema);