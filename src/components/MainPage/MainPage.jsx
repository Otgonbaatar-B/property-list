import Body from "../Body/Body";
import Header from "../Header/Header";

const MainPage = () => {
  return (
    <div className="container flex flex-col max-w-[1366px] max-h-[1024px]">
      <Header />
      <Body />
    </div>
  );
};

export default MainPage;
