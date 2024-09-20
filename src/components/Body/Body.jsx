import List from "../List/List";
import { Map } from "../Map/Map";

const Body = ({ selectedLocation }) => {
  return (
    <div className="flex w-full h-screen border rounded-b-3xl bg-white p-10">
      <List selectedLocation={selectedLocation} />
      <Map selectedLocation={selectedLocation} />
    </div>
  );
};

export default Body;
