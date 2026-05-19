import { Link } from "react-router-dom";
import { PRODUCT_SCHEMA } from "../utils/constants";
import Transform from "../components/reusable/transform";

const MoreCaseStudies = () => {
  return (
    <section className="md:py-20 py-10">
      <div className="md:max-w-7xl mx-auto px-5">
        <div className="grid grid-flow-col w-max gap-1 items-center md:mb-10">
          <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
          <p className="text-[#1F1F1F] md:text-xl">More Case Studies</p>
        </div>

        <div className="grid gap-5 justify-items-center text-center">
          <p className="text-[#1F1F1F] md:text-6xl font-playfair font-light">
            Explore every project from our featured case studies
          </p>
          <p className="md:w-10/12 md:text-2xl  text-[#1F2937]">
            Browse our full collection of product case studies and discover how
            design created measurable impact across industries.
          </p>
        </div>

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
        <div className="mt-16 ">
          <Transform />
        </div>
      </div>
    </section>
  );
};

export default MoreCaseStudies;
