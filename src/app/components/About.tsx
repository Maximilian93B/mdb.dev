import React, { useRef } from 'react';
import { animated } from 'react-spring';
import useOnScreen from '../utils/ScrollContext';
import { useFadeInAnimation } from '../utils/useFadeAnimation';

const About: React.FC = () => {
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
    <section id="about">
      <animated.h1 ref={headerRef} style={headerStyles}>Learn with Me</animated.h1>
      <animated.p ref={subheaderRef} style={subheaderStyles} className='subheader'>Here's something about me...</animated.p>
    </section>
  );
};

export default About;
