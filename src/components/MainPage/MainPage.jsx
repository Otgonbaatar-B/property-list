"use client"

import { useEffect, useState } from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";

const MainPage = () => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null)
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/districts");
      const data = await response.json();
      const options = data.properties.map((property) => ({
        value: property.id,
        label: property.title,
        // label: property.City,
        lat: property.lat,
        lng: property.long, 
        title: property.title, 
        imageUrl: property.imageUrl
      }));
      setDistrictOptions(options);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectChange = (selectedOptions) => {
    {selectedOptions.map((selectedOption) => {
      if (selectedOption) {
        setSelectedLocation({
          lat: parseFloat(selectedOption.lat),
          lng: parseFloat(selectedOption.lng),
          title: selectedOption.title,
          imageUrl: selectedOption.imageUrl
        });
        
      }
    })}
  };

// google.maps.event.addListener(newMarker, "click" (function(newMarker, i){
//   return function(){
//     infowindow.setContent('<h3>' + districtOptions.title + '</h3>');
//     infowindow.open(map, newMarker)
//   }
// }))

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container flex flex-col max-w-[1366px] max-h-[1024px]">
      <Header districtOptions={districtOptions} handleSelectChange={handleSelectChange} />
      <Body selectedLocation={selectedLocation} />
    </div>
  );
};

export default MainPage;
