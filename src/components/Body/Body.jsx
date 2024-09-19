import List from "../List/List";
import { Map } from "../Map/Map";

const Body = ({ selectedLocation }) => {
  // Remove duplicate city names
  // const uniqueCities = Array.from(
  //   new Set(selectedLocation.map((location) => location.City))
  // );

  return (
    <div className="flex w-full h-screen border rounded-b-3xl bg-white p-10">
      <List
        // cityName={uniqueCities}
        // imageUrl={selectedLocation?.imageUrl}
        // title={selectedLocation?.title}
        // star={selectedLocation?.star}
        // type={selectedLocation?.type}
        // bedrooms={selectedLocation?.bedrooms}
        // bathrooms={selectedLocation?.bathrooms}
        // amenities={selectedLocation?.amenities}
        selectedLocation={selectedLocation}
      />
      <Map selectedLocation={selectedLocation} />
    </div>
  );
};

export default Body;
