const exp=require("express");
const router=exp.Router();
const bp=require("body-parser")
const bcrypt=require("bcrypt")


router.use(bp.json())
const User=require("../../model/userModel")
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/mongoosedb").
    then(() => console.log("DB is Connected....")).
    catch(err => console.log(err))
    router.post("/",(req,res,next)=>{
        var userData=req.body
      
         User.find({email:req.body.email}).
         then(result=>{
             if(result.length>=1)
             {
                 return res.status(501).json({
                     message:"User Exist"
                 })
             }
             else
             {
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                         if(err)
                         {
                             res.status(401).json({
                                 message:err
                             })
                         }
                         else
                         {
                            const user=new User({
                                _id: new mongoose.Types.ObjectId(),
                                email:req.body.email,
                               password:hash
                            }).save().then(resp=>{
                                res.status(201).json({
                                    message:"Register"
                                })
                            }).
                            catch(erro=>{
                                res.status(401).json({
                                    message:"EEEEErrrrrOOr"
                                })
                            })  
                         }
               
                        })
                    }
         }).
         catch(err=>console.log(err))
    })
    module.exports=router;
