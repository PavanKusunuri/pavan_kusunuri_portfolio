import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

/* ─── Floating code-dot particles drifting through space ─────────────────── */
const CodeParticles = ({ count = 130 }) => {
  const ref = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#7c3aed"),
      new THREE.Color("#3b82f6"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#a78bfa"),
      new THREE.Color("#38bdf8"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 7;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.06;
      ref.current.rotation.x = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
};

/* ─── Torus ring that spins on its own axis ───────────────────────────────── */
const OrbitRing = ({ radius, rotX, rotZ, color, speed }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[rotX, 0, rotZ]}>
      <torusGeometry args={[radius, 0.018, 4, 60]} />
      <meshBasicMaterial color={color} transparent opacity={0.75} />
    </mesh>
  );
};

/* ─── Small satellite that orbits the origin on the XZ plane ─────────────── */
const OrbitingSatellite = ({
  orbitRadius,
  orbitSpeed,
  orbitOffset,
  yOffset,
  color,
  shape,
}) => {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * orbitSpeed + orbitOffset;
    if (ref.current) {
      ref.current.position.set(
        Math.cos(t) * orbitRadius,
        yOffset + Math.sin(state.clock.elapsedTime * 0.4 + orbitOffset) * 0.2,
        Math.sin(t) * orbitRadius,
      );
      ref.current.rotation.x += 0.012;
      ref.current.rotation.y += 0.016;
    }
  });

  const geometry =
    shape === "box" ? (
      <boxGeometry args={[0.28, 0.28, 0.28]} />
    ) : shape === "octa" ? (
      <octahedronGeometry args={[0.18]} />
    ) : (
      <tetrahedronGeometry args={[0.2]} />
    );

  return (
    <mesh ref={ref}>
      {geometry}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  );
};

/* ─── Central pulsating developer sphere ─────────────────────────────────── */
const DeveloperCore = () => (
  <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.4}>
    <Sphere args={[1, 32, 32]}>
      <MeshDistortMaterial
        color="#7c3aed"
        emissive="#4c1d95"
        emissiveIntensity={0.5}
        distort={0.35}
        speed={2.5}
        roughness={0.1}
        metalness={0.85}
      />
    </Sphere>
  </Float>
);

/* ─── Full developer scene ────────────────────────────────────────────────── */
const DeveloperScene = () => (
  <>
    <ambientLight intensity={0.35} />
    <pointLight position={[6, 6, 6]} intensity={2} color="#7c3aed" />
    <pointLight position={[-6, -4, -4]} intensity={1} color="#3b82f6" />

    {/* Central glowing distorted sphere */}
    <DeveloperCore />

    {/* Orbit rings – frontend / backend / data layers */}
    <OrbitRing
      radius={1.9}
      rotX={Math.PI / 2}
      rotZ={0}
      color="#7c3aed"
      speed={0.5}
    />
    <OrbitRing
      radius={2.3}
      rotX={Math.PI / 4}
      rotZ={Math.PI / 6}
      color="#3b82f6"
      speed={0.35}
    />
    <OrbitRing
      radius={1.6}
      rotX={0}
      rotZ={Math.PI / 3}
      color="#06b6d4"
      speed={0.6}
    />

    {/* Satellite code modules */}
    <OrbitingSatellite
      orbitRadius={2.3}
      orbitSpeed={0.7}
      orbitOffset={0}
      yOffset={0.4}
      color="#f59e0b"
      shape="box"
    />
    <OrbitingSatellite
      orbitRadius={2.0}
      orbitSpeed={0.5}
      orbitOffset={Math.PI * 0.66}
      yOffset={-0.3}
      color="#10b981"
      shape="octa"
    />
    <OrbitingSatellite
      orbitRadius={2.5}
      orbitSpeed={0.55}
      orbitOffset={Math.PI * 1.33}
      yOffset={0.1}
      color="#f472b6"
      shape="tetra"
    />
    <OrbitingSatellite
      orbitRadius={1.8}
      orbitSpeed={0.65}
      orbitOffset={Math.PI * 0.4}
      yOffset={-0.5}
      color="#38bdf8"
      shape="box"
    />
    <OrbitingSatellite
      orbitRadius={2.6}
      orbitSpeed={0.45}
      orbitOffset={Math.PI * 1.0}
      yOffset={0.6}
      color="#a78bfa"
      shape="octa"
    />

    {/* Floating code particles */}
    <CodeParticles count={80} />
  </>
);

/* ─── Canvas wrapper ──────────────────────────────────────────────────────── */
const ComputersCanvas = () => (
  <Canvas
    frameloop="always"
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 7], fov: 40 }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
      />
      <DeveloperScene />
    </Suspense>
  </Canvas>
);

export default ComputersCanvas;
