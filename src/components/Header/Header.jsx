import { Logo } from "../Icons/Logo";

const Header = () => {
  return (
    <div className="flex items-center w-full h-[106px] border p-5 border-green-600">
      <div className="flex items-center gap-6">
        <Logo />
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className="w-[626px] h-[62px] border rounded-lg px-4 outline-none"
        />
      </div>
    </div>
  );
};

export default Header;
