const express = require('express')
const mongoose = require('mongoose')

const feedRoutes = require('./routes/feed')
const userRoutes = require('./routes/user')

const port = process.env.PORT || 1313

//set up database connection
const MongoDB = "mongodb+srv://m-001-student:m001-mongodb@sandbox.zoqk7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(MongoDB,{useNewUrlParser:true, useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error',console.error.bind(console,"Connection Error"))


const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))


//transfer request
app.use('/user',userRoutes)
app.use('/feed',feedRoutes)
app.get("/",(req,res)=>{
    console.log("hello")
})

app.listen(port,(req,res)=>{
    console.log('server working at port : '+port)
})

module.exports = app