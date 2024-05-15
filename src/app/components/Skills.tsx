'use client'
import React, { useRef } from 'react';
import { animated } from 'react-spring';
import useOnScreen from '../utils/ScrollContext';
import { useFadeInAnimation } from '../utils/useFadeAnimation';
import Terminal from './Terminal';

const Skills: React.FC = () => {

  // Refs for each element
const headerRef = useRef<HTMLHeadingElement>(null);
const subheaderRef = useRef<HTMLParagraphElement>(null);

// Visibility states for each element
const headerVisible = useOnScreen(headerRef);
const subheaderVisible = useOnScreen(subheaderRef);

// Animation styles for each element
const headerStyles = useFadeInAnimation({ isVisible: headerVisible, delay: 300 });
const subheaderStyles = useFadeInAnimation({ isVisible: subheaderVisible, delay: 600 });


  return (
    <section id="skills">
      <animated.h1 ref={headerRef} style={headerStyles}>Thanks for stoping By!</animated.h1>
      <animated.p ref={subheaderRef} style={subheaderStyles} className='subheader'>Really...</animated.p>

    <div className='flex items-center'>
      <Terminal />
    </div>
    
    </section>
  );
};

export default Skills;
