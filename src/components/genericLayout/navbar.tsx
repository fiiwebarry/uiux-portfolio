import { useState } from "react";

import { SIDEBAR_SCHEMA } from "../../utils/constants";
import { Link } from "react-router-dom";
import { BsMenuButtonWide } from "react-icons/bs";

type NavbarProps = {
  onToggleSideBar: () => void;
  showSideBar: boolean;
  /** Optional Tailwind classes to style the navbar background */
  backgroundClass?: string;
};

const Navbar = ({
  onToggleSideBar,
  showSideBar,
  backgroundClass,
}: NavbarProps) => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <nav className={`sticky md:p-7 top-0 z-50  md:-mt-2 ${backgroundClass}`}>
        <div className="md:grid hidden grid-cols-2 mx-auto max-w-7xl justify-between items-center">
          <div className="justify-self-start">
            {" "}
            {!showSideBar && (
              <button
                className="cursor-pointer md:block hidden"
                onClick={onToggleSideBar}
              >
                <BsMenuButtonWide className="text-[#1F1F1F] text-4xl" />
              </button>
            )}
          </div>
          <div className="justify-self-end md:block hidden">
            <button className="bg-[#1F1F1F] font-playfair hover:bg-[#FFB85A] hover:border-[#FFB85A]  hover:text-white  text-white  text-lg px-8 py-2 rounded-3xl  cursor-pointer border border-[#1B1EE4]">
              LET'S HELP YOU BUILD
            </button>
          </div>
        </div>
        <div className="md:hidden bg-white py-6 px-5 grid grid-flow-col  items-center  gap-5 justify-between text-[#080821] ">
          <BsMenuButtonWide
            onClick={handleToggleNav}
            className="text-black  text-4xl"
          />
          <p className="bg-[#080821] font-playfair hover:bg-[#FFB85A] hover:border-[#FFB85A]  hover:text-white  text-white  text-sm px-8 py-2 rounded-xl  cursor-pointer border border-[#080821]">
            LET'S HELP YOU BUILD
          </p>
        </div>
      </nav>
      {showNav && (
        <nav className="md:hidden block top-0 fixed p-8 bg-[#1F1F1F] min-h-screen w-full z-50">
          <div className="fixed p-8">
            {}
            <div className=" grid gap-10 text-white pt-6">
              {SIDEBAR_SCHEMA.map((r, i) => {
                const isActive = location.pathname === r.href;
                return (
                  <Link
                    key={i}
                    to={r.href}
                    className="grid grid-flow-col w-max gap-6 items-center md:mb-10"
                  >
                    {isActive && (
                      <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
                    )}
                    <p className="text-white text-xl">{r.slug}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
