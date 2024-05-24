const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema(
    {
        name:String,
        date:String,
        time:{
            type:String
        },
        endTime:String,
        room:{
            type:mongoose.Types.ObjectId,
            ref:"rooms"
        }

    },{timestamps:true}
)


const  customer = mongoose.model("customers",customerSchema)


module.exports=customer;