const mongoose = require('mongoose')
const { schema } = require('../../../Documents/Node Project/cloudjot-backend-starter-001/models/record')
const Schema = mongoose.Schema

const feed = new Schema({

    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    description:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    },
    help:{
        required:true,
        type:string
    },
    date:{
        type:Date,
        default:new Date()
    }

})

feed.virtual('id').get(function(){
    return feed._id
})

module.exports = mongoose.model('Feed',feed)