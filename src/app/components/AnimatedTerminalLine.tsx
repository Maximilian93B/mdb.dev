import React from 'react';
import { useSpring, animated } from 'react-spring';

interface AnimatedLineProps {
  line: string;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ line }) => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });
  return <animated.div style={animation}>{line}</animated.div>;
};

export default AnimatedLine;
