import React from 'react';

import { useSpring, animated } from 'react-spring';


interface AnimatedTerminalLineProps {
    line: string; 
}

const AnimatedLineProps: React.FC<AnimatedTerminalLineProps> = ({ line }) => {
    const animation = useSpring({ opacity: 1 , from : {opacity: 0 } });
    return <animated.div style={animation}>{line}</animated.div>;
};

export default AnimatedLineProps;