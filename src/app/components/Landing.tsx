import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import useOnScreen from '../utils/ScrollContext';
import MyPointer from './Pointer';

// Define interface for animation styles
interface AnimatedTextProps {
    text: string;
    color: string;
    delay: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, color ,delay }) => {
    const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)'},
    config: { duration: 1000 },
    delay: delay
    }) 

    return <animated.span style={{...props, color: color }}>{text}</animated.span>
    };


    // Scroll to function for Pointer 
    interface LandingProps {
        scrollTo: (offset: number) => void; 
    }

// Component 
    const Landing: React.FC<LandingProps> = ({ scrollTo }) => {
        const ref = useRef<HTMLDivElement>(null);
        const isVisible = useOnScreen(ref);
    // Define the animation using useSpring
    // Reset the animation every time the visibility changes
        useEffect(() => {
        if (isVisible) {
            console.log('Attempting to start animation.');
        }
        console.log('Animation triggered')
        }, [isVisible]);

        return (
        <div ref={ref} 
        className={`landing ${isVisible ? 'fade-in' : ''}`} 
        style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
        style={{ flex: 1,
        textAlign: 'center',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        }}>
            
        <h1 style={{ fontSize: '58px', fontWeight: '800', color: 'white' }}>
          Hey!<AnimatedText text=" I'm Max" color="#ff3131" delay={300} />
        </h1>

        <h1 style={{ fontSize: '48px', fontWeight: '800', color: 'white' }}>
          A <AnimatedText text="Full Stack Developer" color="" delay={300} />
        </h1>

        <p style={{ fontSize: '38px', fontWeight: '700' }}>
          <AnimatedText text="Creative." color="white" delay={200} />
        </p>

        <p style={{ fontSize: '38px', fontWeight: '700' }}>
          <AnimatedText text="Functional." color="white" delay={250} />
        </p>

        <p style={{ fontSize: '38px', fontWeight: '700' }}>
          <AnimatedText text="Web & Mobile applications." color="#ff3131" delay={300} />
        </p>

        <div style={{ position: 'absolute', bottom: 0, right: '50%', transform: 'translateX(50%)' }}>
          <MyPointer onClick={() => scrollTo(1)} />
        </div>
      </div>
    </div>
    );
};

export default Landing;