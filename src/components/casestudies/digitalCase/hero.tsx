import { FaLongArrowAltLeft } from "react-icons/fa";
import icon from "/src/assets/digital.png";
import { Link } from "react-router-dom";
import { PRODUCT_DETAILS_SCHEMA } from "../../../utils/constants";

const Hero = () => {
  return (
    <section className="bg-[#111827]  py-20 md:-mx-6 -mx-5 p-7 md:-mt-4">
      <div className="">
        <div className=" grid grid-flow-col justify-between items-center md:max-w-7xl mx-auto ">
          <Link
            to="/casestudy"
            className="text-white grid grid-flow-col w-max gap-5 items-center"
          >
            <FaLongArrowAltLeft />
            <p className="text-white text-xl"> Back to projects</p>
          </Link>
          <div className="grid grid-flow-col w-max gap-1 items-center md:mb-5">
            <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
            <p className="text-white text-xl">
              <span className="text-[#6B7280]">Case Studies </span>/ Product
              Details
            </p>
          </div>
        </div>
        <div className="md:max-w-7xl grid md:grid-flow-col mt-8 gap-4 mx-auto">
          <div>
            <p className="text-white md:text-7xl md:w-9/12">
              Reimagining digital solutions for the modern engineer
            </p>
            <p className="text-[#D1D5DB] mt-4 md:w-9/12">
              IncQuery Labs offers tailored solutions for the automated digital
              engineering experience throughout the whole engineering process.
            </p>
          </div>
          <div>
            <img src={icon} alt="icon" />
          </div>
        </div>
        <div className="grid grid-flow-col mt-9 mx-auto">
          {PRODUCT_DETAILS_SCHEMA.map((r, i) => {
            return (
              <div key={i} className="border-white text-center  border-r-2 ">
                <img className="grid mx-auto" src={r.image} alt={r.slug} />
                <p className="text-white mt-2">{r.slug}</p>
                <p className="text-[#D1D5DB] mt-2">{r.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
