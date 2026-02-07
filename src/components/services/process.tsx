import { PROCESS_SCHEMA } from "../../utils/constants";
import Carousel from "../reusable/carousel";

const Process = () => {
  return (
    <section>
      <div className="bg-[#111827] md:-mx-6  -mx-5 md:py-36 py-10 md:p-0 p-3 ">
        <div className="md:max-w-7xl grid gap-3 mx-auto md:p-9 p-5 bg-white rounded-2xl">
          <p className="text-[#1F1F1F] font-bold md:text-5xl">My Process</p>
          <p className="text-[#1F2937] md:text-xl ">
            Great products don’t happen by accident. They’re the result of
            asking the right questions, making informed decisions, and
            validating every step. My process is structured but flexible
            designed to reduce risk, create clarity, and deliver outcomes you
            can measure.
          </p>

          <Carousel autoSlide autoSlideInterval={2000}>
            {PROCESS_SCHEMA.map((r, i) => {
              return (
                <div
                  key={i}
                  className="bg-[#EBF2FF] py-20 rounded-2xl mt-3 p-6"
                >
                  <div className="grid md:grid-flow-col gap-5 items-center">
                    <p className="bg-[#1B1EE4]  grid justify-center items-center md:mx-auto rounded-full w-22  text-white font-bold h-22">
                      {r.number}
                    </p>
                    <div>
                      <p className="text-[#1F1F1F] font-bold md:text-4xl">
                        {r.title}
                      </p>
                      <p className="mt-3">{r.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>

        <div className="grid justify-center mt-7">
          <button className="border cursor-pointer  hover:bg-[#3D3D3D] hover:border-[#3D3D3D]  text-white border-white rounded-2xl py-3 px-5">
            SEND ME A MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
