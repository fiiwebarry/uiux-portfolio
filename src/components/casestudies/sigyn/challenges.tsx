import icon from "/src/assets/profile-emma.png";
import icon2 from "/src/assets/profile-james.png";

const Challenges = () => {
  return (
    <section className="bg-[#F5F1E6] md:-mx-6 -mx-5 md:py-20">
      <div className="grid grid-flow-col gap-8 md:max-w-7xl mx-auto">
        <div className="relative md:mt-0 mt-7 shadow-3xl md:p-5 p-3 bg-white border border-white rounded-2xl text-white">
          {/* Vertical divider */}
          <span className="absolute top-10 bottom-10 left-1/2 w-px bg-[#7F60F9]" />

          {/* Horizontal divider */}
          <span className="absolute left-10 right-10 top-1/2 h-px bg-[linear-gradient(98.24deg,#6DDCFF_0%,#7F60F9_100%)]" />

          <div className="grid grid-cols-2">
            <div className="md:p-7 p-4">
              <p className="text-[#6B7280]">
                Survivors need a reliable way to communicate life-saving
                information without internet access. The goal is to enable
                clear, fast, and low-power messaging that supports coordination,
                safety, and survival across scattered communities.
              </p>
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
              <p className="text-[#6B7280] mt-6">
                An app that is simple, actionable messaging that works offline,
                consumes minimal power, delivers reliably with delays, and uses
                visual cues for quick understanding under pressure.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={icon} alt="icon" />
        </div>
      </div>

      <div className="grid grid-flow-col mt-7 gap-8 md:max-w-7xl mx-auto">
        <div>
          <img src={icon2} alt="icon" />
        </div>
        <div className="relative md:mt-0 mt-7 shadow-3xl md:p-5 p-3 bg-white border border-white rounded-2xl text-white">
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

export default Challenges;
