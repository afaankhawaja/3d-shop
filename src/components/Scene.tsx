import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface Props {
  modelUrl: string;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

const Scene = ({ modelUrl }: Props) => {
  const gltf = useLoader(GLTFLoader, modelUrl);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        position: "relative",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Suspense fallback={<Loader />}>
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
          camera={{ fov: 50 }}
          shadows
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[-1.3, 6.0, 4.4]}
            castShadow
            intensity={1}
          />
          <primitive
            object={gltf.scene}
            position={[0, -5, 0]}
            scale={[1, 1, 1]}
          />

          <OrbitControls
            target={[0, 0, 0]}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene;
