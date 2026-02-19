"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function TestScene() {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-blue-800/50 shadow-2xl">
      <Canvas camera={{ position: [0, 0, 5] }} gl={{ antialias: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
        <OrbitControls enableZoom enableRotate dampingFactor={0.05} />
        <gridHelper args={[10, 10]} />
      </Canvas>
    </div>
  );
}