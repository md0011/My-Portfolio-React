import './StyledNavbar.jsx';
import './App.css';
import React from "react";
import Navbar from './Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Project from './Pages/Projects/Project';
import Contact from './Pages/Contact/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Navigate to="/Home" />}/>

          <Route path="home" element={<Home/>}/>
         
          <Route path="about" element={<About/>}/>
          
          <Route path="skills" element={<Skills/>}/>
          
          <Route path="project" element={<Project/>}/>
         
          <Route path="contact" element={<Contact/>}/>         
        </Routes>
    </Router>
  );
}

export default App;
