'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function WhiteDwarfStar() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial 
        color="#ffffff"
        transparent
        opacity={0.9}
      />
      <pointLight 
        position={[0, 0, 0]} 
        intensity={0.5} 
        color="#ffffff"
        distance={10}
      />
    </mesh>
  );
}

function FloatingCodeIcons() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  const positions: [number, number, number][] = [
    [-4, 2, -10],
    [3, -1, -8],
    [-2, -3, -12],
    [5, 1, -15],
  ];

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <group key={index} position={pos} scale={0.5}>
          <mesh position={[-0.3, 0, 0]}>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0.3, 0, 0]}>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[0.6, 0.05, 0.05]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
          </mesh>
          <mesh position={[0, -0.2, 0]}>
            <boxGeometry args={[0.6, 0.05, 0.05]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function NebulaCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions } = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }
    return { positions, count };
  }, []);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [positions]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001;
      pointsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={pointsRef} position={[0, 0, -25]}>
      <primitive object={geometry} attach="geometry" />
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.15}
        sizeAttenuation
      />
    </points>
  );
}

function ShootingStars() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { positions } = useMemo(() => {
    const lineCount = 50;
    const positions = new Float32Array(lineCount * 6);
    for (let i = 0; i < lineCount * 6; i += 6) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
      
      positions[i + 3] = x + (Math.random() - 0.5) * 5;
      positions[i + 4] = y + (Math.random() - 0.5) * 5;
      positions[i + 5] = z + (Math.random() - 0.5) * 5;
    }
    return { positions, count: lineCount * 2 };
  }, []);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [positions]);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial color="#ffffff" transparent opacity={0.3} />
    </lineSegments>
  );
}

function RotatingGalaxy() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <mesh ref={meshRef} position={[-15, -8, -40]}>
      <ringGeometry args={[4, 8, 64]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
        wireframe
      />
    </mesh>
  );
}

function BinaryStarSystem() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      const time = state.clock.elapsedTime;
      groupRef.current.children.forEach((child, i) => {
        const angle = time * 0.5 + i * Math.PI;
        if (child instanceof THREE.Mesh) {
          child.position.x = Math.cos(angle) * 2;
          child.position.z = Math.sin(angle) * 2;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[5, 3, -20]}>
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
        <pointLight intensity={0.4} color="#ffffff" distance={8} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
        <pointLight intensity={0.3} color="#ffffff" distance={6} />
      </mesh>
    </group>
  );
}

export default function SpaceScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 60 }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0,
        backgroundColor: '#000000'
      }}
    >
      <ambientLight intensity={0.2} color="#ffffff" />
      <pointLight position={[20, 10, 20]} intensity={0.3} color="#ffffff" />
      <pointLight position={[-20, -10, 20]} intensity={0.2} color="#ffffff" />
      <pointLight position={[0, 20, 10]} intensity={0.1} color="#ffffff" />
      
      {/* Stars layers */}
      <Stars
        radius={500}
        depth={150}
        count={8000}
        factor={8}
        saturation={0}
        fade
        speed={0.2}
      />
      
      <Stars
        radius={300}
        depth={100}
        count={5000}
        factor={6}
        saturation={0}
        fade
        speed={0.4}
      />
      
      <Sparkles
        count={500}
        size={2}
        speed={0.1}
        opacity={0.7}
        color="#ffffff"
        scale={40}
      />
      
      <Sparkles
        count={200}
        size={4}
        speed={0.05}
        opacity={0.5}
        color="#ffffff"
        scale={60}
      />
      
      {/* Space objects */}
      <WhiteDwarfStar />
      <BinaryStarSystem />
      <RotatingGalaxy />
      <NebulaCloud />
      <ShootingStars />
      <FloatingCodeIcons />
      
      {/* Fog effect */}
      <fog attach="fog" args={['#000000', 30, 150]} />
      
      {/* OrbitControls - Allows you to move the camera */}
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.8}
        rotateSpeed={0.8}
        maxDistance={100}
        minDistance={5}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
        autoRotate={false}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}