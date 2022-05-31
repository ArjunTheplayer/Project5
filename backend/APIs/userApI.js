// create mini express app
const exp=require("express");
const userapp =exp.Router();
// import statement for controller
const {getusers,updateuser}= require("../controllers/usercontroller")
require("dotenv").config()

// create user api
// get users
userapp.get('/get-users',getusers)
// update user
userapp.put("/update-user",updateuser)

// export
module.exports=userapp
