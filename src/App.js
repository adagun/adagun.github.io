import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./screens/home/Home";
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
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/github" element={<Github/>} />
          
          <Route exact path="/projects" element={<Projects/>} />
        </Routes>
        {/*  <Footer />*/}
    <ParticlesBackground/>
      </div>
    </MemoryRouter>
  );
}

export default App;


