import React from 'react';
import NavBar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Landing from './components/Landing';
import './globals.css'

const Home: React.FC = () => {
  return (
    <div>
     < NavBar />
      <Landing />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
