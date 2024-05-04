import React, { useState } from 'react';
import {Button} from '@/components/ui/button';
//import FireGif from '@/assets/fire.gif'; // or wherever your GIF/SVG is located

const BurnButton: React.FC = () => {
    const [hover, setHover] = useState(false);

    const buttonStyle: React.CSSProperties = {
        fontSize: '24px', // Larger font size
        fontWeight: 'bold',
        padding: '15px 30px', // Bigger button
        background: 'linear-gradient(45deg, red, yellow)', // Example gradient
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    };

    return (
        <div>
            <Button
                style={buttonStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                Button
            </Button>
            {hover && <img src={''} alt="Fire Animation" style={{ position: 'absolute', width: '100px', marginTop: '-100px' }} />}
        </div>
    );
};

export default BurnButton;
