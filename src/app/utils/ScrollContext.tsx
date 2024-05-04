
import { useEffect, useState, RefObject } from 'react';


const useOnScreen = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
  // Handle the visibility of the component with useState
  // Initially set to false to hide component when mounted 
  const [isIntersecting, setIntersecting] = useState(false);

  // After the component renders useEffect to set up the Observer 
  useEffect(() => {
    // Capture current ref value in local variable 
    const element = ref.current; 
    if (element){
    
    // Set up InterSection observer to watch our elements then trigger our function once its triggered
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We need to update the state and give it the new information 
        // use setIntersection to update the state
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.5 
      }
    );
   // Then we can start our observer to start watching for changes 
    observer.observe(element);

    // When our component is unmounted or the reference is changed
    // We can tell our observer to stop using resources
    return () => {
        observer.unobserve(element);
      };
    }
  }, [ref.current]); // Re run the effect only if the ref object changes 
  // Finally , we can return our useOnScreen hook to determine if our component is visible or not
  return isIntersecting;
};

export default useOnScreen;
