const express=require("express")
const router=express.Router()
const Postmodel=require("../model/postshema")

router.post("/addpost",async(req,resp)=>{

    try{const data=new Postmodel(
        {
            name:req.body.name,
            location:req.body.location,
            description:req.body.description,
            image:req.body.image
        }
    )
    result=await data.save()
    resp.json(result)
    }
    catch(err){
        console.log(err)
    }
    
})

router.get("/allpost",async(req,resp)=>{
    console.log("line no 25 ");
    const data=await Postmodel.find()
    resp.send(data)
})

module.exports=router