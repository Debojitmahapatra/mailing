const nodemailer=require("nodemailer")
const Mailgen=require("mailgen")
const {EMAIL,PASSWORD}=require("../env")

/**send email */
module.exports.sendEmail=async function(req,res){
    const {userEmail}=req.body
     let config={
        service:"gmail",
        auth:{
            user:EMAIL,
            pass:PASSWORD
        }
     }
let transporter=nodemailer.createTransport(config)

let MailGenerator=new Mailgen({
    theme:"default",
    product:{
        name:"Debojit",
        link:"https://mailgen.js/"
    }
})
    
 let response={
    body:{
        name:"Debojit Mahapatra",
        intro:"response",
        table:{
            data:[
                {
                    message:"sorry I am on a Vacation for 14 days, after that I will contact you"
                }
            ]
        }
        
    }
 }
 
 let mail=MailGenerator.generate(response)

 let message={
    from:EMAIL,
    to : userEmail,
    subject:"out on a vacation",
    html:mail
 }
 transporter.sendMail(message).then(()=>{
    return res.status(201).json({
        msg:"you should recive an email"
    })
 }).catch(err=>{
    return res.status(500).json({err})
 })
}
