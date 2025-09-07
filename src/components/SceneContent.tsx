import { useRef, useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3, Object3D, PerspectiveCamera, Material } from "three";

interface Props {
  modelUrl: string;
  colorMap?: Record<string, string>;
  onMaterialsLoaded?: (materialNames: string[]) => void;
}

const SceneContent = ({
  modelUrl,
  colorMap = {},
  onMaterialsLoaded,
}: Props) => {
  const { scene, materials } = useGLTF(modelUrl);
  const modelRef = useRef<Object3D>(null);
  const { camera } = useThree();

  const materialNames = useMemo(() => Object.keys(materials), [materials]);
  useEffect(() => {
    if (onMaterialsLoaded && materialNames.length > 0) {
      onMaterialsLoaded(materialNames);
    }
    if (Object.keys(colorMap).length > 0) {
      Object.entries(colorMap).forEach(([name, color]) => {
        const material = materials[name] as Material & {
          color?: { set: (color: string) => void };
        };
        if (material && material.color) {
          material.color.set(color);
          material.needsUpdate = true;
        }
      });
    }

    const box = new Box3().setFromObject(scene);
    const size = box.getSize(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const desiredMaxDim = 2;
    const scaleFactor = desiredMaxDim / maxDim;
    scene.scale.setScalar(scaleFactor);

    const scaledBox = new Box3().setFromObject(scene);
    const scaledCenter = scaledBox.getCenter(new Vector3());
    const scaledSize = scaledBox.getSize(new Vector3());

    scene.position.sub(scaledCenter);

    const fov = (camera as PerspectiveCamera).fov * (Math.PI / 180);
    const modelRadius = scaledSize.length() / 2;
    const distance = modelRadius / Math.sin(fov / 2);

    camera.position.set(0, 0, distance * 1.2);
    (camera as PerspectiveCamera).updateProjectionMatrix();
  }, [scene, camera, colorMap, materialNames, onMaterialsLoaded, materials]);

  return <primitive ref={modelRef} object={scene} />;
};

export default SceneContent;
