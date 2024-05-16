import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import Pointer from '../../../public/Pointer.svg';

interface MyPointerProps {
    onClick: () => void;
}




const MyPointer: React.FC<MyPointerProps> = ({ onClick }) => {
    const avatarRef = useRef<HTMLDivElement>(null);

    // Bounce animation using useSpring
    const animationProps = useSpring({
        to: async (next, cancel) => {
            while (1) {
                await next({ transform: 'scale(1.1)', opacity: 1 });
                await next({ transform: 'scale(1)', opacity: 0.8 });
            }
        },
        from: { transform: 'scale(1)', opacity: 0.8 },
        config: { tension: 120, friction: 14 }
    });

    return (
        <animated.div
            ref={avatarRef}
            style={{
                ...animationProps,
                willChange: 'transform, opacity',
                display: 'inline-block',  // Ensure the div is only as big as the content
                cursor: 'pointer'         // Change cursor to indicate interactivity
            }}
            onClick={onClick}
        >
            <Image src={Pointer} alt="Pointer Icon" width={200} height={100} />
        </animated.div>
    );
};

export default MyPointer;
