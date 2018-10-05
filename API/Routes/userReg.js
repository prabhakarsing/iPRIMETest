const exp=require("express");
const router=exp.Router();

const bcrypt=require("bcrypt")
const mongoose=require('mongoose');


const User=require("../../model/userModel")


    router.post("/register",(req,res,next)=>{
        var userData=req.body
        console.log(req.body)
      
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
                          
                            const user=new User(
                                {
                                _id: new mongoose.Types.ObjectId(),
                                firstName:req.body.firstName,
                                lastName:req.body.lastName,
                                email:req.body.email,
                               password:hash
                                }
                            ).save().then(resp=>{
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
