const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({

    userName:{
        required:true,
        type:String
    },
    userId:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:email
    },
    imageUrl:{
        required:true,
        type:String
    },
    date:{
        type:Date,
        default:new Date()
    }

})

user.virtual('id').get(function(){
    return user._id
})

module.exports = mongoose.exports('User',user)