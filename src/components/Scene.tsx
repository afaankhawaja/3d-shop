import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Box3, Vector3, PerspectiveCamera, Object3D } from "three";

interface Props {
  modelUrl: string;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

const SceneContent = ({ modelUrl }: Props) => {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const modelRef = useRef<Object3D>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (!gltf.scene) return;

    const box = new Box3().setFromObject(gltf.scene);
    const size = box.getSize(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const desiredMaxDim = 2;
    const scaleFactor = desiredMaxDim / maxDim;
    gltf.scene.scale.setScalar(scaleFactor);

    // Recompute box after scaling
    const scaledBox = new Box3().setFromObject(gltf.scene);
    const scaledCenter = scaledBox.getCenter(new Vector3());
    const scaledSize = scaledBox.getSize(new Vector3());

    gltf.scene.position.sub(scaledCenter);

    // --- Adjust Camera Distance ---
    const fov = (camera as PerspectiveCamera).fov * (Math.PI / 180);
    const modelRadius = scaledSize.length() / 2;
    const distance = modelRadius / Math.sin(fov / 2);

    camera.position.set(0, 0, distance * 1.2);
    (camera as PerspectiveCamera).updateProjectionMatrix();
  }, [gltf, camera]);

  return <primitive ref={modelRef} object={gltf.scene} />;
};

const Scene = ({ modelUrl }: Props) => {
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
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
        camera={{ fov: 50, position: [0, 0, 5] }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[-1.3, 6.0, 4.4]}
            castShadow
            intensity={1}
          />
          <SceneContent modelUrl={modelUrl} />

          <OrbitControls
            target={[0, 0, 0]}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
