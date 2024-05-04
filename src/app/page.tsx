'use client'

import React, { useRef } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Landing from './components/Landing';
import { Parallax, ParallaxLayer, } from '@react-spring/parallax'
import Navbar from './components/NavBar';
import './globals.css'

// This line allows NextJs to execute all child components of our 'Home' component on the client side to handle animations etc.. 
const Home: React.FC = () => {
  const parallax = useRef<any>(null);

const scrollTo = (offset: number) => {
  parallax.current?.scrollTo(offset);
};

  // Set ref for scrolling 
// Set our custome hook for the scroll effect 


return (
  <>
      <Navbar scrollTo={scrollTo} />
      <Parallax className='background-style'ref={parallax} pages={4} style={{ width: '100vw', height: '100vh' }}>
          <ParallaxLayer offset={0} speed={0.5}>
              <Landing />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
              <About />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
              <Projects />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5}>
              <Skills />
          </ParallaxLayer>
      </Parallax>
  </>
);
};

export default Home;
