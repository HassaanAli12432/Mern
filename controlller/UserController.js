const UserModels = require("../models/UserModels");
const userModel = require("../models/UserModels")
exports.createUser = async(req,res) => {
   // const { value1,operator, value2} = req.body
    
  //  const result= eval(`${value1} ${operator} ${value2}`)

    const {name, email, phone} = req.body;
    try{
        const userdata = userModel({name ,email, phone})
        await userdata.save();
        res
        .status(200)
        .json({message:'data saved ', Data: {userdata}})
    }
    catch(error){
        res.status(404).json({message:'user not created'})
    }
}
    
exports.getUser = async(req,res)=>{
    try{
    const data1 =  await UserModels.find()
    res.status(200).json({message:'found',Data:{data1}})
    }
    catch(error){
        res.status(404).json({message:'user not created'})
    }
}

exports.getOneUser = async(req,res)=>{
    try{
        const {name} = req.body
        const data = await UserModels.findOne({name:name})
        res.status(200).json({message:'found one',Data:data})
    }
    catch(error){
        res.status(404).json({message:'code sahi kr bhai'})
    }
}

exports.updateUser = async(req,res) =>{
   try{
    const { name } = req.query
    const updatedData = req.body
    const user = await UserModels.findOneAndUpdate({name:name},updateData,{new:true})
    res.status(200).json({message:'update krdia hun araam ee?', Data:user})
   }
   catch(error){
    res.status(404).json({message:'code sahi kr bhai'})
   }
}

exports.deleteUser = async(req,res)=>{
  try{  const { name } = req.query
    const user = await UserModels.findOneAndDelete({name:name})
    res.status(200).json({message:'delete krdia bhai',Data:user})
}
  catch(error){
    res.status(404).json({message:'code sahi kr bhai'})
  }
}
exports.update = async(req,res) =>{
    try{
     const { name ,...updatedData } = req.body
     
     const user = await UserModels.findOneAndUpdate({name:name},updatedData,{new:true})
     res.status(200).json({message:'update krdia hun aram ee?', Data:user})
    }
    catch(error){
     res.status(404).json({message:'code sahi kr bhai'})
    }
 }