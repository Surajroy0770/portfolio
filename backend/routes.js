const express =require('express')
const router=express.Router();
const datas =require('./dataSchema')

router.post('/',async(req,res)=>{
    try {
        const {name,email,message}=req.body;

        const data =new datas({name,email,message})
        const savedata=await  data.save();
        res.json(savedata)

    } catch (error) {
        console.log("Error in sending the message", error);
        res.status(500).send("Internal server error");
    }
})
module.exports=router;
