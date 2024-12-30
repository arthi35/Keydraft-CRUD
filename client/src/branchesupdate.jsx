import React,{useEffect,useState} from "react";
import{useParams} from 'react-router-dom';
import{useNavigate} from 'react-router-dom';
import axios from 'axios';
function UpdateBranches(){
  const{id}=useParams()
  const [branchcode,setBranchcode]=useState();
     const[branchName,setBranchname]=useState();
     const[shortname,setShortname]=useState();
     const[locality,setLocality]=useState();
     const[city,setCity]=useState();
     const[state,setState]=useState();
     const[contactperson,setContactperson]=useState();
     const[contact,setContact]=useState();
     const navigate=useNavigate();
     const Update=(e)=>{
      e.preventDefault();
      axios.put("http://localhost:3001/updateUser"+id,{branchcode,branchName,shortname,locality,
      
        city,state,contactperson,contact,panno,GSTIN
      }).then(result=>{
        console.log(result)
        navigate('/')
       
      })
       .catch(err=>console.log(err))
      }
      useEffect(()=>{
     axios.get('http://localhost:3001/getUser/'+id)
    //  .then(result=>console.log(result))
    .then(result=>{console.log(result)})
    setBranchcode(result.data.branchcode)
    setBranchname(result.data.branchName)
    setShortname(result.data.shortname)
    setLocality(result.data.locality)
    setCity(result.data.city)
    setState(result.data.state)
    setContactperson(result.data.contactperson)
    setContact(result.data.contact)







     .catch(err=>console.log(err))
       },[])
    return(
        <div class="container">
        <form class="row g-3" onSubmit={Update}>
            <h3>BranchDetails</h3>
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">Branch Code</label>
          <input type="text" class="form-control" id="validationDefault01" value={branchcode}
            onChange={(e)=>setBranchcode(e.target.value)}
          required/>
        </div>
      
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Branch Name</label>
          <input type="text" class="form-control" id="validationDefault02" value={branchName}
           onChange={(e)=>setBranchname(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Branch Short Name</label>
          <input type="text" class="form-control" id="validationDefault02"
          value={shortname}  onChange={(e)=>setShortname(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Locality</label>
          <input type="text" class="form-control" id="validationDefault02" 
          value={locality}onChange={(e)=>setLocality(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">City</label>
          <input type="text" class="form-control" id="validationDefault02"
          value={city} onChange={(e)=>setCity(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">State</label>
          <input type="text" class="form-control" id="validationDefault02" 
          value={state}  onChange={(e)=>setState(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Contact Person</label>
          <input type="text" class="form-control" id="validationDefault02"
          value={contactperson} onChange={(e)=>setContactperson(e.target.value)}
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Contact Person Phone</label>
          <input type="text" class="form-control" id="validationDefault02"
          value={contact}onChange={(e)=>setContact(e.target.value)}
          required/>
        </div>
      
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Pan No</label>
          <input type="text" class="form-control" id="validationDefault02"  required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">GSTIN</label>
          <input type="text" class="form-control" id="validationDefault02" required/>
        </div>
       
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>

    
      </div>
    )
}

export default UpdateBranches

{/* <form onSubmit={Submit} class="row g-3">
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
          <input type="text" class="form-control" id="validationDefault02" 
          
          required/>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">GSTIN</label>
          <input type="text" class="form-control" id="validationDefault02" required/>
        </div>
       
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form> */}