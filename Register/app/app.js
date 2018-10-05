const exp=require("express");
const app=exp();
const Student=require("../API/Routes/student")
const User=require("../API/Routes/userReg")
app.use("/student",Student)
app.use("/user",User)
app.use("./uploads",exp.static("upload"))
module.exports=app;
