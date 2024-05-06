import React, { useRef } from 'react'; 
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import Avatar from '../../../public/MyAvatar.svg'



const MyAvatar: React.FC = () => {
    const avatarRef = useRef<HTMLDivElement>(null)



    return ( 
        <animated.div>
        <Image src={Avatar} alt='Avatar Picture'></Image>
        </animated.div>
    );
};


export default MyAvatar;
