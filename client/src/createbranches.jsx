import React, { useState } from "react";
import './createbranches.css';
import axios from 'axios';
import{useNavigate} from 'react-router-dom'
function CreateBranches(){
   const [branchcode,setBranchcode]=useState();
   const[branchName,setBranchname]=useState();
   const[shortname,setShortname]=useState();
   const[locality,setLocality]=useState();
   const[city,setCity]=useState();
   const[state,setState]=useState();
   const[contactperson,setContactperson]=useState();
   const[contact,setContact]=useState();
   const[panno,setPanno]=useState();
   const[GSTIN,setGSTIN]=useState()
const navigate=useNavigate()

const Submit=(e)=>{
e.preventDefault();
axios.post("http://localhost:3001/createUser",{branchcode,branchName,shortname,locality,

  city,state,contactperson,contact,panno,GSTIN
}).then(result=>{
  console.log(result)
  navigate('/')
 
})
 .catch(err=>console.log(err))
}

    return(
        <div class="container">
        <form onSubmit={Submit} class="row g-3">
            <h3>BranchDetails</h3>
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">Branch Code</label>
          <input type="text" class="form-control" id="validationDefault01"
          onChange={(e)=>setBranchcode(e.target.value)}
          required/>
        </div>
      
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Branch Name</label>
          <input type="text" class="form-control" id="validationDefault02"  
          onChange={(e)=>setBranchname(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Branch Short Name</label>
          <input type="text" class="form-control" id="validationDefault02" 
            onChange={(e)=>setShortname(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Locality</label>
          <input type="text" class="form-control" id="validationDefault02"
            onChange={(e)=>setLocality(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">City</label>
          <input type="text" class="form-control" id="validationDefault02"  
            onChange={(e)=>setCity(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">State</label>
          <input type="text" class="form-control" id="validationDefault02" 
            onChange={(e)=>setState(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Contact Person</label>
          <input type="text" class="form-control" id="validationDefault02" 
            onChange={(e)=>setContactperson(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Contact Person Phone</label>
          <input type="text" class="form-control" id="validationDefault02"
            onChange={(e)=>setContact(e.target.value)}
          required/>
        </div>
      
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Pan No</label>
          <input type="text" class="form-control" id="validationDefault02"  required
           onChange={(e)=>setPanno(e.target.value)}
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">GSTIN</label>
          <input type="text" class="form-control" id="validationDefault02" required
           onChange={(e)=>setGSTIN(e.target.value)}
          />
        </div>
       
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>

    
      </div>
    )
}

export default CreateBranches

// branchcode:Number,
// branchName:String,
// shortname:String,
// locality:String,
// city:String,
// state:String,
// contactperson:String,
// contact:Number,