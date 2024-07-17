import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate, Outlet,
} from 'react-router-dom';// to create router
import Home from './components/Home';
import Explore from './components/Explore';
import Skill from './components/Skill';
import Resume from './components/Resume';
import Job from './components/Job';
import Login from './components/Login';
import Navbar from "./components/Navbar";

import './App.css';



function App() {

  return (
    < div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path='/Skill' element={<Skill />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Job' element={<Job />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      
    </div>
  )
}


export default App
