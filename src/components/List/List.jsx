import { useEffect, useState } from "react";
import ListCard from "./ListCard";

const List = ({imageUrl}) => {
  console.log(imageUrl);
  
  const [imgChange, setImgChange] = useState(imageUrl); // Initialize imgChange with imgUrl

  useEffect(() => {
    setImgChange(imageUrl); // Update imgChange whenever imgUrl changes
  }, [imageUrl]);

  return (
    <div className="flex flex-col w-full h-[900px] bg-red-400">
      {/* <ListCard/> */}
      <div className="flex w-full h-[300px]">
        <img src={imgChange} className="rounded-3xl" alt="" srcset="" width={"400px"} height={"100px"} />
      </div>
    </div>
  );
};

export default List;