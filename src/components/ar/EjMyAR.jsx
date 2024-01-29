import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./model.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};

export default function EjMyAR() {
  return (
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
  );
}
