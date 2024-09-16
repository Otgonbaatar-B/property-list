"use client";
import Select from "react-select";
import { Logo } from "../Icons/Logo";
import { useEffect, useState } from "react";

const Header = () => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/districts");
      const data = await response.json();

      const options = Object.keys(data).map((district) => ({
        value: district,
        label: district,
      }));

      setDistrictOptions(options);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
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
        />
      </div>
    </div>
  );
};

export default Header;
