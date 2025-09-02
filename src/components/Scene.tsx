import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Box3, Vector3 } from "three";

interface Props {
  modelUrl: string;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

const Scene = ({ modelUrl }: Props) => {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!gltf.scene) return;

    const box = new Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const desiredMaxDim = 2;
    const scaleFactor = desiredMaxDim / maxDim;

    gltf.scene.position.sub(center);

    gltf.scene.scale.setScalar(scaleFactor);

  }, [gltf]);

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
          camera={{ fov: 50, position: [0, 0, 5] }}
          shadows
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[-1.3, 6.0, 4.4]}
            castShadow
            intensity={1}
          />
          <primitive
            ref={modelRef}
            object={gltf.scene}
            position={[0, 0, 0]}
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