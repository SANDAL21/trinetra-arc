"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function ArcEye() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Slow rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.5;
      groupRef.current.rotation.x = Math.cos(t * 0.15) * 0.2;
    }
    
    // Mouse reaction
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    
    if (groupRef.current) {
      groupRef.current.rotation.y += (mouseX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-mouseY - groupRef.current.rotation.x) * 0.05;
    }

    // Inner elements animation
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.2;
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.3;
    if (ring3Ref.current) ring3Ref.current.rotation.y = t * 0.1;
  });

  // Premium dark material
  const material = new THREE.MeshStandardMaterial({
    color: "#1a1a24",
    roughness: 0.2,
    metalness: 0.8,
  });

  // Accent material
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: "#6b46c1",
    roughness: 0.1,
    metalness: 0.9,
    emissive: "#3b1e75",
    emissiveIntensity: 0.5,
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core - Vision */}
        <mesh ref={coreRef} material={accentMaterial}>
          <octahedronGeometry args={[0.8, 2]} />
        </mesh>

        {/* Ring 1 - Creation */}
        <mesh ref={ring1Ref} material={material}>
          <torusGeometry args={[1.6, 0.05, 16, 100]} />
        </mesh>

        {/* Ring 2 - Forward */}
        <mesh ref={ring2Ref} material={material}>
          <torusGeometry args={[2.2, 0.03, 16, 100]} />
        </mesh>

        {/* Arc element */}
        <mesh ref={ring3Ref} material={material}>
          <torusGeometry args={[2.8, 0.02, 16, 100, Math.PI * 1.5]} />
        </mesh>
      </Float>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#6b46c1" />
        
        <ArcEye />
        
        <Environment preset="city" />
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={20}
          blur={2}
          far={4.5}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
