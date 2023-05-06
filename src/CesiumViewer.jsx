import React, { useEffect, useRef } from 'react';
import { Viewer as CesiumViewer, UrlTemplateImageryProvider, CesiumTerrainProvider } from "cesium";

function MapViewer() {
  const mapElement = useRef();

  useEffect(() => {
    const Viewer = new CesiumViewer(mapElement.current, {
        imageryProvider: new UrlTemplateImageryProvider({
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          maximumLevel: 25,
          hasAlphaChannel: false,
          enablePickFeatures: false
        }),
        baseLayerPicker: false,
        geocoder: false,
        animation: false,
        timeline: false,
        fullscreenButton: false,
        vrButton: false,
        homeButton: false,
        sceneModePicker: false,
        selectionIndicator: false,
        infoBox: false,
        navigationHelpButton: false,
        showToolbar: false
    });
  }, []);

  return (
    <div ref={mapElement} className="ak-w-full ak-h-screen" id="map" />
  );
}

export default MapViewer;
