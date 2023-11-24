import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import ReactDOM from 'react-dom/client';


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.z += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


const WebGLScene = (props) => {
  // document.getElementsByClassName("webGlScene");
  // console.log(document.getElementsByClassName("webGlScene"));
  return(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[0, 0, 0]} />
    
  </Canvas>
  );
  
};

export default WebGLScene;