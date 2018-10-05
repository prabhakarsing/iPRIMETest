const exp=require("express");
const app=exp();
const bp=require("body-parser")
app.use(bp.json())
const User=require("../API/Routes/userReg")
const Login=require("../API/Routes/login")
app.use("/signupApi",User)
app.use("/loginApi",Login)

module.exports=app;
