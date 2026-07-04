import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random"; // ✅ correct import
import React, { Suspense, useRef, useState } from "react";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(800), { radius: 1.2 }), // ✅ works with default export
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#6ee7b7"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

/* Error boundary for Canvas */
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Canvas error:", error);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ width: "100%", height: "auto" }} />;
    }
    return this.props.children;
  }
}

const StarsCanvas = () => {
  return (
    <CanvasErrorBoundary>
      <div className="w-full h-auto absolute inset-0 z-[-1]">
        <Canvas frameloop="demand" camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
};

export default StarsCanvas;