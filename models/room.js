const mongoose = require("mongoose") 


const RoomSchema = new mongoose.Schema(
    {
        RoomNumber:String,
        Amenities:String,
        Prices:String
    },{timestamps:true}
)

const room = mongoose.model("rooms",RoomSchema)

module.exports = room