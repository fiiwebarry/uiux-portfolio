const Style = () => {
  return (
    <section className="md:max-w-7xl mx-auto md:py-20 py-10 md:p-0 p-7">
      <div className="grid grid-flow-col mt-10 justify-between">
        <div className="border-[#D1D5DB] border py-3 px-5 rounded-3xl">
          Style Guides
        </div>
        <div className="border-[#D1D5DB] grid justify-center mx-auto  border rounded-full  w-10 h-10">
          <p className="mt-2"> 02</p>
        </div>
      </div>
      <div className="grid  md:grid-flow-col   justify-between">
        <div className="md:mt-16 mt-5">
          <p className="text-[#1A1A1A] md:text-[64px] font-bold md:w-3/12 md:leading-16">
            Chakra Petch
          </p>
          <p className="text-[#4A4A4A] md:mt-7 mt-3 md:w-6/12">
            Chakra Petch was selected for its elegant balance of tradition and
            contemporary style, making it an ideal match for Sigyn’s
            survival-focused messaging system, where clarity, resilience, and
            simplicity are essential.
          </p>
        </div>
        <div className="md:-mt-20">
          <p className=" grid md:justify-normal justify-center md:text-[360px] text-9xl  text-[#C1C1C1]">
            {" "}
            Aa
          </p>
        </div>
      </div>
      <div>
        <div className="md:p-0 mt-6 p-6">
          <div className=" grid md:grid-flow-col gap-3">
            <div className="grid grid-rows-2 justify-between md:gap-40 gap-10 bg-linear-to-b from-[#3C3C3C]  md:w-52 to-[#FFB000] rounded-3xl p-4 ">
              <div>
                <p className="text-[#FFFFFFCC]">Gradient</p>
              </div>
              <div>
                <p className="text-[#1A1A1AB2]">#3C3C3C</p>
                <p>#FF642E</p>
              </div>
            </div>
            <div className="grid grid-rows-2 justify-between md:gap-40 gap-10 bg-[#FFB000] rounded-3xl p-4 md:w-52 ">
              <div>
                <p className="text-[#FFFFFFCC]">Vivid orange-yellow</p>
              </div>
              <div>
                <p className="text-[#FFFFFF]">#FFB000</p>
              </div>
            </div>
            <div className="grid grid-rows-2 justify-between md:gap-40 gap-10 bg-[#0B0B0B]  md:w-52 rounded-3xl p-4 ">
              <div>
                <p className="text-[#D1D5DB]">Gradient</p>
              </div>
              <div>
                <p className="text-[#FFFFFF]">#0B0B0B</p>
              </div>
            </div>
            <div className="grid grid-rows-2 justify-between md:gap-40 gap-10  bg-[#9A9186] to-[#FFB000]  md:w-52 rounded-3xl p-4 ">
              <div>
                <p>Warm gray</p>
              </div>
              <div>
                <p>#9A9186</p>
              </div>
            </div>
            <div className="grid grid-rows-2 ustify-between md:gap-40 gap-10 bg-[#F7F7F7] to-[#FFB000]  md:w-52 rounded-3xl p-4 ">
              <div>
                <p>Gray light</p>
              </div>
              <div>
                <p>#F7F7F7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style;
