import { FaBehance, FaDribbble } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { TbMailFilled } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";

const footer = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#010208_16.39%,#010206_20.51%,#040008_24.79%,#010101_30.46%,#010101_34.11%,#010101_36.21%,#010101_100%)] py-10">
      <div className="grid md:p-0 p-4 justify-items-center gap-5">
        <div className="grid grid-flow-col items-center gap-3">
          <HiLocationMarker className="text-[#FFB85A]" />
          <p className="text-[#FFFFFF] font-bold text-xs">
            CREATE WITH UX SPECIALISTS WHO CARE
          </p>
        </div>
        <p className="text-[#E3E4E68C] font-light md:text-6xl">
          Get <span className="font-semibold text-[#E3E4E6]">in Touch.</span>
        </p>
        <p className="text-[#E3E4E6]">So that we can talk more about...</p>
        <div className="grid md:grid-flow-col md:gap-10 gap-2">
          <button className="bg-[#FFFFFF] px-8 cursor-pointer rounded-3xl md:py-3">
            Schedule a call
          </button>
          <button className="bg-[#121514] text-white cursor-pointer  px-8 border border-[#FFFFFF] rounded-3xl py-3">
            Drop a message
          </button>
        </div>
        <hr className="text-[#3D3D3D] w-[70%]" />
        <div className="grid md:grid-flow-col gap-4 text-[#FFFFFF]">
          <p>HOME</p>
          <p>ABOUT ME</p>
          <p>SERVICES</p>
          <p>CASE STUDIES</p>
          <p>BLOGS</p>
          <p>CONTACT</p>
        </div>

        <div className="grid grid-flow-col items-center gap-8 text-4xl text-[#E3E4E68C]">
          <TbMailFilled />
          <FaBehance />
          <FaDribbble />
          <TfiLinkedin />
        </div>
        <p className="text-[#FFFFFF]">Made with ❣️ by FIIWE BARRY</p>
      </div>
    </section>
  );
};

export default footer;
