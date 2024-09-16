"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map() {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: 47.91935427569077,
        lng: 106.9174487971952,
      };

      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID", // Make sure you replace "MY_NEXTJS_MAPID" with your actual Map ID
      };

      if (mapRef.current) {
        new Map(mapRef.current, mapOptions);
      }
    };

    initMap();
  }, []);

  return <div ref={mapRef} className="w-[800px] h-[900px]"></div>;
}
