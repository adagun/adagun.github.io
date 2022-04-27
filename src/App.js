import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import ParticlesBackground from "./components/ParticlesBackground";
import Header from "./screens/header/Header";
import Github from "./screens/github/Github";
import Projects from "./screens/projects/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div>
        <Header></Header>
        <Github />
        <Projects />
      </div>
      <Footer/>
      <ParticlesBackground />
    </div>
  );
}

export default App;

// todo add more css variables
