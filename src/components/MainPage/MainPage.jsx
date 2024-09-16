import Body from "../Body/Body";
import Header from "../Header/Header";

const MainPage = () => {
  return (
    <div className="container flex flex-col max-w-[1280px] max-h-[1024px] border border-gray-950">
      <Header />
      <Body />
    </div>
  );
};

export default MainPage;
