"use client";
import Select from "react-select";
import { Logo } from "../Icons/Logo";
import { useEffect, useState } from "react";
import { Map } from "../Map/Map";

const Header = () => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null)
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/districts");
      const data = await response.json();

      const options = data.properties.map((property) => ({
        value: property.id,
        label: property.title,
        lat: property.lat,
        lng: property.long, 
      }));

      setDistrictOptions(options);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
    
  };

  const handleSelectChange = (selectedOptions) => {
    {selectedOptions.map((selectedOption) => {
      if (selectedOption) {
        setSelectedLocation({
          lat: parseFloat(selectedOption.lat),
          lng: parseFloat(selectedOption.lng),
        });
      }
    })}
    
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  
      
  return (
    <div className="flex items-center w-full h-[106px] p-5">
      <div className="flex items-center gap-6">
        <Logo />
          <Select
          defaultValue={[]}
          isMulti
          name="districts"
          options={districtOptions}
          className="basic-multi-select w-[626px] text-black"
          classNamePrefix="select"
          onChange={handleSelectChange}
        />
      </div>
      <Map lat={selectedLocation?.lat} lng={selectedLocation?.lng} />

    </div>
  );
};

export default Header;
