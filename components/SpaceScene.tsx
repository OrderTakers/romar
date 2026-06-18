'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, OrbitControls } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import * as THREE from 'three';

// Simplified WhiteDwarfStar with less geometry
function WhiteDwarfStar() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -15]}>
      <sphereGeometry args={[1.5, 16, 16]} /> {/* Reduced segments */}
      <meshBasicMaterial 
        color="#ffffff"
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// Simplified FloatingCodeIcons with fewer objects
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
        <group key={index} position={pos} scale={0.3}> {/* Reduced scale */}
          <mesh position={[-0.3, 0, 0]}>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
          </mesh>
          <mesh position={[0.3, 0, 0]}>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
          </mesh>
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[0.6, 0.05, 0.05]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, -0.2, 0]}>
            <boxGeometry args={[0.6, 0.05, 0.05]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Reduced NebulaCloud particles
function NebulaCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions } = useMemo(() => {
    const count = 500; // Reduced from 1000
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
        opacity={0.1} // Reduced opacity
        sizeAttenuation
      />
    </points>
  );
}

// Simplified ShootingStars
function ShootingStars() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { positions } = useMemo(() => {
    const lineCount = 30; // Reduced from 50
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
      <lineBasicMaterial color="#ffffff" transparent opacity={0.2} />
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
      <ringGeometry args={[4, 8, 32]} /> {/* Reduced segments */}
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.05}
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
        if (child instanceof THREE.Mesh && child.position) {
          child.position.x = Math.cos(angle) * 2;
          child.position.z = Math.sin(angle) * 2;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[5, 3, -20]}>
      <mesh>
        <sphereGeometry args={[0.8, 8, 8]} /> {/* Reduced segments */}
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.5, 8, 8]} /> {/* Reduced segments */}
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

// Error Boundary Component
function SceneErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('WebGL') || event.message.includes('context')) {
        setHasError(true);
        console.warn('WebGL error detected, showing fallback');
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white/30 text-sm">Loading 3D scene...</div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function SpaceScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!mounted || !webglSupported) {
    return (
      <div className="fixed inset-0 bg-black" />
    );
  }

  // Mobile-specific optimizations
  const starCount = isMobile ? 1500 : 5000;
  const sparkleCount = isMobile ? 100 : 300;
  const disableControls = isMobile;

  return (
    <SceneErrorBoundary>
      <Canvas
        camera={{ position: [0, 0, 20], fov: isMobile ? 75 : 60 }}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0,
          backgroundColor: '#000000'
        }}
        dpr={[1, isMobile ? 1 : 2]} // Limit pixel ratio
        gl={{
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false,
          antialias: !isMobile,
          alpha: false,
          stencil: false,
          depth: true,
        }}
        onCreated={({ gl }) => {
          // Ensure we're not using too much memory
          gl.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.1} />
          <pointLight position={[20, 10, 20]} intensity={0.2} />
          <pointLight position={[-20, -10, 20]} intensity={0.1} />
          
          {/* Stars - Reduced counts */}
          <Stars
            radius={500}
            depth={150}
            count={starCount}
            factor={6}
            saturation={0}
            fade
            speed={0.1}
          />
          
          <Stars
            radius={300}
            depth={100}
            count={Math.floor(starCount * 0.6)}
            factor={4}
            saturation={0}
            fade
            speed={0.2}
          />
          
          {/* Sparkles - Reduced counts */}
          <Sparkles
            count={sparkleCount}
            size={2}
            speed={0.1}
            opacity={0.5}
            color="#ffffff"
            scale={40}
          />
          
          <Sparkles
            count={Math.floor(sparkleCount * 0.5)}
            size={3}
            speed={0.05}
            opacity={0.3}
            color="#ffffff"
            scale={60}
          />
          
          {/* Space objects - Some conditional for mobile */}
          <WhiteDwarfStar />
          {!isMobile && <BinaryStarSystem />}
          {!isMobile && <RotatingGalaxy />}
          {!isMobile && <NebulaCloud />}
          {!isMobile && <ShootingStars />}
          {!isMobile && <FloatingCodeIcons />}
          
          {/* Fog effect */}
          <fog attach="fog" args={['#000000', 30, 150]} />
          
          {/* OrbitControls - Disabled on mobile */}
          {!disableControls && (
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              maxDistance={100}
              minDistance={5}
              autoRotate={false}
            />
          )}
        </Suspense>
      </Canvas>
    </SceneErrorBoundary>
  );
}