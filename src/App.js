import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import Header from './Header';
import Nav from './Nav';
import MenuNav from './MenuNav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() { 

  useEffect(()=>{
    document.title = "Jeremy Chai"
  }, [])
  
  return (
    <div className="App">
      <MenuNav />
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
