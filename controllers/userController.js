const User = require("../models/user")

//create user
exports.create_user = async function(req,res){
    
    try{
        const data = req.body.data

        const user = new User(
            {
                userName:data.userName,
                userId:data.userId,
                email:data.email,
                imageUrl:data.imageUrl,
            }
        )
    
        await user.save()
            
        return res.status(200).json({msg:"user created"})
    
    
    }catch(e){
        return res.status(404).json({error:"server side error"})
    }

}

//update user
exports.update_user = function(req,res){
    console.log("Update User")
}

//delete user
exports.delete_user = function(req,res){
    console.log("delete user")
}

//get user
exports.get_user = async function(req,res){

    try{
        data = req.body.data

        const user = await User.find({userId:data.userId})

        if(user){
            data = {
                email:user.email,
                userName:user.userName,
                imageUrl:user.imageUrl
            }
            return res.status(200).json({data:data})
        }else{
            return res.status(200).json({msg:"user not found"})
        }
    }catch(e){
        return res.status(404).json({msg:"server side error"})
    }
    
}
