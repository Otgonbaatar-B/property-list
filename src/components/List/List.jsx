import { Filter } from "../Icons/FilterIcon";
import ListCard from "./ListCard";

const List = ({
  // cityName,
  // imageUrl,
  // title,
  // star,
  // type,
  // bedrooms,
  // bathrooms,
  // amenities,
  selectedLocation,
}) => {
  const uniqueCities = Array.from(
    new Set(selectedLocation.map((location) => location.City))
  );
  // Format city names for display
  const cityNames =
    uniqueCities.length === 1
      ? uniqueCities[0] // Only one city selected
      : uniqueCities.join(", "); // Multiple cities selected, join with commas

  return (
    <div className="flex flex-col w-full h-[900px] pr-8 gap-5">
      <h1 className="text-[#3E4958] text-3xl">
        Stays in {cityNames || "No city selected"}
      </h1>
      <div className="flex w-full h-[50px] justify-between gap-5">
        <button className="btn btn-outline rounded-[30px] px-5">
          Free cancellation
        </button>
        <button className="btn btn-outline rounded-[30px] px-5">Price</button>
        <button className="btn btn-outline rounded-[30px] px-5">
          Instat Book
        </button>
        <div className="flex justify-center items-center">
          <Filter />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-auto overflow-y-auto py-2">
        {selectedLocation.map((data) => {
          return (
            <ListCard
              imageUrl={data?.imageUrl}
              title={data?.title}
              star={data?.star}
              type={data?.type}
              bedrooms={data?.bedrooms}
              bathrooms={data?.bathrooms}
              amenities={data?.amenities}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
