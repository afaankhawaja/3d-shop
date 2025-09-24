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
  const [selectedTexture, setSelectedTexture] = useState<number>(0);
  const textureImages = [
    "/textures/texture-1.jpg",
    "/textures/texture-2.jpg",
    "/textures/texture-3.jpg",
    "/textures/texture-4.jpg",
  ];
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
              selectedTexture={textureImages[selectedTexture]}
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
      <div className="absolute top-18 right-1/2 translate-x-[50%] z-50 px-3">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#AB886D] scrollbar-track-[#E4E0E1]">
          {materialNames.map((name) => (
            <div
              key={name}
              className="bg-[#E4E0E1] shadow-md rounded-xl flex-shrink-0 w-10 md:w-20 p-2 flex flex-col items-center gap-2 hover:shadow-lg transition"
            >
              <label
                className="text-center text-xs font-medium text-[#493628] truncate w-full"
                title={name}
              >
                {name}
              </label>
              <input
                type="color"
                className="w-full h-8 rounded cursor-pointer border border-[#AB886D]"
                value={colorMap[name] || "#000343"}
                onChange={(e) => handleColorChange(name, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute flex-col  bottom-5 right-1/2 translate-x-[50%] z-50 px-3">
        <p className="text-lg font-semibold text-center">select any texture</p>
        <div className="flex gap-x-3 mt-1 justify-center">
          {textureImages.map((texture, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedTexture(index);
                }}
                className="flex hover:outline-amber-400 hover:outline-2"
              >
                <img src={`${texture}`} alt={texture} className="w-20 h-20" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Scene;
