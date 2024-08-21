const express = require('express')
const router = require('./routes/UserRoutes')
const app = express()
const dotenv = require('dotenv')

const connectDb = require('./utils/db')
dotenv.config();
//const mongoose = require("mongoose")
//works as a middleware to parse json bodies
app.use(express.json())
//to use routes that we created

//connection of database mongodb
//mongoose.connect("mongodb://localhost:27017/Diraction02")

app.use('/',router)
//to make the servre work on port 3000 and we gave a callback return

connectDb().then (
    app.listen(5001,()=>{
        console.log("server is working on port")
    })
)