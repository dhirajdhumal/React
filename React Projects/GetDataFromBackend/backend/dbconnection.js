const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/myDatabase");
    console.log("MongoDB Connected successfully");
}

module.exports = connectDB;