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

export default function Homepage(){
    const navigate = useNavigate();
const [cookies, setCookie] = useCookies(['name']);
const [user,setuser]=useState("")
    useEffect(()=>{
        setuser(()=>{
            const tempo=cookies.username;
            console.log(tempo);
            if(tempo.length===0) navigate("/");
            return tempo;
        })
},[])
return(
    <>
    Home page
    {user}
    </>
);

}

