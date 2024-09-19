import { StarIcon } from "../Icons/StarIcon";

const ListCard = ({
  imageUrl,
  title,
  star,
  type,
  bedrooms,
  bathrooms,
  amenities,
}) => {
  return (
    <div className="flex flex-col w-full h-auto bg-white rounded-2xl p-3 gap-5">
      <div className="flex w-auto h-[215px] rounded-2xl shadow-md p-3">
        <div
          className="w-[248px] h-auto"
          style={{
            backgroundImage: `url(${imageUrl || ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "16px",
          }}
        ></div>
        <div className="flex flex-col w-[248px] h-full pl-4 gap-5">
          <h3 className="text-[#3E4958] text-xl">{title || "No title"}</h3>
          <div className="flex gap-5">
            <div className="flex gap-1 items-center">
              <StarIcon /> <h1 className="text-[#3E4958]">{star || 0}</h1>
            </div>
            <div className="text-black">{amenities || "No amenitie"}</div>
          </div>
          <div className="flex gap-2">
            <h1 className="text-[#3E4958]">{bedrooms || 0 + " bedroom"}</h1> |
            <h1 className="text-[#3E4958]">{bathrooms || 0 + " bathroom"}</h1>
          </div>
          <div className="text-[#3E4958]">{type || "No Type"}</div>
        </div>
      </div>
    </div>
  );
};
export default ListCard;
