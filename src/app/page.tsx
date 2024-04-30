'use client'

import React, { useRef } from 'react';
import NavBar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Landing from './components/Landing';
import useOnScreen from './utils/ScrollContext';
import './globals.css'

// This line allows NextJs to execute all child components of our 'Home' component on the client side to handle animations etc.. 
const Home: React.FC = () => {

  // Set ref for scrolling 
const ref = useRef<HTMLDivElement>(null);
// Set our custome hook for the scroll effect 
const isVisible = useOnScreen(ref);

  return (
    <div>
   
      <Landing />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
