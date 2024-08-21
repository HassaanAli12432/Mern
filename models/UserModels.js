const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema({
    name:{
        type: String,
        requied: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
});

module.exports = mongoose.model("Users", DataSchema)