import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import ParticlesBackground from "./components/ParticlesBackground";
import GitParticlesBackground from "./components/GitParticlesBackground";
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
          <Route exact path="/" element={<><Header/><ParticlesBackground/></>} />
          <Route exact path="/github" element={<><Github/><GitParticlesBackground/></>} />
          
          <Route exact path="/projects" element={<><Projects/><ParticlesBackground/></>} />
        </Routes>
        {/*  <Footer />*/}
    
      </div>
    </MemoryRouter>
  );
}

export default App;

// todo git particles / other pages particles
