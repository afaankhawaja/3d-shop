import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import SceneContent from "./SceneContent";

interface Props {
  modelUrl: string;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

const Scene = ({ modelUrl }: Props) => {
  const [materialNames, setMaterialNames] = useState<string[]>([]);
  const [colorMap, setColorMap] = useState<Record<string, string>>({});
  const handleColorChange = (material: string, color: string) => {
    setColorMap((prev) => ({ ...prev, [material]: color }));
  };
  return (
    <>
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
            <SceneContent
              modelUrl={modelUrl}
              colorMap={colorMap}
              onMaterialsLoaded={setMaterialNames}
            />

            <OrbitControls
              target={[0, 0, 0]}
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute z-50 pl-3 overflow-scroll max-h-[300px] my-auto content-center justify-center mt-[60px] space-y-5">
        {materialNames.map((name) => (
          <div
            key={name}
            className="border-1 border-b-blue-100 py-3 rounded-xl max-w-32 max-h-20 flex flex-col gap-4"
          >
            <label className="text-center text-[13px]">{name}</label>
            <input
              type="color"
              className="max-w-32 h-20"
              value={colorMap[name] || "#000343"}
              onChange={(e) => handleColorChange(name, e.target.value)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Scene;
