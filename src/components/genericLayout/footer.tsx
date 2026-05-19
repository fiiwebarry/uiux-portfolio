import { FaBehance } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { TfiLinkedin } from "react-icons/tfi";
import { FOOTER_SCHEMA } from "../../utils/constants";
import { Link } from "react-router-dom";
import CalendlyButton from "../button/popupbtn";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

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
        <div className="grid md:grid-flow-col  md:gap-10 gap-4">
          <button className="bg-[#FFFFFF] hover:bg-[#FFB85A] hover:text-white px-8 cursor-pointer rounded-3xl py-3">
            <CalendlyButton />
          </button>
          <button className="bg-[#121514] text-white cursor-pointer hover:bg-[#3D3D3D] hover:border-[#3D3D3D]  px-8 border border-[#FFFFFF] rounded-3xl py-3">
            Drop a message
          </button>
        </div>
        <hr className="text-[#3D3D3D] w-[70%]" />
        <div className="grid md:grid-flow-col gap-4 md:text-xl text-sm text-[#FFFFFF]">
          {FOOTER_SCHEMA.map((r, i) => {
            return (
              <Link key={i} to={r.href}>
                {r.slug}
              </Link>
            );
          })}
        </div>

        <div className="grid grid-flow-col md:mt-6 items-center md:gap-20 gap-10 text-4xl text-[#E3E4E68C]">
          <a
            href="https://www.instagram.com/sir_benumoh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.behance.net/bennyumoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>

          <a
            href="https://x.com/Sir_BenUmoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="w-7 h-7" />
          </a>

          <a
            href="https://www.linkedin.com/in/bennyumoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiLinkedin />
          </a>
        </div>
        <p className="text-[#FFB85A] md:mt-6">Crafed by FIIWE BARRY</p>
      </div>
    </section>
  );
};

export default footer;
