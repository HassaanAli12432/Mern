const mongoose = require("mongoose")

//const URI = process.env.DATABASEURI

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.DATABASEURI);
        console.log("connection established successully")
    } catch(error){
        console.log("database connection failed",error)
        process.exit(0)
    }
}
module.exports = connectDb