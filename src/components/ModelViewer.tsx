import { useEffect, useRef } from 'react';
import type { ModelViewerElement } from '@google/model-viewer';
import '@google/model-viewer';

interface Props {
  modelUrl: string;
}

const ModelViewer = ({ modelUrl }: Props) => {
  const viewerRef = useRef<ModelViewerElement>(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (viewer) {
      const handleLoad = () => {
        const center = viewer.getBoundingBoxCenter();
        if (center) {
          viewer.cameraTarget = `${center.x}m ${center.y}m ${center.z}m`;
        }
      };
      viewer.addEventListener('load', handleLoad);
      return () => viewer.removeEventListener('load', handleLoad);
    }
  }, [modelUrl]);

  return (
    <div className="w-full h-full bg-amber-300 relative">
      <model-viewer
        ref={viewerRef}
        src={modelUrl}
        alt="3D Model"
        camera-controls
        touch-action="pan-y"
        auto-rotate
        shadow-intensity="1"
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="auto"
        ar-placement="floor"
        camera-orbit="0deg 75deg 105%"
        field-of-view="30deg"
        min-camera-orbit="auto auto 25%"
        max-camera-orbit="auto auto 200%"
        style={{ width: '100%', height: '100%' }}
      >
        <div className='hidden md:block text-xs text-red-500 ml-5 mt-2 font-bold'>AR view is only availble in Mobile !!!</div>
        <button slot="ar-button" style={{backgroundColor:'ButtonShadow'}} className="ar-button mt-2 ml-5 bg-[#493628] text-[#493628] px-3 py-1 rounded-xl font-semibold">View in AR</button>
      </model-viewer>
    </div>
  );
};

export default ModelViewer;