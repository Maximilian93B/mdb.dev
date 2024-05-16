import React from 'react';

interface AnimatedLineProps {
  line: string;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ line }) => {
  return <div>{line}</div>;
};

export default AnimatedLine;


