import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import icon from "/src/assets/sygn.png";

const Hero = () => {
  return (
    <section className="bg-[#F8F8F8] md:-mx-6 ">
      <div className=" grid grid-flow-col justify-between items-center md:max-w-7xl mx-auto ">
        <Link
          to="/casestudy"
          className="text-[#1F1F1F] grid grid-flow-col w-max gap-5 items-center"
        >
          <FaLongArrowAltLeft />
          <p className=" text-xl"> Back to projects</p>
        </Link>
        <div className="grid grid-flow-col w-max gap-1 items-center md:mb-5">
          <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
          <p className="text-[#6B7280] text-xl">
            <span className="text-[#6B7280]">Case Studies </span>/ Product Sigyn
          </p>
        </div>
      </div>
      <p className="text-[#1F1F1F] grid justify-center md:w-9/12 mt-9 mx-auto text-7xl text-center">
        SIGYN: Designing a decentralized survival messaging system for
        offline-first, crisis-ready communication
      </p>
      <p className="text-[#1F2937] grid justify-center mt-6 text-center md:w-7/12 mx-auto italic">
        The system prioritizes essential communication over casual conversation,
        using compressed messages, peer-to-peer relays, and simple visual cues
        to ensure information can move between survivors safely and efficiently.
      </p>
      <span className="grid justify-center">
        <img src={icon} alt="icon" />
      </span>
    </section>
  );
};

export default Hero;
