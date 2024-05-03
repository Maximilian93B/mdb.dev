import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';
import useOnScreen from '../utils/ScrollContext';
import MyAvatar from './Avatar';

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
    config: { duration: 3000 },
    delay: delay
    }) 

    return <animated.span style={{...props, color: color }}>{text}</animated.span>
    };

// Component 
const Landing: React.FC = () => {
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
        <div ref={ref} className={`landing ${isVisible ? 'fade-in' : ''}`} style={{ position: 'relative', height: '100vh' }}>
           <h1>
           <AnimatedText text='Hey' color='blue' delay={400} />I'm <AnimatedText text='Max' color='green' delay={600} /><div></div>
           </h1>
           <h1>
            a <AnimatedText text='Full Stack Developer' color='blue' delay={900} />
           </h1>
            <div className='LandingText'>
                <h1>
                    This was built using <AnimatedText text='NextJs' color='red' delay={1200} />  
                </h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '54vh', width: '100%' }}>
                <MyAvatar />
            </div>
        </div>
    );
}

export default Landing;
