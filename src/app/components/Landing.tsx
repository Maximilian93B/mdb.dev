'use client'

import React, { useEffect } from 'react';
import { animated, useSpring, SpringValues } from '@react-spring/web';

// Updated to new syntax for client-side execution

// Define interface for animation

interface AnimatedStyles {
    opacity: number;
    transform: string;
}

const Landing: React.FC = () => {
    // Define the animation using useSpring
    const [styles, api] = useSpring<AnimatedStyles>(() => {
        console.log('setting up animations');
        return{
            from: { opacity: 1, transform: 'translateY(-20px)' },
            to: { opacity: 0, transform: 'translateY(0)' },
            config: { duration: 1000 }
        };
    });

    // Reset the animation every time this component mounts
    useEffect(() => {
        console.log('Attempting to start animation.');
        api.start();
    }, [api]);

    
    return (
        <div className='landing' style={{ position: 'relative', height: '100vh' }}>
            <animated.h1 style={styles} className='header'>
                I am a Full Stack Developer and ...
            </animated.h1>
            <animated.p style={styles} className='subheader'>
                ....
            </animated.p>
            <div className='LandingText'>
                <animated.h1 style={styles} className='header'>
                    This was built using NextJs
                </animated.h1>
            </div>
        </div>
    );
}

export default Landing;
