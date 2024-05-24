const mongoose = require("mongoose")

const url = 'mongodb+srv://sibi:arunsibi@hospital-systems.wgqwd8m.mongodb.net/hotal-booking-DB?retryWrites=true&w=majority&appName=hospital-systems'
mongoose.set("strictQuery",false)


const connectDB = async()=>{
    try {
        const connect = mongoose.connect(url);

        console.log(`mongoDB connected `);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB