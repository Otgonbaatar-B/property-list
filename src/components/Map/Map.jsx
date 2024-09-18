"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map({ lat, lng, title }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);
  console.log("Title:", title);
  const contentString =
        `<div class="text-black">${title}</div>`
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

        markerInstance.current = new Marker({
          position: position,
          map: mapInstance.current,
          // title: "Initial Marker",
        });
        
        // const infowindow = new google.maps.InfoWindow({
        //   content: contentString,
        //   ariaLabel: "Uluru",
        // });
        
        function addInfoWindow(marker, message) {

          const infoWindow = new google.maps.InfoWindow({
              content: message
          });

          google.maps.event.addListener(marker, 'click', function () {
              infoWindow.open(mapInstance.current, markerInstance.current);
          });
      }
      addInfoWindow(markerInstance.current, contentString);

        // markerInstance.current.addListener("click", () => {
        //   infowindow.open(mapInstance.current, markerInstance.current);
        // });
      }
    };

    initMap();
  }, []);

  useEffect(() => {
    if (mapInstance.current && lat && lng) {
      const newPosition = { lat, lng };
      mapInstance.current.setCenter(newPosition);

      if (markerInstance.current) {
        markerInstance.current.setPosition(newPosition);
      } else {
        markerInstance.current = new google.maps.Marker({
          position: newPosition,
          map: mapInstance.current,
          // title: "New Marker",
        });
      }
    }
  }, [lat, lng]);

  return <div ref={mapRef} className="w-[1900px] h-[900px]"></div>;
}
