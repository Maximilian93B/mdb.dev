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
  const header1Ref = useRef<HTMLHeadingElement>(null);
  const header2Ref = useRef<HTMLHeadingElement>(null);
  const header3Ref = useRef<HTMLHeadingElement>(null);

  // Visibility states for each element
  const header1Visible = useOnScreen(header1Ref);
  const header2Visible = useOnScreen(header2Ref);
  const header3Visible = useOnScreen(header3Ref);

 // Animation styles for each element
 const header1Styles = useFadeInAnimation({ isVisible: header1Visible, delay: 300 });
 const header2Styles = useFadeInAnimation({ isVisible: header2Visible, delay: 600 });
 const header3Styles = useFadeInAnimation({ isVisible: header3Visible, delay: 900 });


 return (
  <section id="skills" className="p-4 flex flex-col items-center">
    <div className="flex flex-col items-center w-full max-w-2xl p-4">
    {/* Terminal Feature */}
      <div className="flex justify-between items-center w-full mb-8">
        <div className="flex flex-col">
          <animated.h1 ref={header1Ref} style={header1Styles} className="text-4xl font-bold">
             My Terminal
          </animated.h1>
          <animated.p ref={header1Ref} style={header1Styles} className="text-lg mt-2">
          Description for feature 2
          </animated.p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="p-2 bg-blue-500 text-white rounded">
          Open Terminal
        </button>
      </div>
      {/* 3JS Feature */}
      <div className="flex justify-between items-center w-full mb-8">
        <div className="flex flex-col">
          <animated.h1 ref={header2Ref} style={header2Styles} className="text-4xl font-bold">
            Feature 2
          </animated.h1>
          <animated.p ref={header2Ref} style={header2Styles} className="text-lg mt-2">
            Description for feature 2
          </animated.p>
        </div>
        <button onClick={() => alert('Feature 2 action')} className="p-2 bg-green-500 text-white rounded">
          Activate Feature 2
        </button>
      </div>
     
     {/* Unkown Feature  Possibly Burn Button?? */}
      <div className="flex justify-between items-center w-full mb-8">
        <div className="flex flex-col">
          <animated.h1 ref={header3Ref} style={header3Styles} className="text-4xl font-bold">
            Feature 3
          </animated.h1>
          <animated.p ref={header3Ref} style={header3Styles} className="text-lg mt-2">
            Description for feature 3
          </animated.p>
        </div>
        <button onClick={() => alert('Feature 3 action')} className="p-2 bg-red-500 text-white rounded">
          Activate Feature 3
        </button>
      </div>
    </div>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Terminal />
    </Modal>
  </section>
);
};

export default Skills;
