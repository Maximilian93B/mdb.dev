
import { useEffect, useState, RefObject } from 'react';

// UseonScreen is a function that expects a boolean as a return
// it will also use a 'ref' which is attached to a HTML element
// The Boolean will be used to see if the component is visible ( isVisible )
// Using a generic '<T> in our RefObject' will allow us to use our function on any HTML element 
const useOnScreen = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
  // Handle the visibility of the component with useState
  // Initially set to false to hide component when mounted 
  const [isIntersecting, setIntersecting] = useState(false);

  // After the component renders useEffect to set up the Observer 
  useEffect(() => {
    // Set up InterSection observer to watch our elements then trigger our function once its triggered
    // our function will take an 'entry' as input 
    // if  entry isIntersecting = true , if not = false 
    const observer = new IntersectionObserver(
      ([entry]) => {
        // is our component Visible?
        // We need to update the state and give it the new information 
        // is it visible or not!
        // use setIntersection to update the state
        setIntersecting(entry.isIntersecting);
      },
      // Lets set some options to decide when our components are visible 
      // rootMargin will be our margin around the root, The root will the viewport  
      // and setting a threshold to 0.5 should consider it visible when 50% of the component is visible
      {
        rootMargin: '0px',
        threshold: 0.5 // Adjust this based on when you want your component to be visible 
      }
    );
    // Start the observer 
    // If the elements exists = 'ref.current' is not null
    // Then we can start our observer to start watching for changes 
    if (ref.current) {
      observer.observe(ref.current);
    }
    // When our component is unmounted or the reference is changed
    // We can tell our observer to stop using resources
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]); // Re run the effect only if the ref object changes 


  // Finally , we can return our useOnScreen hook to determine if our component is visible or not
  return isIntersecting;
};

export default useOnScreen;


/**
 * This hook is a tool to check if an element is visible on the screen. It sets up a watcher for the element and updates the state based on the element's visibility. This can be very handy for doing things only when the user can see the element, like starting animations or loading content dynamically.
 */