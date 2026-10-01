import { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

import { ErrorBoundary } from "../../utils/ErrorBoundary";

interface CarModelProps {
  color?: string;
  wireframe?: boolean;
}

function CarModelGLTF({ color, wireframe }: CarModelProps) {
  // Using the actual Shelby Mustang GT500 model requested by the user
  const { scene } = useGLTF("/mustang-shelby-gt500.glb");

  useEffect(() => {
    if (!scene) return;
    scene.traverse((child: any) => {
      if (child.isMesh) {
        // Color the main body paint.
        // Different models name their materials differently, so we use a loose match.
        const matName = child.material?.name?.toLowerCase() || "";
        if (
          matName.includes("body") ||
          matName.includes("paint") ||
          matName.includes("shell") ||
          matName.includes("color") ||
          matName.includes("carrosserie") // Some models use french
        ) {
          child.material.color = new THREE.Color(color);
          child.material.wireframe = wireframe;
        }
      }
    });
  }, [scene, color, wireframe]);

  return <primitive object={scene} />;
}

function CarModelAbstract({ color, wireframe }: CarModelProps) {
  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    wireframe: wireframe,
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* Main Body */}
      <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
        <boxGeometry args={[1.8, 0.6, 4.2]} />
        <primitive object={material} />
      </mesh>

      {/* Cabin */}
      <mesh castShadow receiveShadow position={[0, 0.85, -0.2]}>
        <boxGeometry args={[1.4, 0.4, 2.0]} />
        <primitive object={material} />
      </mesh>

      {/* Wheels */}
      {[
        [-0.9, 0.2, 1.4],
        [0.9, 0.2, 1.4],
        [-0.9, 0.2, -1.4],
        [0.9, 0.2, -1.4],
      ].map((pos, i) => (
        <mesh
          key={i}
          castShadow
          position={new THREE.Vector3(...pos)}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
          <meshStandardMaterial color="#111" metalness={0.8} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function CarModel(props: CarModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <group
      ref={groupRef}
      position={[0, -0.5, 0]}
      scale={1.2}
      rotation={[0, -Math.PI / 4, 0]}
    >
      <ErrorBoundary fallback={<CarModelAbstract {...props} />}>
        <CarModelGLTF {...props} />
      </ErrorBoundary>
    </group>
  );
}

useGLTF.preload("/mustang-shelby-gt500.glb");
