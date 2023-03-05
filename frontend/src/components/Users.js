import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
 
export default function Users() {
  const [el, setel] = useState([])
  function rankings(rep){
    var out;
    if(rep <= 2000)  out = "Bronze";
    else if(rep > 2000 && rep <= 5000) out = "Silver";
    else if(rep > 5000 && rep <= 10000) out = "Gold";
    else out = "Platinum";
    return out;
  }
  const timegetter=(p_date)=>{
    const now = new Date(p_date);
    const nowTimezoneOffset = now.getTimezoneOffset();
    const givenOffset = -5.5 * 60*60; // Convert 5:30 hours to minutes
    const originalNowTime = new Date(now.getTime() + (nowTimezoneOffset * 60 * 1000) - (givenOffset * 1000));
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour12: true,
      // timeZone: 'UTC'
    };
    const formattedDate = originalNowTime.toLocaleString('en-US', options);
      return(
        <>
        {formattedDate}
        </>
      )
    }
const fetchData = () => {
 axios
   .get('/users')
   .then((res) => {
    console.log(res.data)
     setel(res.data);
   });
};
 React.useEffect(()=>{
   fetchData()
 },[])
  return (
    <>
    <div className='container my-3'>
        <h1 className='ps-5'>Users</h1>
      <div className='row'>
        <div className='col-md-6 mb-3'>
            <form className="d-flex align-items-center w-75 form-search">
                <div className="input-group ps-5">
                <input type="search" className="form-control" placeholder="Search users" aria-label="Search" />
                </div>
                <a href="#!" className="text-dark"><i className="fas fa-search ps-3"></i></a>
            </form>
        </div>
        <div className='col-md-6 text-end mb-3'>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-info" disabled>Last seen</button>
                <button type="button" className="btn btn-outline-info"><i className="fas fa-sort-amount-up"></i></button>
                <button type="button" className="btn btn-outline-info"><i className="fas fa-sort-amount-down"></i></button>
                <button type="button" className="btn btn-outline-info" disabled>Reputation</button>
                <button type="button" className="btn btn-outline-info"><i className="fas fa-sort-amount-up"></i></button>
                <button type="button" className="btn btn-outline-info"><i className="fas fa-sort-amount-down"></i></button>
            </div>
        </div>
      </div>

      <div className='row my-4'>
      {el.map((post) => {
        return   <div className='col-md-3 mx-6'>
        <div className="card hover-shadow p-3 mb-2">
                <div className='row'>
                    <div className="d-flex flex-row align-items-center">
                        <img src={post.profile_image_url} className="rounded-circle mx-3" height="50"
                        alt="Not found" loading="lazy" />

                        <div className="ms-2 c-details" >
                            <h4 className="mb-0"><em>{post.display_name}</em></h4> 
                            <span><i class="fas fa-bullseye"></i> <em>{post.reputation}</em></span>
                            <p><i class="fas fa-trophy"></i> <em>{rankings(post.reputation)}</em></p>
                        </div>
                    </div>
                </div>
                <div className='row text-left'>
                    <p><em>Last accessed : </em>{timegetter(post.last_access_date)}</p>  
                </div>
            </div>
    </div>
      })}
    
</div>
    </div>
    </>
  );
}