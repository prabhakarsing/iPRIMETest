//  Login api
const express=require("express")
const  router=express.Router()
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const User=require("../../model/userModel")

router.post("/login", (req, res) => {
    console.log(req.body)
    User.find({ email: req.body.email }).
        then(result => {
            if (result.length < 1) {
                return res.status(404).json({
                    message: "User not registered ! !"
                })
            }
            bcrypt.compare(req.body.password, result[0].password, (err, suces) => {
                if (err) {
                    res.status(401).json({
                        message: "Not matched !"
                    })
                }
                if (suces) {
                    const token = jwt.sign({
                        email: result[0].email,
                        userId: result[0]._id
                    }, "abcd", {
                            expiresIn: "2h"
                        })
                    res.status(200).json({
                        message: "Login Success ! !",
                        token: token,
                        userdata:result
                    })
                }
                else {
                    res.status(400).json({
                        message: "Userid or Password is wrong"
                    })
                }
            })
        })
});
module.exports=router