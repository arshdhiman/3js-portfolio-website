
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, OrbitControls, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCube = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Interactive mouse following
      const mouse = state.mouse;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime + mouse.x) * 0.5;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime + mouse.y) * 0.3;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.3} 
          roughness={0.4} 
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      
      // Pulsing animation
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale * pulse);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.6} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const InteractiveTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Interactive rotation based on mouse position
      meshRef.current.rotation.x = mouse.y * 0.5 + state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = mouse.x * 0.5 + state.clock.elapsedTime * 0.2;
      
      // Color shifting
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.color.setHSL(
        (state.clock.elapsedTime * 0.1) % 1,
        0.7,
        0.5
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial metalness={0.8} roughness={0.1} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
      <spotLight 
        position={[0, 20, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1} 
        castShadow 
      />
      
      <Stars radius={300} depth={60} count={2000} factor={4} saturation={0} fade />
      
      {/* Enhanced floating geometric shapes */}
      <FloatingCube position={[-8, 4, -5]} color="#3b82f6" scale={0.8} />
      <FloatingCube position={[8, -4, -8]} color="#06b6d4" scale={1.2} />
      <FloatingSphere position={[6, 6, -6]} color="#8b5cf6" scale={0.6} />
      <FloatingSphere position={[-6, -2, -4]} color="#ec4899" scale={0.9} />
      <FloatingCube position={[0, 8, -10]} color="#10b981" scale={0.7} />
      <FloatingSphere position={[-4, 8, -7]} color="#f59e0b" scale={0.5} />
      <InteractiveTorus position={[4, -6, -5]} />
      <InteractiveTorus position={[-8, 0, -8]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate 
        autoRotate 
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default Scene3D;
