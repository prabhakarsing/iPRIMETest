const http=require("http")
const mongoose=require('mongoose');

mongoose.connect("mongodb://prabhakar1:prabhakar1@ds219879.mlab.com:19879/mongo").
    then(() => console.log("DB is Connected....")).
    catch(err => console.log(err))
const app=require("./app/app")

const server=http.createServer(app)
server.listen(1234)
console.log("Running 1234")