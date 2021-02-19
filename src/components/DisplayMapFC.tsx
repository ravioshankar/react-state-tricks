import React, { useLayoutEffect } from "react";
import {ApiKey} from '../environment/environment.local'

export function DisplayMapFc() {
  const mapRef = React.useRef(null);

  useLayoutEffect(() => {
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: {ApiKey}
    });

    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });
    // @ts-ignore
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    // @ts-ignore

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);
    return () => {
        hMap.dispose();
      };
  }, [mapRef]);
  return <div className="map" ref={mapRef} style={{ height: "100vh" }} />;
};
