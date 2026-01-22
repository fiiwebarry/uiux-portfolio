import { IoCloseOutline } from "react-icons/io5";
import icon from "/src/assets/user.png";
import { Link } from "react-router-dom";

type SideBarProps = {
  onToggleSideBar: () => void;
};

const Sidebar = ({ onToggleSideBar }: SideBarProps) => {
  return (
    <aside className="bg-[#1F1F1F] w-65.75">
      <div className="p-5">
        <div className="grid grid-flow-col justify-between">
          <img className="" src={icon} alt="user" />
          <IoCloseOutline
            onClick={onToggleSideBar}
            className="text-white w-8 h-8"
          />
        </div>
        <div className="grid gap-8 text-white pt-32">
          <p>HOME</p>
          <p>ABOUT ME</p>
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
    </aside>
  );
};

export default Sidebar;
