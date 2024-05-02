import React from 'react';
import Image from 'next/image';
import Avatar from '../../../public/MyAvatar.svg';


const MyAvatar: React.FC = () => (
    <Image src={Avatar} alt="Profile Picture" width={500} height={100} />
  );
  

  export default MyAvatar; 