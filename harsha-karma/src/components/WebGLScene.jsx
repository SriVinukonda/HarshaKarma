import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * GENERATED BY CHATGPT, AT MY REQUEST
 * YAY OPENSOURCE
*/
const WebGLScene = (props) => {
  const containerRef = useRef();

  useEffect(() => {
    console.log(props.modelPath);

    // Create a scene
    const scene = new THREE.Scene();
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / 4) / (window.innerHeight / 5), 0.1, 1000);
    camera.position.z = 2;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 4, window.innerHeight/5);

    // This line is needed because we dont want an infinite list of growing windows, obviously
    containerRef.current.textContent=''; // Re-eval later if there is a better way to do this

    containerRef.current.appendChild(renderer.domElement);
    console.log(containerRef.current)
    // Create a cube and add it to the scene
    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00,  flatShading: false});
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef} />;
};

export default WebGLScene;