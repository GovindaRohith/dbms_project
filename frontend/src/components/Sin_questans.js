import React, { useState, useEffect } from 'react';
import axios from './axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

 function Sin_questans() {   
    return (
        <>
          <div className='container py-4'>
            <div className="card mb-5">
              <div className="card-body">
                <div className="row">
                  {/* <div className="col-sm-9"> */}
                  <h3>How can I make Bootstrap columns all the same height?</h3>
                  {/* </div> */}
                  {/* <div className="col-sm-3"> */}
                    {/* <div className="input-group"> */}
                    {/* <button type="button" className="btn btn-primary">Ask Question</button> */}
                      {/* <input type="text" className="form-control" placeholder="Recipient's username" readOnly/> */}
                    {/* </div> */}
                  {/* </div> */}
                </div>
                <p> <small className="text-muted">Asked</small> 9 years, 3 months ago &emsp;
                    <small className="text-muted">Modified</small>  1 year, 2 months ago &emsp;
                    <small className="text-muted">Viewed</small>  1.2M times
                </p>
                {/* tags here */}
                <ul className="list-inline">
                  <li className="list-inline-item"><button type="button" className="btn btn-light">Python</button></li>
                  <li className="list-inline-item"><button type="button" className="btn btn-light">Html</button></li>
                  <li className="list-inline-item"><button type="button" className="btn btn-light">css</button></li>
                </ul>
                {/* question content from table here */}
                <p>I'm using Bootstrap. How can I make three columns all the same height?
                    Here is a screenshot of the problem.
                </p>
              </div>
            </div>
         </div>
        </>
    )
}

export default Sin_questans;