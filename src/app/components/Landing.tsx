import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';
import useOnScreen from '../utils/ScrollContext';
import MyAvatar from './Avatar';
// Define interface for animation styles
interface AnimatedStyles {
    opacity: number;
    transform: string;
}

const Landing: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    // Define the animation using useSpring
    const [styles, api] = useSpring<AnimatedStyles>(() => ({
        from: { opacity: 1, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 2000 }
    }));

    // Reset the animation every time the visibility changes
    useEffect(() => {
        if (isVisible) {
            console.log('Attempting to start animation.');
            api.start();
        }
        console.log('Animation triggered')
    }, [api, isVisible]); // Depend on isVisible to trigger animation when element is visible

    return (
        <div ref={ref} className={`landing ${isVisible ? 'fade-in' : ''}`} style={{ position: 'relative', height: '100vh' }}>
            <animated.h1 style={styles}>
                I'm Max, a Full Stack Developer.
            </animated.h1>
        
            <div className='LandingText'>
                <animated.h1 style={styles} className='header'>
                    This was built using NextJs.
                </animated.h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '50vh', }}>
                <MyAvatar />
            </div>
        </div>
    );
}

export default Landing;
