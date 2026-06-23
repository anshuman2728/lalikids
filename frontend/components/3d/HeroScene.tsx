"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PresentationControls, ContactShadows, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react"; // <-- FIX 1: We imported Suspense
import * as THREE from "three";

function WoodenBlock({ position, color, rotation }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} castShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.8} 
        metalness={0.1} 
        clearcoat={0.1}
      />
    </mesh>
  );
}

function TeethingRing({ position, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.4;
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      <torusGeometry args={[1.2, 0.4, 32, 64]} />
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.3} 
        transmission={0.2}
        thickness={1}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-[500px] cursor-grab active:cursor-grabbing relative z-20">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        
        {/* FIX 2: We wrapped the entire 3D world in Suspense */}
        <Suspense fallback={null}>
          
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <PresentationControls 
            global 
            rotation={[0.13, 0.1, 0]} 
            polar={[-0.4, 0.2]} 
            azimuth={[-1, 0.75]} 
            config={{ mass: 2, tension: 400 }} 
            snap={true} // <-- FIX 3: Simplified the snap physics to prevent math errors
          >
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <WoodenBlock position={[-1.5, 1, 0]} color="#F3C68F" rotation={[0, Math.PI / 4, 0]} />
              <WoodenBlock position={[1.5, -1, 0]} color="#A8DADC" rotation={[Math.PI / 4, 0, 0]} />
              <TeethingRing position={[0, 0, 1.5]} color="#E2ECE9" />
            </Float>
          </PresentationControls>

          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
          <Environment preset="city" />
          
        </Suspense>
      </Canvas>
    </div>
  );
}