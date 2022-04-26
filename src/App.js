
import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import  ParticlesBackground  from './components/ParticlesBackground';
import Header from './screens/header/Header'
import Github from './screens/github/Github'


function App() {
  return (
    <div className="App">
     
      <Navigation/>
     
  
    <div >
    <Header>
      
    </Header>
      <Github/>
      
    </div>
    <ParticlesBackground/>
    </div>
  );
}

export default App;

//   <ParticlesBackground/>
     