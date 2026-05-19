import { Link } from "react-router-dom";
import { PRODUCT_SCHEMA } from "../../../utils/constants";

const Projects = () => {
  return (
    <section className="md:py-20 py-10">
      <div className="grid py-10 md:max-w-7xl md:mx-auto gap-5 justify-items-center md:p-0 p-3">
        <p className="  border border-[#EBF2FF] py-3 px-6 rounded-3xl bg-[#EBF2FF] text-[#1B1EE4]">
          {" "}
          More Hand-picked highlights
        </p>
        <p className="text-center text-[#1F1F1F] md:w-1/2 md:text-6xl">
          Get inspired
        </p>
        <p className="text-center md:w-9/12 md:text-2xl text-[#1F2937]">
          A selection of projects that demonstrate how user-centered design
          solved real problems and delivered measurable results.
        </p>
      </div>
      {/* product */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-14 mt-8 md:max-w-7xl md:mx-auto">
        {PRODUCT_SCHEMA.map((r, i) => {
          return (
            <Link
              key={i}
              to={r.href}
              className=" grid items-center cursor-pointer transition-transform  mx-auto duration-300 ease-in-out hover:scale-105"
            >
              <div className="bg-[#F0F4F9] rounded-3xl">
                <span className="grid justify-center md:p-0 p-3 mx-auto mt-20 ">
                  <img
                    className="  transition-transform  mx-auto duration-300 ease-in-out hover:scale-95"
                    src={r.image}
                    alt="icon"
                  />
                </span>
              </div>
              <div className="grid grid-flow-col mt-6 items-center w-max gap-3">
                <p className="bg-[#1B1EE4]  text-white border border-[#1B1EE4] rounded-3xl py-3 px-5 md:px-7">
                  {r.slug}
                </p>
                <p className="text-[#FF6C63]   border border-[#FF6C63] rounded-3xl py-3  px-5 md:px-7">
                  {r.header}
                </p>
              </div>
              <div className="h-20">
                <p className="text-[#1F1F1F] mt-4 md:text-xl">{r.content}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="grid justify-items-center md:mt-6 md:mb-4">
        <Link
          to="/casestudies"
          className="bg-[#1B1EE4] hover:bg-[#FFB85A] hover:border-[#FFB85A] border text-white px-9 py-3 rounded-3xl border-[#1B1EE4]"
        >
          SEE MORE CASE STUDIES
        </Link>
      </div>
    </section>
  );
};

export default Projects;
