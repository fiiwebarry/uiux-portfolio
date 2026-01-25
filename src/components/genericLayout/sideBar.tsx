import { IoCloseOutline } from "react-icons/io5";
import icon from "/src/assets/user.png";
import { Link } from "react-router-dom";

type SideBarProps = {
  onToggleSideBar: () => void;
};

const Sidebar = ({ onToggleSideBar }: SideBarProps) => {
  return (
    <aside
      //   onClick={onToggleSideBar}
      className="bg-[#1F1F1F] min-h-screen w-65.75"
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
        <div className="grid gap-8 text-white pt-32">
          <p>HOME</p>
          <Link to="/about">
            <p>ABOUT ME</p>
          </Link>
          <p>SERVICES</p>
          <Link to="/casestudy">
            <p>CASE STUDIES</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT</p>
          </Link>

          <p>BLOG</p>
        </div>
      </div>

      {/* <div className="fixed p-5">
      
      </div> */}
    </aside>
  );
};

export default Sidebar;
