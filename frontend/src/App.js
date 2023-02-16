import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
function App() {
  
  return (
    
      <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/homepage/profile" element={<Profile/>}/>
      {/* These comments show how to routing using params dont delete them*/}
      {/* <Route path="/student" element={<Studentdash/>}/> */}
      {/* <Route path="/student/subtopic/:topicid/:subtopicid/:subtopicname" element={<Topic/>}/> */}
      {/* <Route path="/student/subtopic/:topicid/:subtopicid/:subtopicname" element={<Topic/>}/> */}
      {/* <Route path="/faculty" element={<Facultydash/>}/> */}
      {/* <Route path="/faculty/mycourses/:topicid/:subtopicid/:subtopicname" element={<Mycourse/>}/> */}
      {/* <Route path="/admin" element={<Admindash />}/> */}
      </Routes>
    </Router>
    
  );
}

export default App;
