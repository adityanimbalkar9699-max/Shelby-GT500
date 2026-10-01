import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import CarModel from "./CarModel";
import Loader from "./Loader";
import { useAppContext } from "../../utils/AppContext";

function CameraRig({ activeSection }: { activeSection: string }) {
  useFrame((state) => {
    // Base position
    const targetPos = new THREE.Vector3(5, 2, 8);
    const targetLook = new THREE.Vector3(0, 0, 0);

    if (activeSection === "configurator") {
      targetPos.set(4, 1.5, 5); // Zoom in closer
      targetLook.set(0, 0, 0);
    }

    // Add parallax on top of target position
    targetPos.x += state.pointer.x * 2;
    targetPos.y += state.pointer.y * 1;

    state.camera.position.lerp(targetPos, 0.05);
    state.camera.lookAt(targetLook);
  });
  return null;
}

export default function HeroScene() {
  const { carColor, activeSection } = useAppContext();

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 2, 8]} fov={35} />
        <color attach="background" args={["#050505"]} />

        <fog attach="fog" args={["#050505", 10, 30]} />

        <Suspense fallback={<Loader />}>
          <Environment preset="city" />

          {/* Dramatic Lighting */}
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
            shadow-bias={-0.0001}
          />
          <spotLight position={[10, 0, 10]} intensity={1} color="#ffffff" />
          <spotLight position={[-10, 0, -10]} intensity={0.5} color="#E10600" />

          <CarModel color={carColor} />

          {/* Ground Reflection & Shadow */}
          <ContactShadows
            resolution={1024}
            scale={20}
            blur={2}
            opacity={0.5}
            far={10}
            color="#000000"
          />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.51, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial
              color="#050505"
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>

          <CameraRig activeSection={activeSection} />
        </Suspense>
      </Canvas>
    </div>
  );
}
