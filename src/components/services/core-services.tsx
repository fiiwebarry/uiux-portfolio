import { CORE_SERVICES_SCHEMA } from "../../utils/constants";

const CoreServices = () => {
  return (
    <section className=" md:max-w-7xl md:mx-auto py-20">
      <div className="grid gap-3 justify-items-center">
        <h1 className="text-[#1F1F1F] font-bold md:text-6xl">
          My Core Services
        </h1>
        <p className="text-[#1F2937] text-center md:text-2xl">
          Comprehensive design solutions tailored to your specific needs
        </p>
      </div>

      <div className="grid gap-5 mt-9 md:p-0 p-5 ">
        {CORE_SERVICES_SCHEMA.map((r, i) => {
          return (
            <div key={i} className={`md:p-2 p-4 rounded-3xl ${r.bgColor}`}>
              <div className="grid md:grid-flow-col justify-between gap-10 p-9">
                <div>
                  <img className="" src={r.image} alt="product-design" />
                </div>
                <div className="">
                  <div className="md:mt-9 ">
                    <p className="text-[#F59E0B] border border-[#F59E0B] py-2 px-3 grid justify-center rounded-2xl w-52">
                      {r.header}
                    </p>
                    <p className="text-[#1F1F1F] mt-4 font-bold md:text-4xl">
                      {r.slug}
                    </p>
                    <p className="text-[#1F2937] mt-4">{r.content}</p>
                  </div>
                  <div className="grid  grid-flow-col md:pt-11 justify-between ">
                    <div className="grid gap-2">
                      <p className="text-[#1F1F1F] font-bold md:text-4xl">
                        {r.percentage}
                      </p>
                      <p className="text-[#1F1F1F] md:w-9/12">{r.process}</p>
                    </div>
                    <div className="grid gap-2">
                      <p className="text-[#1F1F1F] font-bold md:text-4xl">
                        {r.rate}
                      </p>
                      <p className="text-[#1F1F1F] md:w-9/12">{r.outcome}</p>
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
