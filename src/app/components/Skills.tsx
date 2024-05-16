// Skills.tsx
'use client';
import React, { useState, useRef } from 'react';
import { animated } from 'react-spring';
import useOnScreen from '../utils/ScrollContext';
import { useFadeInAnimation } from '../utils/useFadeAnimation';
import Terminal from './Terminal';
import Modal from './Modal';

const Skills: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for each element
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subheaderRef = useRef<HTMLParagraphElement>(null);

  // Visibility states for each element
  const headerVisible = useOnScreen(headerRef);
  const subheaderVisible = useOnScreen(subheaderRef);

  // Animation styles for each element
  const headerStyles = useFadeInAnimation({ isVisible: headerVisible, delay: 300 });


  return (
    <section id="skills" className="p-4">
      <animated.h1 ref={headerRef} style={headerStyles}>
        My Terminal
      </animated.h1>
     
      
      <div className='flex  flex-col items-center'>
      <button onClick={() => setIsModalOpen(true)} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Open Terminal
      </button>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Terminal />
      </Modal>
    </section>
  );
};

export default Skills;
