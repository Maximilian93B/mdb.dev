import React, { useRef } from 'react';
import { animated } from 'react-spring';
import useOnScreen from '../utils/ScrollContext';
import { useFadeInAnimation } from '../utils/useFadeAnimation';
import MyAvatar from './Avatar';



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
    <section className='section' id='about'>
      <div className='column'>
      <animated.h1 ref={headerRef} style={headerStyles}>Learn About Me</animated.h1>
      <animated.p ref={subheaderRef} style={subheaderStyles} className='about-p'> 
      Hey, I'm Max, a full-stack developer with a passion for bringing creative, immersive, and responsive web and mobile environments to life. I love all aspects of web development, from frontend design to backend infrastructure. I really enjoy figuring out ways to present data to users in order to provide the best web experience possible. I have traveled the world and experienced many different cultures and values, and it has helped mold me into the developer I am today. Thanks for stopping by my profile. Have a nice day!
      Max.
      </animated.p>
      </div>
      <div className='column'>
        < MyAvatar/>
    </div>
    </section>
  );
};

export default About;
