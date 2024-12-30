import React, { useState,useEffect } from "react";
import './branches.css';
import {Link} from "react-router-dom";
import axios from 'axios';
function Branches(){
  const[branches,setBranches]=useState([])

  useEffect(()=>{
axios.get('http://localhost:3001')
.then(result=>setBranches(result.data))
.catch(err=>console.log(err))
  })

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res=>console.log(res))
  window.location.reload()
    .catch(err=>console.log(err))
  }
    return(
    //     <table class="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">Branch Name</th>
    //         <th scope="col">Branch Code</th>
    //         <th scope="col">Branch Short Name</th>
    //         <th>Locality</th>
    //         <th>City</th>
    //         <th>State</th>
    //         <th>Contact Person</th>
    //         <th>Contact Person Phone</th>
    //         <th>Contact Person Phone</th>
    //         <th>Contact Person Phone</th>
    //         <th>Contact Person Phone</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <th scope="row">1</th>
    //         <td>Mark</td>
    //         <td>Otto</td>
    //         <td>@mdo</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">2</th>
    //         <td>Jacob</td>
    //         <td>Thornton</td>
    //         <td>@fat</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">2</th>
    //         <td>Jacob</td>
    //         <td>Thornton</td>
    //         <td>@fat</td>
    //       </tr>
    //     </tbody>
    //   </table>

<div class="container">
  <div class="row">
    <div class="col-12">
    <div class="container">
<Link to="/create" className="btn btn-success">Add</Link>
  <table class="rwd-table">
    <tbody>
    <tr>
  <th scope="col">Branch Name</th>
  <th scope="col">Branch Code</th>
  <th scope="col">Branch Short Name</th>
  <th>Locality</th>
  <th>City</th>
  <th>State</th>
  <th>Contact Person</th>
  <th>Contact Person Phone</th>
  <th>Pan</th>
  <th>GSTTN</th>

 <th>Action</th>
  </tr>
      {/* <tr>
        <td data-th="Supplier Code">
          UPS5005
        </td>
        <td data-th="Supplier Name">
          UPS
        </td>
        <td data-th="Invoice Number">
          ASDF19218
        </td>
        <td data-th="Invoice Date">
          06/25/2016
        </td>
        <td data-th="Due Date">
          12/25/2016
        </td>
        <td data-th="Net Amount">
          $8,322.12
        </td>
      </tr> */}
     
     {
      branches.map((branch)=>{
return <tr>
  <td>{branch.Branchname}</td>
  <td>{branch.BranchCode}</td>
  <td>{branch.BranchShortName}</td>
  <td>{branch.Locality}</td>
  <td>{branch.City}</td>

<td>{branch.State}</td>
<td>{branch.ContactPerson}</td>
<td>{branch.ContactPersonPhone}</td>
<td>{branch.Pan}</td>
<td>{branch.GSTIN}</td>
<td>
  
  <Link to={`/update/${branch._id}`}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006400"
 class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></Link>
<svg onClick={(e)=>handleDelete(branch._id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF0000"
 class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>
</td>



</tr>
      })
     }
    
     
    </tbody>
  </table>
  {/* <h3>Resize Me</h3> */}
</div>
    </div>
  </div>
</div>

    )
}

export default Branches