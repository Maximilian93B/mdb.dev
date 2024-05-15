'use client'
import React, { useRef } from 'react';
import { animated } from 'react-spring';
import useOnScreen from '../utils/ScrollContext';
import { useFadeInAnimation } from '../utils/useFadeAnimation';
import ProjectCards from './Card';

import projectImage1 from '../../../public/Logo.svg'


const Projects: React.FC = () => {
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
    <section className='section' id="projects">
    <div className='columns-container'>
      <div className='column'>
        <animated.h1 ref={headerRef} style={headerStyles}> Explore my Apps & Projects </animated.h1>
        <animated.p ref={subheaderRef} style={subheaderStyles} className='subheader'>Code,Code,Code</animated.p>
      </div>

      <div className='column'>
        <div className='project-container'>
        <ProjectCards
          svgImage={''}
          title="First Project"
          description="This is a description of the first project."
          hoverTriggerImg={''}
          hoverTriggerWidth={300}  // Example width
          hoverTriggerHeight={100} // Example height
          />
        <ProjectCards
          svgImage=""
          title="Second Project"
          description="This is a description of the first project."
          hoverTriggerImg=""
          hoverTriggerWidth={300}  // Example width
          hoverTriggerHeight={100} // Example height   
        />
        <ProjectCards
          svgImage=""
          title="Second Project"
          description="This is a description of the first project."
          hoverTriggerImg=""
          hoverTriggerWidth={300}  // Example width
          hoverTriggerHeight={100} // Example height
          />
      </div>
      </div>
    </div>
  </section>
);
};

export default Projects;
