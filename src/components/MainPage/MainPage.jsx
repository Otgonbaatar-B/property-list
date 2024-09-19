"use client"
import { useEffect, useState } from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
const MainPage = () => {
 const [districtOptions, setDistrictOptions] = useState([]);
 const [filterCity, setFilterCity] = useState([]);
 const fetchData = async () => {
   try {
     const response = await fetch("http://localhost:3000/api/districts");
     const data = await response.json();
     const filterCityOptions = data.properties.map((property) => ({
       value: property.id,
       label: property.City,
       lat: property.lat,
       lng: property.long,
       title: property.title,
       imageUrl: property.imageUrl
     }));
     setDistrictOptions(filterCityOptions);
   } catch (error) {
     console.error("Error:", error);
   }
 };
 const handleSelectCityChange = (selectedOptions) => {
   const newSelectedLocations = selectedOptions.map((selectedOption) => ({
     lat: parseFloat(selectedOption.lat),
     lng: parseFloat(selectedOption.lng),
     title: selectedOption.title,
     imageUrl: selectedOption.imageUrl
   }));
   setFilterCity(newSelectedLocations);
 };
 useEffect(() => {
   fetchData();
 }, []);
 return (
<div className="container flex flex-col max-w-[1366px] max-h-[1024px]">
<Header districtOptions={districtOptions} handleSelectChange={handleSelectCityChange} />
<Body selectedLocation={filterCity} />
</div>
 );
};
export default MainPage;