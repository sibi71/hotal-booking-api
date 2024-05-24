const router = require("express").Router()
const {room,customer} = require("../models") 

router.get("/",(req,res)=>{
    res.send("customer booking route is working")
})

router.post("/customeradd",async(req,res)=>{
    try {
        const newcustomer = await customer.create(req.body)
        const roomdata = await room.findByIdAndUpdate(req.body.room,{
            $push:{customer:newcustomer._id}
        },{new:true});
        res.json({customer:newcustomer,room:roomdata})

    } catch (error) {
        return res.json({msg:error.message})
    }
})

router.get("/customerlist",async(req,res)=>{
    const customerlist = await customer.find().populate(
        "room","RoomNumber Amenities prices"
    );
    res.json(customerlist)
})


module.exports=router