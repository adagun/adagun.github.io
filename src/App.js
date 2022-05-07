import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import ParticlesBackground from "./components/ParticlesBackground";

import Header from "./screens/header/Header";
import Github from "./screens/github/Github";
import Projects from "./screens/projects/Projects";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MemoryRouter } from 'react-router'
function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<><Header/></>} />
          <Route exact path="/github" element={<><Github/></>} />
          
          <Route exact path="/projects" element={<><Projects/></>} />
        </Routes>
        <ParticlesBackground/>
        {/*  <Footer />*/}
    
      </div>
    </MemoryRouter>
  );
}

export default App;


