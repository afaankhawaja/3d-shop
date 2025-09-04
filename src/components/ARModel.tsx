//@ts-nocheck
import React, { useRef, useEffect } from "react";

const ARModel = ({ modelUrl }) => {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleARClick = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.activateAR();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <model-viewer
        ref={modelViewerRef}
        src={`${modelUrl}`}
        alt="A 3D model of an astronaut"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="https://modelviewer.dev/shared-assets/models/Astronaut.webp"
        shadow-intensity="1"
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <button
          slot="ar-button"
          onClick={handleARClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
        >
          👆 View in AR
        </button>

        <div className="progress-bar" slot="progress-bar">
          <div className="update-bar bg-blue-500 h-2 rounded transition-all duration-300"></div>
        </div>
      </model-viewer>
    </div>
  );
};

export default ARModel;
