import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Add type declarations for Three.js elements used in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      ambientLight: any;
      color: any;
    }
  }
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.PointsMaterial>(null!);
  
  // Generate random particles
  const count = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread particles in a wide area
      positions[i * 3] = (Math.random() - 0.5) * 25; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (ref.current) {
      // Rotate the entire cloud slowly
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
      
      // Gentle wave motion
      ref.current.position.y = Math.sin(time / 4) * 0.2;
    }

    if (materialRef.current) {
      // Pulse brightness (opacity) between 0.4 and 0.8
      materialRef.current.opacity = 0.6 + Math.sin(time * 1.5) * 0.2;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          ref={materialRef}
          transparent
          color="#38bdf8" // Tailwind Sky-400
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-brand-black overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none" />
    </div>
  );
};

export default Scene3D;