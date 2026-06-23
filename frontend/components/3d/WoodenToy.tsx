"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, RoundedBox, Cylinder } from "@react-three/drei";

export default function WoodenToy({ toyId = "1" }: { toyId?: string }) {
  return (
    <Canvas camera={{ position: [0, 3, 6], fov: 45 }} className="w-full h-full cursor-grab active:cursor-grabbing">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <Environment preset="apartment" />
      <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={false} />
      
      {/* TOY 1: The Nature Stack */}
      {toyId === "1" && (
        <group position={[0, -0.5, 0]}>
          <RoundedBox args={[2, 0.5, 2]} radius={0.1} position={[0, 0, 0]}>
            <meshStandardMaterial color="#E6C280" roughness={0.7} />
          </RoundedBox>
          <RoundedBox args={[1.5, 0.5, 1.5]} radius={0.1} position={[0, 0.6, 0]}>
            <meshStandardMaterial color="#F3A683" roughness={0.7} />
          </RoundedBox>
          <RoundedBox args={[1, 0.5, 1]} radius={0.1} position={[0, 1.2, 0]}>
            <meshStandardMaterial color="#78E08F" roughness={0.7} />
          </RoundedBox>
          <Cylinder args={[0.2, 0.2, 2.5]} position={[0, 1, 0]}>
            <meshStandardMaterial color="#E6C280" roughness={0.8} />
          </Cylinder>
        </group>
      )}

      {/* TOY 2: Alphabet Blocks */}
      {toyId === "2" && (
        <group position={[0, 0, 0]}>
          <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.1} position={[-0.8, 0, 0.5]}>
            <meshStandardMaterial color="#82CCDD" roughness={0.6} />
          </RoundedBox>
          <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.1} position={[0.8, 0, -0.2]}>
            <meshStandardMaterial color="#F8A5C2" roughness={0.6} />
          </RoundedBox>
          <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.1} position={[0, 1.3, 0.2]}>
            <meshStandardMaterial color="#F6E58D" roughness={0.6} />
          </RoundedBox>
        </group>
      )}

      {/* DEFAULT TOY: Custom Name Puzzle / Others */}
      {toyId !== "1" && toyId !== "2" && (
        <group position={[0, 0, 0]}>
          <RoundedBox args={[4, 0.4, 1.5]} radius={0.05} position={[0, 0, 0]}>
            <meshStandardMaterial color="#E6C280" roughness={0.8} />
          </RoundedBox>
          <RoundedBox args={[0.8, 0.5, 0.8]} radius={0.1} position={[-1.2, 0.2, 0]}>
            <meshStandardMaterial color="#78E08F" roughness={0.6} />
          </RoundedBox>
          <RoundedBox args={[0.8, 0.5, 0.8]} radius={0.1} position={[0, 0.2, 0]}>
            <meshStandardMaterial color="#F3A683" roughness={0.6} />
          </RoundedBox>
          <RoundedBox args={[0.8, 0.5, 0.8]} radius={0.1} position={[1.2, 0.2, 0]}>
            <meshStandardMaterial color="#82CCDD" roughness={0.6} />
          </RoundedBox>
        </group>
      )}
    </Canvas>
  );
}