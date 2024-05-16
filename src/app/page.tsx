'use client';

import React, { useRef, useEffect } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Landing from './components/Landing';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from './components/NavBar';
import './globals.css';

const Home: React.FC = () => {
  const parallax = useRef<any>(null);

  const scrollTo = (offset: number) => {
    parallax.current?.scrollTo(offset);
  };

  // Ensure the initial scroll position is at the top
  useEffect(() => {
    if (parallax.current) {
      parallax.current.scrollTo(0);
    }
  }, []);

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Parallax className="background-style" ref={parallax} pages={4} style={{ width: '100vw', height: '100vh' }}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Landing scrollTo={scrollTo} />
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
