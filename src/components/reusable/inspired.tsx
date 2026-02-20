import { PRODUCT_SCHEMA } from "../../utils/constants";

const Inspired = () => {
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
      <div className="grid md:grid-cols-2 items-center md:gap-9 md:max-w-7xl py-10  md:mx-auto">
        {PRODUCT_SCHEMA.map((r, i) => {
          return (
            <div
              key={i}
              className=" grid grid-flow-row  h-full items-center cursor-pointer "
            >
              <span className=" bg-[#F0F4F9] inline-block p-14 rounded-3xl ">
                <img
                  className="  transition-transform  mx-auto duration-300 ease-in-out hover:scale-105"
                  src={r.image}
                  alt="icon"
                />
              </span>
              <div className="grid grid-flow-col mt-6 items-center w-max gap-3">
                <p className="bg-[#1B1EE4]  text-white border border-[#1B1EE4] rounded-3xl py-3 px-5 md:px-7">
                  {r.slug}
                </p>
                <p className="text-[#FF6C63]   border border-[#FF6C63] rounded-3xl py-3  px-5 md:px-7">
                  {r.header}
                </p>
              </div>
              <p className="text-[#1F1F1F] mt-4 md:text-xl">{r.content}</p>
            </div>
          );
        })}
      </div>
      <div className="grid justify-items-center md:mt-6 md:mb-4">
        <button className="bg-[#1B1EE4] hover:bg-[#FFB85A] hover:border-[#FFB85A] border text-white px-9 py-3 rounded-3xl border-[#1B1EE4]">
          {" "}
          SEE MORE CASE STUDIES
        </button>
      </div>
    </section>
  );
};

export default Inspired;
