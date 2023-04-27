const express=require("express")
const app=express()
const route=require("./routes/route")
app.use(express.json())
const PORT=process.env.PORT || 3000
app.use("/",route)
app.listen(PORT,()=>{
    console.log(`express is running on http://localhost:${PORT}`)
})