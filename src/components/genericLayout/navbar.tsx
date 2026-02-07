import icon from "/src/assets/navigator.png";

type NavbarProps = {
  onToggleSideBar: () => void;
  showSideBar: boolean;
};

const Navbar = ({ onToggleSideBar, showSideBar }: NavbarProps) => {
  return (
    <nav className=" p-7 hidden md:block -mt-2">
      <div className="grid grid-cols-2 mx-auto max-w-7xl justify-between items-center">
        <div className="justify-self-start">
          {" "}
          {!showSideBar && (
            <button onClick={onToggleSideBar}>
              <img src={icon} alt="img" />
            </button>
          )}
        </div>
        <div className="justify-self-end">
          <button className="bg-[#1B1EE4] hover:bg-[#FFB85A] hover:border-[#FFB85A]  hover:text-white w-62.25 text-white  text-xl px-4 py-2 rounded-3xl  cursor-pointer border border-[#1B1EE4]">
            LET'S HELP YOU BUILD
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
