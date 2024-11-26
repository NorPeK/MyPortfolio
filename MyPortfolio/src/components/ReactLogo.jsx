import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF('models/react.glb');

  // Variable to track time for the easing function
  let elapsedTime = 0;

  // Animation logic for spinning
  useFrame((_, delta) => {
    if (meshRef.current) {
      elapsedTime += delta;

      // Calculate speed using a sinusoidal wave
      const speed = Math.abs(Math.sin(elapsedTime * Math.PI * 0.5)) * 5; // Speed oscillates from 0 to 5
      meshRef.current.rotation.z += delta * speed; // Increment rotation.z based on the calculated speed
    }
  });

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
        <mesh
          ref={meshRef} // Attach ref to the mesh for rotation
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]} // Initial rotation
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;
