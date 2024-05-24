const router = require("express").Router()
const {room } = require("../models");

router.get("/",(req,res)=>{
    res.send("room route is working")
});

router.post("/roomadd",async(req,res)=>{
    try {
        const newRoom = new room(req.body)
        const data = await newRoom.save()
        return res.json(data)
    } catch (error) {
        return res.json({msg:error.message});
    }
})

router.get("/roomlist",async(req,res)=>{
    const roomlist = await room.find()
    res.json(roomlist)
})

module.exports = router