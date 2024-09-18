import List from "../List/List";
import { Map } from "../Map/Map";

const Body = ({ selectedLocation}) => {
  
  return (
    <div className="flex w-full h-full border border-red-500 bg-[#D3D3D3]">
      <List imageUrl={selectedLocation?.imageUrl} />
      <Map lat={selectedLocation?.lat} lng={selectedLocation?.lng} title={selectedLocation?.title}  />
    </div>
  );
};

export default Body;
