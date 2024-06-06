'use client';
import React, { useRef } from 'react';
import { animated } from 'react-spring';
import useOnScreen from '../utils/ScrollContext';
import { useFadeInAnimation } from '../utils/useFadeAnimation';
import { FaReact, FaPython, FaNodeJs, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiGraphql, SiGnubash } from 'react-icons/si';

const Skills: React.FC = () => {
  // Refs for header
  const mainHeaderRef = useRef<HTMLHeadingElement>(null);

  // Visibility states for each element
  const mainHeaderVisible = useOnScreen(mainHeaderRef);


  // Animation styles for each element
  const mainHeaderStyles = useFadeInAnimation({ isVisible: mainHeaderVisible, delay: 200 });

  // Array of skill symbols (replace with actual icons or text)
  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    { icon: <SiGnubash />, name: 'Bash' },
    { icon: <FaGitAlt />, name: 'Git' }
  ];


  return (
    <section id="skills" className="p-4 flex flex-col items-center">
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .bounce {
          display: inline-block;
          animation: bounce 2s infinite;
        }

        .skills-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

      `}</style>
      <animated.h1 ref={mainHeaderRef} style={mainHeaderStyles} className="ext-6xl font-bold flex flex-col justify-center mt-8 mb-20 ">
        Skills 
      </animated.h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="bounce text-4xl flex flex-col items-center mt-12">
            {skill.icon}
            <span className="text-md mt-2 text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
