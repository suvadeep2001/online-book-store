const User = require('../models/User')

exports.register = async(req,res) => {

    try {
        const {name, email, password} = req.body;

        let user = await User.findOne({ email: email})

        if(user) {
            return res.status(404).json({success:false, message:"User Already Registered"})
        }
       
        user = await User.create({
            name,email,password,avatar:{public_id:"sample_id",url:"sampleurl"}
        })

        const token = await user.generateToken();
        const options = {expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true
        }

        res.status(200).cookie("token",token,options).json({
            success:true,
            user,
            token
        });
    } catch (error) {
        success:false;
        return res.status(404).json({message: error.message})
    }
}

exports.login = async(req,res) => {

    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email}).select("+password")
        if(!user){
            success:false;
            return res.status(404).json({message:"User not found"})
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(404).json({
                success:false,
                message:"Password not match"
            })
        }
        const token = await user.generateToken();
        const options = {expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true
        }

       return res.status(200).cookie("token",token,options).json({
            success:true,
            user,
            token
        });
       res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        success:false;
        return res.status(404).json({message: error.message})
    }

}