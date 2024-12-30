const express=require ('express');
const mongoose=require('mongoose');
const cors=require('cors');
const UserModel=require('./models/Users')
const app=express();
app.use(cors());
app.use(express.json)

mongoose.connect("mongodb+srv://new_branch:branchess123@cluster0.c8dvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.get('/',(req,res)=>{
UserModel.find({})
.then(new_branch=>res.json(new_branch))
.catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id
    UserModel.findById({_id:id})
    .then(new_branch=>res.json(new_branch))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{branchcode:req.body.branchcode,branchName:req.body.branchName,

        shortname:req.body.shortname,locality:String,
        city:req.body.city,
        state:req.body.state,
        contactperson:req.body.contactperson,
        contact:req.body.contact,
        panno:req.body.panno,
        GSTIN:req.body.GSTIN})
        .then(new_branch=>res.json(new_branch))
        .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>console.log(err))
})
app.post('/createUser',(req,res)=>{
    UserModel.create(req.body)
    .then(new_branch=>res.json(new_branch))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("Server IS Running");
    
})
//mongodb+srv://new_branch:branchess123@cluster0.c8dvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0