const router=require("express").Router()
const {sendEmail}=require("../controler/appControler")

router.post("/sendmail",sendEmail)

module.exports=router