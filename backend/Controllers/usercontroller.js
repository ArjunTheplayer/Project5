const expressasynchandeler=require("express-async-handler");
let jwt=require("jsonwebtoken")

require("dotenv").config()
// import hashing
const bcrypt=require("bcryptjs");


// get users
const getusers= expressasynchandeler( async(request,response)=>{
  // response.send({message:users})

console.log(request.headers)
  // get usercollection obj

  let userCollectionObject= request.app.get("userCollectionObject")
  // get users dats from usercollection and pack them into an array
  let users=await userCollectionObject.find().toArray()
  // send res
  response.send({message:"list of users", payload:users})
})

// get users by username
const getuserbyid=expressasynchandeler( async(request,response)=>{

  // get usercollection obj
  
  let userCollectionObject= request.app.get("userCollectionObject")

  // get user id from url param id
  
  console.log(request.params) //{id:100}
  let usernameofurl =request.params.username;
  // get userid from usercollection
  let user= await userCollectionObject.findOne({username:usernameofurl})
  response.send({message:"user data",payload: user})
  // find user by id
// try{
//   let userobj=users.find(userobj=> userobj.id == userId)
//   // if user not Existed
//   if(userobj ==undefined){
//     response.send({message:"user not found"})
//   }
//   // if user existed
//   else{
//     response.send({message: userobj})
//   }
// }
// catch(err){
//   response.send({message:err.message})
// }
 })

//  create user
const createuser=expressasynchandeler( async (request,response)=>{

  // this is to get image path
  console.log(request.body.userObj)
  // this contains image path
  console.log(request.file.path)
//  get new user obj and convert it into js object
  let userobj=JSON.parse(request.body.userObj)
//  add image cdn link to userobj
userobj.profilepic=request.file.path
  // get usercollection obj
  
  let userCollectionObject= request.app.get("userCollectionObject")

 
   //check for availabity of username
   let userOfDB=await userCollectionObject.findOne({username:userobj.username})
   console.log(userOfDB)
   //if user already existed
   if(userOfDB!==null){
       response.status(200).send({message:"Username has already taken. Please choose another username"})
   }
   //if user not existed
   else{
       //hash the password
       let hashedPassword= await bcrypt.hash(userobj.password,5)
       //replace plain password woth hashed
       userobj.password=hashedPassword;
       //insert into user colelction
       let result=await userCollectionObject.insertOne(userobj)
       //send res
       response.status(201).send({message:"User created"})
   }
})
// update user
const updateuser=expressasynchandeler( async(request,response)=>{

  // get usercollection obj
  
  let userCollectionObject= request.app.get("userCollectionObject")


   // get modufied user obj
   let modifiedUserObj=request.body;
  //  update modiieduserobj in usercollection object
  let result= await userCollectionObject.updateOne({username:modifiedUserObj.username},{$set:{...modifiedUserObj}})
  console.log(result)
  if(result.acknowledged == true)
  response.send({message:"user modified successfully"})
  else{
    response.send({message:"user not modified successfully"})
  }
 
})






module.exports={getusers,updateuser}