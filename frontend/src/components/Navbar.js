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
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import Top_questions from './Top_questions';
import My_Answers from './My_Answers';
import My_questions from './My_questions';
import Tags from './Tags';
import Users from './Users';
import './Navbar.css';
function Navbar() {
    const [cookies, setCookie] = useCookies(['name']);
    const navigate = useNavigate();
    const logout=()=>{
        Cookies.remove('username', { path: '/' });
    }
    useEffect(() => {
        window.addEventListener("beforeunload", (ev) => 
        {
          var temp=localStorage.getItem("is_stored");
          console.log(temp)
          if(temp==1)
          {
            console.log("Keep cookies here")
          }
          else
          {
            // console.log(ev)  
            // ev.preventDefault();
            // return ev.returnValue = 'Hello';
            console.log("Remove cookies here");
            Cookies.remove('username', { path: '/' });;
            // localStorage.removeItem("is_stored")
          }
          
        });
    }, [])
    const [element,setelement]=useState(<Top_questions/>)

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor: "#b3b0b0"}}>
        <div className="container-fluid">

          <button className="btn mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fas fa-bars fa-2x"></i></button>

          <a className="navbar-brand" href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" className="mx-3" height="50"
                    alt="" loading="lazy" />
          </a>
          
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-search fa-2x"></i>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex align-items-center w-100 form-search">
              <div className="input-group ps-5">
                <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
              </div>
              <a href="#!" className="text-white"><i className="fas fa-search ps-3"></i></a>
            </form>

            <ul className="navbar-nav d-flex flex-row ms-auto me-3 ps-5">
              <li className="nav-item me-3 me-lg-0 dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png?v=1571606036" className="rounded-circle" height="50"
                    alt="" loading="lazy" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
                  <li><Link className="dropdown-item" to="/homepage/profile">Profile</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" onClick={logout} to="/" >Logout</Link></li>
                </ul>
              </li>
            </ul>
          </div>


        </div>
      </nav>
      {element}
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{width: "300px"}}>
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"> CAQ Menu</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
              <div className='row' id='zxcv'>
                <div className='col-3'>
                <i className="fas fa-globe-asia fa-2x"/>
                </div>
                <div className='col'>
                  <span style={{fontSize:'150%'}} onClick={()=>{setelement(<Top_questions/>)}}>Top Questions</span>
                </div>
              </div> 
          
              <div className='row' id='zxcv'>
                <div className='col-3'>
                <i className="fas fa-question fa-2x"/>
                </div>
                <div className='col'>
                  <span style={{fontSize:'150%'}} onClick={()=>{setelement(<My_questions/>)}}>My Questions</span>
                </div>
              </div>
    
              <div className='row' id='zxcv'>
                <div className='col-3'>
                <i className="fas fa-comments fa-2x"/>
                </div>
                <div className='col'>
                  <span style={{fontSize:'150%'}} onClick={()=>{setelement(<My_Answers/>)}}>My Answers</span>
                </div>
              </div>

            <div className='row' id='zxcv'>
                <div className='col-3'>
                <i className="fas fa-tags fa-2x"/>
                </div>
                <div className='col'>
                  <span style={{fontSize:'150%'}} onClick={()=>{setelement(<Tags/>)}}>Tags</span>
                </div>
            </div> 

            <div className='row' id='zxcv'>
                <div className='col-3'>
                <i className="fas fa-users fa-2x"/>
                </div>
                <div className='col'>
                  <span style={{fontSize:'150%'}} onClick={()=>{setelement(<Users/>)}}> Users</span>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Navbar