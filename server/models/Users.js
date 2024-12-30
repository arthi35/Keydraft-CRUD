const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
branchcode:Number,
branchName:String,
shortname:String,
locality:String,
city:String,
state:String,
contactperson:String,
contact:Number,
panno:Number,
GSTIN:Number

})

const UserModel=mongoose.model('new_branch',UserSchema)
module.exports=UserModel