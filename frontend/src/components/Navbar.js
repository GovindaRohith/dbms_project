import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useParams
} from "react-router-dom";
import { useBeforeunload } from 'react-beforeunload';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
function Navbar() {
    const [cookies, setCookie] = useCookies(['name']);
    const navigate = useNavigate();
    const logout=()=>{
        Cookies.remove('username', { path: '/' });
    }
    useEffect(() => {
      window.addEventListener("beforeunload", (ev) => 
    {  
//remove cookies based on remembe me !!!!
      ev.preventDefault();
    return ev.returnValue = 'Are you sure you want to close?';
    });
    }, [])

  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Any sample item</a>
        </li>
      
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <form className="d-flex" role="search">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navbar-brand" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" alt="Bootstrap" width="30" height="24"/>
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/homepage/profile">Profile</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" onClick={logout} to="/" >Logout</Link></li>
          </ul>
        </li>
        </form>
      </ul>
      
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar
