import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

function Tags() {
  const [name,setname]=useState("")
  const [tagger,settagger]=useState([{
    tag_id: 188,
    tag_name: '.net',
    tag_count: 1422
  },])
    const [tags,settags]=useState([""])
    const enter_app=(e)=>{
      console.log("Hello")
        if(e.key==="Enter" && name!=="")
        {
            //true implies duplicate element is present
            // settags([...tags,name])
            settags([...tags,name])
            // console.log(temp)
            // settags(temp)
            setname("")
        }
    }
    const del_this_tag=(e)=>{
        var x=e.currentTarget.getAttribute("data-value");
        settags([...tags.filter((value) => value != x)])
    }
    useEffect(() => {
      axios.get("/tag") // passing the parameter here
          .then((res) => {
            console.log(res.data)
            settagger(res.data[0]) // data which is in syntax but not the data in useState in line 11
          })
          .catch((error)=> console.log(error));
      }, [])
  return (
    <>
     
    <div className='container my-3'>
        <h1 className='ps-5'>Tags</h1>
      <div className='row'>
        <div className='col-md-6 mb-3'>
            <div className="d-flex align-items-center w-75 form-search">
                <div className="input-group ps-5">
                  <input type="text" id="myInput" className="form-control" placeholder="Search Tag names" aria-label="Search" value={name} onKeyPress={e=>{enter_app(e)}} onChange={e => {setname(e.target.value)}}/>
                </div>
                <a href="#!" className="text-dark"><i className="fas fa-search ps-3"></i></a>
            </div>
        </div>
        <div className='col-md-6 text-end mb-3'>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-info" disabled>Name</button>
                <button type="button" className="btn btn-outline-info"><i className="fas fa-sort-alpha-up-alt"></i></button>
                <button type="button" className="btn btn-outline-info"><i className="fas fa-sort-alpha-down-alt"></i></button>
                <button type="button" className="btn btn-outline-info" disabled>Upvotes</button>
                <button type="button" className="btn btn-outline-info"><i className="fas fa-sort-amount-up"></i></button>
                <button type="button" className="btn btn-outline-info"><i className="fas fa-sort-amount-down"></i></button>
            </div>
        </div>
      </div>
          {
            tags.map(e=>{
              return(
                <>
                <div className="d-inline-block">
                <div className="btn-group me-2" role="group" aria-label="Second group">
                  <button type="button" className="btn btn-dark"><i className="fas fa-tag"></i> {e}</button>
                  <button className="btn btn-dark" data-value={e} type="button" id="button-addon2" onClick={del_this_tag}><i className="fas fa-times"></i></button>
                </div>
                </div>
                </>
                )
            })
          }
      <div className='row my-5'>
        <div className='col'>
            <div className="card hover-shadow mb-2">
              <div className="card-header">
                <button type="button" className="btn btn-dark" ><i className="fas fa-tag"></i> Python</button>
              </div>
              <div className="card-body">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer text-muted text-end">
                986097 Questions
              </div>
            </div>
        </div>
        
        <div className='col'>
            <div className="card hover-shadow mb-2">
              <div className="card-header">
                <button type="button" className="btn btn-dark" ><i className="fas fa-tag"></i> Python</button>
              </div>
              <div className="card-body">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer text-muted text-end">
                986097 Questions
              </div>
            </div>
        </div>
        <div className='col'>
            <div className="card hover-shadow mb-2">
              <div className="card-header">
                <button type="button" className="btn btn-dark" ><i className="fas fa-tag"></i> Python</button>
              </div>
              <div className="card-body">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer text-muted text-end">
                986097 Questions
              </div>
            </div>
        </div>
        <div className='col'>
            <div className="card hover-shadow mb-2">
              <div className="card-header">
                <button type="button" className="btn btn-dark" ><i className="fas fa-tag"></i> Python</button>
              </div>
              <div className="card-body">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer text-muted text-end">
                986097 Questions
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tags