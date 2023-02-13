import React, { useState, useEffect } from 'react';
// import axios from './axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";


export default function Login() { 
    const [inp,setinp]=useState(
        {
          names:"",
          password:""
        }
      )
      return (
          <>
            <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 col-form-label">Username</label>
    <div className="col-sm-10">
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={(e)=>{setinp({...inp,names:e.target.value})}}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label" onChange={(e)=>{setinp({...inp,password:e.target.value})}}>Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" placeholder='Password'/>
    </div>
  </div>




  <button type="button" className="btn btn-outline-success">Login</button>
  
  
  
  
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Remember me!!
  </label>
</div>

{/* className="btn btn-primary" */}

<Link to="#"type="button" className="link-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Forgot Password?
</Link>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Forgot Password?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Your password be changed to username on clicking agree!!
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Dissmiss</button>
        <button type="button" className="btn btn-outline-primary">Agree</button>
      </div>
    </div>
  </div>
</div>

          </>
      )
  }