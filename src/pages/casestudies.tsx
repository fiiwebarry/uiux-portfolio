import { PRODUCT_SCHEMA, PROJECT_SCHEMA } from "../utils/constants";
import Transform from "../components/reusable/transform";

const CaseStudy = () => {
  return (
    <section className="p-5 md:p-0">
      <div className=" md:max-w-7xl mx-auto">
        <div className="grid grid-flow-col w-max gap-1 items-center md:mb-10">
          <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
          <p className="text-[#1F1F1F] text-xl">Case Studies</p>
        </div>
      </div>

      {/* hero section */}
      <div className="grid py-10 md:max-w-7xl md:mx-auto gap-5 justify-items-center">
        <p className="  border border-[#EBF2FF] py-3 px-6 rounded-3xl bg-[#EBF2FF] text-[#1B1EE4]">
          {" "}
          Hand-picked highlights
        </p>
        <p className="text-center text-[#1F1F1F] md:w-1/2 md:text-6xl">
          Discover Amazing Products
        </p>
        <p className="text-center md:w-1/2 md:text-2xl text-[#1F2937]">
          Explore our carefully curated collection of powerful features designed
          to elevate your experience
        </p>
      </div>

      {/* product */}
      <div className="grid md:grid-cols-2 gap-9 md:max-w-7xl py-10  md:mx-auto">
        {PRODUCT_SCHEMA.map((r, i) => {
          return (
            <div key={i} className="grid gap-5 ">
              <span className="bg-[#F0F4F9] rounded-3xl">
                <img src={r.image} alt="icon" />
              </span>
              <div className="grid grid-flow-col items-center w-max gap-3">
                <p className="bg-[#1B1EE4]  text-white border border-[#1B1EE4] rounded-3xl py-3 px-5 md:px-7">
                  {r.slug}
                </p>
                <p className="text-[#FF6C63] border border-[#FF6C63] rounded-3xl py-3  px-5 md:px-7">
                  {r.header}
                </p>
              </div>
              <p className="text-[#1F1F1F] mt-4 text-xl">{r.content}</p>
            </div>
          );
        })}
      </div>

      {/* ready to transform */}
      <Transform />

      {/* PROJECT */}
      <div className="grid md:grid-cols-2 gap-9 md:max-w-7xl py-10  md:mx-auto">
        {PROJECT_SCHEMA.map((r, i) => {
          return (
            <div key={i} className="grid gap-5 ">
              <span className="bg-[#F0F4F9] rounded-3xl">
                <img src={r.image} alt="icon" />
              </span>
              <div className="grid grid-flow-col items-center w-max gap-3">
                <p className="bg-[#1B1EE4]  text-white border border-[#1B1EE4] rounded-3xl py-3 px-5 md:px-7">
                  {r.slug}
                </p>
                <p className="text-[#FF6C63] border border-[#FF6C63] rounded-3xl py-3  px-5 md:px-7">
                  {r.header}
                </p>
              </div>
              <p className="text-[#1F1F1F] mt-4 text-xl">{r.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudy;
