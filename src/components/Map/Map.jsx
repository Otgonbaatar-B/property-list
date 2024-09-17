"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map({ lat, lng }) {
  console.log("lat", lat, "lng", lng);

  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: lat || 47.919318117184076, 
        lng: lng || 106.91747021903974,
      };

      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      if (mapRef.current && !mapInstance.current) {
        mapInstance.current = new Map(mapRef.current, mapOptions);
        
        new Marker({
          position: position,
          map: mapInstance.current,
          title: "Initial Marker",
        });
      }
    };

    initMap();
  }, []);

  useEffect(() => {
    if (mapInstance.current && lat && lng) {
      mapInstance.current.setCenter({ lat, lng });

      new window.google.maps.Marker({
        position: { lat, lng },
        map: mapInstance.current,
        title: "New Marker",
      });
    }
  }, [lat, lng]);

  return <div ref={mapRef} className="w-[800px] h-[900px]"></div>;
}
