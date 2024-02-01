import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ARButton, XR } from "@react-three/xr";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./model.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

export default function EjAR3D() {
  return (
      <>
        <ARButton/>
        <Canvas>
            <XR>
              <Model />
              <OrbitControls />
            </XR>
        </Canvas>
      </>
  );
}

