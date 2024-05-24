const router = require("express").Router()
const roomRoute = require("./room")
const customerRoute = require("./customer") 


router.use("/room",roomRoute)
router.use("/customer",customerRoute)

module.exports=router;