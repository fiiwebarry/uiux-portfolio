import icon from "/src/assets/generic-logo.png";

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
    <nav
      className={`sticky p-7 top-0 z-50 hidden md:block -mt-2 ${backgroundClass}`}
    >
      <div className="grid grid-cols-2 mx-auto max-w-7xl justify-between items-center">
        <div className="justify-self-start">
          {" "}
          {!showSideBar && (
            <button className="cursor-pointer" onClick={onToggleSideBar}>
              <img src={icon} alt="img" />
            </button>
          )}
        </div>
        <div className="justify-self-end">
          <button className="bg-[#1B1EE4] font-playfair hover:bg-[#FFB85A] hover:border-[#FFB85A]  hover:text-white  text-white  text-xl px-8 py-2 rounded-3xl  cursor-pointer border border-[#1B1EE4]">
            LET'S HELP YOU BUILD
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GenericNavbar;
