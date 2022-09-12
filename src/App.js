import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() { 
  return (
    <div className="App">
      <Nav />


      <Routes>
        <Route path="/" element={ <Header /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/skills" element={ <Skills /> }></Route>
        <Route path="/projects" element={ <Projects />} ></Route>
        <Route path="/contact" element={ <Contact /> } ></Route>
      </Routes>
    </div>
  );
}

export default App;
