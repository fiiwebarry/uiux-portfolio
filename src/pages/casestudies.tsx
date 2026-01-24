import { FaArrowRightLong } from "react-icons/fa6";
import { PRODUCT_SCHEMA } from "../utils/constants";
import icon from "/src/assets/casestudy.png";

const CaseStudy = () => {
  return (
    <section className="p-8 md:p-0">
      <div className="md:max-w-7xl md:mx-auto">
        <p>Case Studies</p>
      </div>
      {/* hero section */}
      <div className="grid py-10  md:max-w-7xl md:mx-auto gap-5 justify-items-center">
        <p className="  border border-[#EBF2FF] py-3 px-6 rounded-3xl bg-[#EBF2FF] text-[#1B1EE4]">
          {" "}
          Hand-picked highlights
        </p>
        <p className="text-center text-[#1F1F1F] md:w-1/2 md:text-6xl">
          Discover Amazing Products
        </p>
        <p className="text-center md:w-1/2 text-2xl text-[#1F2937]">
          Explore our carefully curated collection of powerful features designed
          to elevate your experience
        </p>
      </div>

      {/* product */}
      <div className="grid md:grid-cols-2 md:p-0 p-5 gap-9 md:max-w-7xl py-10 md:mx-auto">
        {PRODUCT_SCHEMA.map((r, i) => {
          return (
            <div key={i} className="grid gap-5">
              <span className="bg-[#F0F4F9] rounded-3xl">
                <img src={r.image} alt="icon" />
              </span>
              <div className="grid grid-flow-col items-center w-max gap-3">
                <p className="bg-[#1B1EE4]  text-white border border-[#1B1EE4] rounded-3xl py-3 px-7">
                  {r.slug}
                </p>
                <p className="text-[#FF6C63] border border-[#FF6C63] rounded-3xl py-3 px-7">
                  {r.header}
                </p>
              </div>
              <p className="text-[#1F1F1F] mt-4 text-xl">{r.content}</p>
            </div>
          );
        })}
      </div>

      {/* ready to transform */}
      <div className="bg-[#121454] md:-mx-6 py-10 ">
        <div className="grid justify-items-center gap-4 p-5 md:p-0 py-10">
          <div className="grid text-[#1B1EE4] grid-flow-col w-max gap-3 bg-[#EBF2FF] rounded-3xl items-center border border-[#EBF2FF] px-5 py-3">
            <FaArrowRightLong />
            <p>
              Join thousands of satisfied customers who've already made the
              switch.
            </p>
          </div>
          <p className="text-[#FFFFFF] md:text-7xl text-center md:w-7/12">
            Ready to Transform Your Digital Experience?
          </p>
          <p className="text-[#D1D5DB] text-2xl text-center md:w-9/12">
            Share your project details, what you’re building, who it’s for, and
            what you hope to achieve. Let’s bring your ideas to life!
          </p>
          <button className="grid grid-flow-col px-6 border text-[#FFFFFF] border-[#F8F8F8] items-center w-max gap-2 py-3 rounded-3xl">
            <p>SEND ME A MESSAGE</p>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* product */}
      <div className="grid md:grid-cols-2 gap-3 md:max-w-7xl py-10 md:mx-auto">
        <div className="grid gap-5">
          <span className="bg-[#F0F4F9] rounded-3xl">
            <img src={icon} alt="icon" />
          </span>
          <div className="grid grid-flow-col w-max gap-3">
            <p className="bg-[#1B1EE4]  text-white border border-[#1B1EE4] rounded-3xl py-2 px-4">
              UIUX DESIGN
            </p>
            <p className="text-[#FF6C63] border border-[#FF6C63] rounded-3xl py-2 px-4">
              HEALTHCARE
            </p>
          </div>
          <p className="text-[#1F1F1F] text-xl">
            Creating a telemedicine platform: Enhancing UI for virtual
            consultations
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
