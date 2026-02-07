const Figures = () => {
  return (
    <section className=" bg-[url('/image/story.png')]  bg-cover bg-center -mx-5 md:-mx-6 md:-mb-7 -mb-6 md:mt-14 py-10 md:py-40  p-7">
      <div className="md:max-w-7xl grid md:grid-flow-col gap-3 mx-auto">
        <div className="grid gap-2">
          <p className="text-[#FFFFFF] md:text-6xl md:w-5/12">
            Numbers are telling our story
          </p>
          <p className="text-[#A1A1AA] md:text-xl  md:w-8/12">
            Behind every interface is a problem solved, a decision tested, and a
            result measured. These numbers reflect progress, partnerships, and
            products built with intention.
          </p>
          <p className="font-bold text-[#FFFFFF] italic  md:w-8/12">
            3–5 weeks Typical timeline to go from concept to production-ready
            designs
          </p>
        </div>
        <div className="relative md:mt-0 mt-7 shadow-3xl md:p-5 p-3 bg-[#000000B2] border border-[#000000B2] rounded-2xl text-white">
          {/* Vertical divider */}
          <span className="absolute top-10 bottom-10 left-1/2 w-px bg-[#7F60F9]" />

          {/* Horizontal divider */}
          <span className="absolute left-10 right-10 top-1/2 h-px bg-[linear-gradient(98.24deg,#6DDCFF_0%,#7F60F9_100%)]" />

          <div className="grid grid-cols-2">
            <div className="md:p-7 p-4">
              <p className="text-3xl font-bold">40+</p>
              <p>Designs delivered from MVPs to full product redesigns</p>
            </div>

            <div className="md:p-7 p-4">
              <p className="text-3xl font-bold">15+</p>
              <p>
                Founders and teams supported through product discovery and
                launch
              </p>
            </div>

            <div className="md:p-7 p-4">
              <p className="text-3xl font-bold">6+</p>
              <p>
                Core product phases covered: research, strategy, UX, UI,
                testing, and handoff
              </p>
            </div>

            <div className="md:p-7 p-4 ">
              <p className="text-3xl font-bold">95% </p>
              <p>
                Projects delivered on time and aligned with initial product
                goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Figures;
