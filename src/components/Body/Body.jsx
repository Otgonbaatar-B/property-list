import List from "../List/List";
import { Map } from "../Map/Map";

const Body = () => {
  return (
    <div className="flex w-full h-full border border-red-500 bg-[#D3D3D3]">
      <List />
      <Map />
    </div>
  );
};

export default Body;
