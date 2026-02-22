const Style = () => {
  return (
    <section className="md:max-w-7xl mx-auto">
      <div className="grid  grid-flow-col mt-10 justify-between">
        <div className="border-[#D1D5DB] border py-3 px-5 rounded-3xl">
          Style Guides
        </div>
        <div className="border-[#D1D5DB] grid justify-center mx-auto  border rounded-full  w-10 h-10">
          <p className="mt-2"> 02</p>
        </div>
      </div>
      <div className="grid  grid-flow-col   justify-between">
        <div className="md:mt-16">
          <p className="text-[#1A1A1A] md:text-[64px] font-bold md:w-3/12 md:leading-16">
            Chakra Petch
          </p>
          <p className="text-[#4A4A4A] mt-5 md:w-6/12">
            Chakra Petch was selected for its elegant balance of tradition and
            contemporary style, making it an ideal match for Sigyn’s
            survival-focused messaging system, where clarity, resilience, and
            simplicity are essential.
          </p>
        </div>
        <div className="md:-mt-20">
          <p className=" text-[360px] text-[#C1C1C1]"> Aa</p>
        </div>
      </div>
      <div>
        <div className="">
          <div className=" grid grid-flow-col gap-3">
            <div className="grid grid-rows-2 justify-between gap-40 bg-linear-to-b from-[#3C3C3C]  md:w-52 to-[#FFB000] rounded-3xl p-4 ">
              <div>
                <p>Gradient</p>
              </div>
              <div>
                <p>#FFB85A</p>
                <p>#FF642E</p>
              </div>
            </div>
            <div className="grid grid-rows-2 justify-between gap-40 bg-[#FFB000] rounded-3xl p-2 md:w-52 ">
              <div>
                <p className="text-[#FFFFFFCC]">Vivid orange-yellow</p>
              </div>
              <div>
                <p className="text-[#FFFFFF]">#FFB000</p>
              </div>
            </div>
            <div className="grid grid-rows-2 justify-between gap-40 bg-[#0B0B0B]  md:w-52 rounded-3xl p-4 ">
              <div>
                <p>Gradient</p>
              </div>
              <div>
                <p>#FFB85A</p>
                <p>#FF642E</p>
              </div>
            </div>
            <div className="grid grid-rows-2 justify-between gap-40 bg-[#9A9186] to-[#FFB000]  md:w-52 rounded-3xl p-4 ">
              <div>
                <p>Gradient</p>
              </div>
              <div>
                <p>#FFB85A</p>
                <p>#FF642E</p>
              </div>
            </div>
            <div className="grid grid-rows-2 justify-between gap-40 bg-[#F7F7F7] to-[#FFB000]  md:w-52 rounded-3xl p-4 ">
              <div>
                <p>Gradient</p>
              </div>
              <div>
                <p>#FFB85A</p>
                <p>#FF642E</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style;
