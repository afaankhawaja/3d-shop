import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import type { Object3D } from "three";
import { HandPlatter } from "lucide-react";

interface Props {
  modelUrl: string;
}
function Model({ modelUrl }: Props) {
  const modelRef = useRef<Object3D>(null);
  const gltf = useLoader(GLTFLoader, modelUrl);
  return <primitive ref={modelRef} object={gltf.scene} />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

export default function ARScene({ modelUrl }: Props) {
  const store = createXRStore();

  return (
    <>
      <button
        onClick={() => store.enterAR()}
        className="w-fit flex px-3 ml-5 justify-center gap-2 mt-2 bg-[#493628] text-[#E4E0E1] py-3 rounded-xl font-semibold hover:bg-[#AB886D] hover:shadow-xl transition-colors duration-200"
      >
        <span>Enter AR</span> <HandPlatter />
      </button>

      <Canvas>
        <Suspense fallback={<>Loading ...</>}>
          <XR store={store}>
            <ambientLight />
            <directionalLight position={[0, 5, 5]} />
            <Suspense fallback={<Loader />}>
              <Model modelUrl={modelUrl} />
            </Suspense>
          </XR>
        </Suspense>
      </Canvas>
    </>
  );
}
