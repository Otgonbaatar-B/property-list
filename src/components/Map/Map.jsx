"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map({ selectedLocation }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstances = useRef([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });
      const { Map, InfoWindow } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const mapOptions = {
        center: { lat: 35.52942047350689, lng: -97.47191031062086 }, // Initial center
        zoom: 4,
        mapId: "MY_NEXTJS_MAPID",
      };

      if (mapRef.current && !mapInstance.current) {
        mapInstance.current = new Map(mapRef.current, mapOptions);
      }

      if (mapInstance.current) {
        markerInstances.current.forEach((marker) => marker.setMap(null));
        markerInstances.current = [];

        selectedLocation.forEach((location) => {
          const { lat, lng, title } = location;

          const marker = new Marker({
            position: { lat, lng },
            map: mapInstance.current,
          });

          const contentString = `<div class=" flex justify-start items-start text-black p-2 mt-0">${title}</div>`;
          const infoWindow = new InfoWindow({
            content: contentString,
          });

          marker.addListener("click", () => {
            infoWindow.open(mapInstance.current, marker);
          });

          mapInstance.current.setCenter({ lat, lng });
          mapInstance.current.setZoom(14);

          markerInstances.current.push(marker);
        });
      }
    };

    initMap();
  }, [selectedLocation]);

  return <div ref={mapRef} className="w-[1900px] h-[900px]"></div>;
}
