const Process = () => {
  return (
    <section>
      <div className="bg-[#111827] md:-mx-6 py-36 ">
        <div className="md:max-w-7xl grid gap-3 mx-auto p-9 bg-white rounded-2xl">
          <p className="text-[#1F1F1F] text-5xl">My Process</p>
          <p className="text-[#1F2937] text-xl ">
            Great products don’t happen by accident. They’re the result of
            asking the right questions, making informed decisions, and
            validating every step. My process is structured but flexible
            designed to reduce risk, create clarity, and deliver outcomes you
            can measure.
          </p>

          <div className="bg-[#EBF2FF] py-20 rounded-2xl mt-3 p-6">
            <div className="grid grid-flow-col gap-5 items-center">
              <p className="bg-[#1B1EE4]  grid justify-center items-center mx-auto rounded-full w-22  text-white font-bold h-22">
                01
              </p>

              <div>
                <p className="text-[#1F1F1F] font-bold md:text-4xl">
                  Discovery
                </p>
                <p className="mt-3">
                  Every successful product starts with context. In this phase, I
                  focus on deeply understanding what we’re building, who we’re
                  building it for, and why it matters. I work closely with
                  stakeholders to uncover business goals, success metrics, and
                  technical constraints. At the same time, I explore user needs,
                  pain points, and behaviors through research and analysis. This
                  ensures we’re not designing based on assumptions but on real
                  insight.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid justify-center mt-7">
          <button className="border cursor-pointer  text-white border-white rounded-2xl py-3 px-5">
            SEND ME A MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
