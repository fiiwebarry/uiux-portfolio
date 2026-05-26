import { GiHamburgerMenu } from "react-icons/gi";
import icon from "/src/assets/generic-logo.png";
import { BsMenuButtonWide } from "react-icons/bs";

type NavbarProps = {
  onToggleSideBar: () => void;
  showSideBar: boolean;
  /** Optional Tailwind classes to style the navbar background */
  backgroundClass?: string;
};

const GenericNavbar = ({
  onToggleSideBar,
  showSideBar,
  backgroundClass = "",
}: NavbarProps) => {
  return (
    <nav className={`sticky md:p-7 top-0 z-50  md:-mt-2 ${backgroundClass}`}>
      <div className="md:grid hidden grid-cols-2 mx-auto max-w-7xl justify-between items-center">
        <div className="justify-self-start">
          {" "}
          {!showSideBar && (
            <button className="cursor-pointer" onClick={onToggleSideBar}>
              <BsMenuButtonWide className="text-white text-4xl" />
            </button>
          )}
        </div>
        <div className="justify-self-end md:block hidden">
          <button className="bg-[#1B1EE4] font-playfair hover:bg-[#FFB85A] hover:border-[#FFB85A]  hover:text-white  text-white  text-lg px-8 py-2 rounded-3xl  cursor-pointer border border-[#1B1EE4]">
            LET'S HELP YOU BUILD
          </button>
        </div>
      </div>
      <div className="md:hidden bg-white py-6 px-5 grid grid-flow-col  items-center  gap-5 justify-between text-black ">
        <BsMenuButtonWide className="text-black  text-4xl" />
        <p className="bg-[#1B1EE4] font-playfair hover:bg-[#FFB85A] hover:border-[#FFB85A]  hover:text-white  text-white  text-sm px-8 py-2 rounded-xl  cursor-pointer border border-[#1B1EE4]">
          LET'S HELP YOU BUILD
        </p>
      </div>
    </nav>
  );
};

export default GenericNavbar;
