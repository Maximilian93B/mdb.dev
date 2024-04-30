import { useSpring } from '@react-spring/web';


interface FadeInAmimationsProps {
    isVisible : boolean; // Set is visible as prop so every component can be passed 
    delay: number; // set delay to number so we can set a timed delay
}


export const useFadeInAnimation = ({ isVisible, delay } : FadeInAmimationsProps ) => {
    const styles = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        delay: delay,
        config: { duration: 1000 }
    });

    return styles;
};

