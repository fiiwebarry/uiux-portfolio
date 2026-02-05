import { IoCloseOutline } from "react-icons/io5";
import icon from "/src/assets/user.png";
import { Link, useLocation } from "react-router-dom";
import { SIDEBAR_SCHEMA } from "../../utils/constants";

type SideBarProps = {
  onToggleSideBar: () => void;
};

const Sidebar = ({ onToggleSideBar }: SideBarProps) => {
  const location = useLocation();
  return (
    <aside
      //   onClick={onToggleSideBar}
      className="bg-[#1F1F1F] min-h-screen w-65.75 z-50"
    >
      <div className="fixed p-8">
        <div className="grid grid-cols-2 gap-24 justify-between">
          <span>
            <img className="" src={icon} alt="user" />
          </span>
          <div className="grid justify-items-end">
            <IoCloseOutline
              onClick={onToggleSideBar}
              className="text-white w-8 h-8"
            />
          </div>
        </div>
        {}
        <div className=" gap-4 text-white pt-32">
          {SIDEBAR_SCHEMA.map((r, i) => {
            const isActive = location.pathname === r.href;
            return (
              <Link
                key={i}
                to={r.href}
                className="grid grid-flow-col w-max gap-1 items-center md:mb-10"
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
    </aside>
  );
};

export default Sidebar;
