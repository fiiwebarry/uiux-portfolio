import { CORE_SERVICES_SCHEMA } from "../../utils/constants";
import icon from "/src/assets/product-design.png";

const CoreServices = () => {
  return (
    <section className=" md:max-w-7xl mx-auto  py-20">
      <div className="grid gap-3 justify-items-center">
        <h1 className="text-[#1F1F1F] font-bold md:text-6xl">
          My Core Services
        </h1>
        <p className="text-[#1F2937] md:text-2xl">
          Comprehensive design solutions tailored to your specific needs
        </p>
      </div>

      <div className="grid gap-5 ">
        {CORE_SERVICES_SCHEMA.map(() => {
          return (
            <div className="p-2 bg-[#EBF2FF] rounded-3xl ">
              <div className="grid grid-flow-col justify-between gap-10 p-9">
                <div>
                  <img className="" src={icon} alt="product-design" />
                </div>
                <div className="">
                  <div className="md:mt-9 ">
                    <p className="text-[#F59E0B] border border-[#F59E0B] py-2 px-3 rounded-2xl w-37.25">
                      End-to-End Design
                    </p>
                    <p className="text-[#1F1F1F] mt-4 font-bold md:text-4xl">
                      Product Design
                    </p>
                    <p className="text-[#1F2937] mt-4">
                      Transform your product vision into intuitive,
                      user-centered interfaces. We craft seamless, engaging
                      experiences that solve real problems and drive measurable
                      results.
                    </p>
                  </div>
                  <div className="grid  grid-flow-col md:pt-11 justify-between ">
                    <div className="grid gap-2">
                      <p className="text-[#1F1F1F] font-bold md:text-4xl">
                        45%
                      </p>
                      <p className="text-[#1F1F1F] md:w-9/12">
                        Improved Customer Conversion
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <p className="text-[#1F1F1F] font-bold md:text-4xl">
                        15+
                      </p>
                      <p className="text-[#1F1F1F] md:w-9/12">
                        Products Successfully Launched
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreServices;
