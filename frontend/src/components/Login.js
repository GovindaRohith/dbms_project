import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate
} from "react-router-dom";
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

export default function Login() { 
const [inp,setinp]=useState("");
const [pass,setpass]=useState("");
const [logininp,setlogininp]=useState("");
const [loginpass,setloginpass]=useState("");
const [forgot_name,setforgot_name]=useState("");
const [forgot_error,setforgot_error]=useState("");
const [cookies, setCookie] = useCookies(['name']);
const [is_stored,setis_stored]=useState(false);

useEffect(() => {
  const tempo=cookies.username;
  if(tempo===undefined) console.log("No cookies found")
  else
  {
    navigate("/homepage")
    // alert("Session restored")
  } 
}, [])

const forgot_up=()=>{
  axios.put("/login", {
    name:forgot_name,
  })
  .then((resp) =>{
    setforgot_error("");
    window.location.reload(false);
    alert("Password Updated Successfully!!!!!");
  })
  .catch(function (error) {
    setforgot_error("User name doesnot exists");
  });
  //setforgot_error
}

const forgot=()=>{
  return (
    <>
<Link to="#"type="button" className="link-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
  Forgot Password?
</Link>

<div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Forgot Password?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div className="modal-body">
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={(e)=>{setforgot_name(e.target.value)}}/>
        Your password be changed to username on clicking agree!!
        <br/>
        {forgot_error}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Dissmiss</button>
        <button type="button" className="btn btn-outline-primary" onClick={forgot_up}>Agree</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

const signer= ()=>{
  axios.post("/login", {
    name:inp,
    password:pass,
  })
  .then((resp) =>{
      alert("Account created successfully!!")
    // console.log(resp.statusCode);
    window.location.reload(false);
  })
  .catch(function (error) {
    alert("User name already exists try with another user name!!!")
  });
}

const logger=()=>{
  axios.post("/login/signin" ,{
      user:logininp,
      password:loginpass,
  })
  .then((resp)=>{
    console.log(is_stored)
    setCookie('username', logininp, { path: '/' });
    if(is_stored===true)  localStorage.setItem("is_stored",1);
    else localStorage.setItem("is_stored",0);
    navigate("/homepage")
    // localStorage.setItem("username:", logininp);
    // console.log(localStorage.getItem("username:"));
  })
    .catch(function (error) {
      // console.log(error)
    alert("User name or password incorrect")
  });
}

const sign_up=()=>{
  return(
    <>
    <br/>
    <br/>
    <br/>

    Signup Section here
         <br/>
    <br/>
    <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
    <div className="col-sm-10">
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={(e)=>{setinp(e.target.value)}}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" onChange={(e)=>{setpass(e.target.value)}} placeholder='Password'/>
    </div>
  </div>
  <button type="button" className="btn btn-outline-success" onClick={signer}>Signup</button>
    </>
  );
}
const navigate = useNavigate();

  return (
          <>
            <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
    <div className="col-sm-10">
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={(e)=>{setlogininp(e.target.value)}}/>
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" onChange={(e)=>{setloginpass(e.target.value)}} placeholder='Password'/>
    </div>
  </div>

  <button type="button" className="btn btn-outline-success" onClick={logger} >Login</button>
  
  
  <div className="form-check">
  <input className="form-check-input" type="checkbox" checked={is_stored}  onChange={()=>{setis_stored(!is_stored)}} id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Remember me!!
  </label>
</div>

{/* className="btn btn-primary" */}

{forgot()}

  {sign_up()}

          </>
      )
  }