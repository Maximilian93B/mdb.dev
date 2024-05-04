import React, { useRef } from 'react';
import { animated } from 'react-spring';
import useOnScreen from '../utils/ScrollContext';
import { useFadeInAnimation } from '../utils/useFadeAnimation';
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,} from "@/components/ui/drawer"



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
      <animated.h1 ref={headerRef} style={headerStyles}>Learn About Me</animated.h1>
      <animated.p ref={subheaderRef} style={subheaderStyles} className='about-p'> 
      As a Full Stack Developer, I am always trying to learn and improve & NextJS is #1 on my list. Building a portfolio seemed like the right thing to do start. 
      </animated.p>
      {/*Drawer component */}
      <Drawer>
      <DrawerTrigger className="drawer-trigger">Try Me</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>This is called a drawer component</DrawerTitle>
          <DrawerDescription>Something here</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close Me</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    </section>
  );
};

export default About;
