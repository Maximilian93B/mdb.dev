import {useEffect, useRef } from 'react'
import * as THREE from 'three'; // Import three JS 
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; // Orbit controls are pre built using three 
import Globes from '../../../public/GlobePic.png';

const Globe = () => {
    // Create a ref to the div where the globe will be mounted 
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Get the current element from the ref ( mount ref )
        const currentMount = mountRef.current;
        
        // Create the new scene using THREE.scene()
        const scene = new THREE.Scene();
        
        // Create a new perspective using the camera attribute 
        const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // Create the new WebGL renderer 
        const renderer = new THREE.WebGLRenderer();
        // Using window . width , window . height for the size of the renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Append the dom element to the mounts element 
        currentMount?.appendChild(renderer.domElement);

        // Create a sphere using THREE geometry 
        const geometry = new THREE.SphereGeometry(5 , 32, 32 );
        // Load our texture --> picture of a globe
        const texture = new THREE.TextureLoader().load(Globes.src);
        
        // Create a basic material for the globe with our loaded texture 
        const material = new THREE.MeshBasicMaterial({
            map: texture 
        });

        // Create a new mesh with the geometry and material 
        const sphere = new THREE.Mesh(geometry, material)
       // add the spehere to the scene 
        scene.add(sphere);
        //console.log(THREE.Mesh) use to see Mesh Class 

        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.z = 15;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene,camera)
        };

        animate();
       // console.log(`Globe render`, requestAnimationFrame,controls,renderer)

        return () => {
            currentMount?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{width: '100vw', height: '100vh' }} />
};


export default Globe; 
