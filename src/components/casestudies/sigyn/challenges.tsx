import icon from "/src/assets/profile-emma.png";
import icon2 from "/src/assets/profile-james.png";
import smiley from "/src/assets/goals.png";
import needs from "/src/assets/needs.png";
import motivation from "/src/assets/motivation.png";
import challenges from "/src/assets/challenges.png";

const Challenges = () => {
  return (
    <section className="bg-[#F5F1E6] md:-mx-6 -mx-5 md:py-20 p-7">
      <div className="grid grid-flow-col gap-8 md:max-w-7xl mx-auto items-center">
        <div className="relative md:mt-0 mt-7 shadow-3xl md:p-5 p-3 bg-white border border-white rounded-2xl text-white">
          {/* Vertical divider */}
          <span className="absolute top-10 bottom-10 left-1/2 w-px bg-[#F3F4F6]" />
          {/* Horizontal divider */}
          <span className="absolute left-10 right-10 top-1/2 h-px bg-[#F3F4F6]" />
          <div className="grid grid-cols-2">
            {/* Goals */}
            <div className="md:p-4 p-4">
              <div className="grid grid-flow-col w-max gap-2">
                <img src={smiley} alt="smiley" />
                <p className="text-[#333333] font-bold text-xl">Goals</p>
              </div>
              <p className="text-[#6B7280] mt-3">
                Survivors need a reliable way to communicate life-saving
                information without internet access. The goal is to enable
                clear, fast, and low-power messaging that supports coordination,
                safety, and survival across scattered communities.
              </p>
            </div>
            {/* Challenges */}
            <div className="md:p-4 p-4">
              <div className="grid grid-flow-col w-max gap-2">
                <img src={challenges} alt="challenge" />
                <p className="text-[#333333] font-bold text-xl">Challenges</p>
              </div>
              <div className="grid gap-4 mt-5">
                <div className="grid grid-flow-col w-max gap-2 items-center">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2"></p>
                  <p className="text-[#6B7280]">
                    Delayed message delivery across distances.
                  </p>
                </div>
                <div className="grid grid-flow-col w-max gap-2 items-center">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2"></p>
                  <p className="text-[#6B7280]">
                    Limited device availability and damaged hardware.
                  </p>
                </div>
                <div className="grid grid-flow-col w-max gap-2 ">
                  <p className="rounded-full bg-[#F08C00] mt-2 w-2 h-2"></p>
                  <p className="text-[#6B7280] md:w-11/12">
                    High consequences of missed or misunderstood messages.
                  </p>
                </div>
              </div>
            </div>
            {/* Motivations */}
            <div className="md:p-7 p-4">
              <div className="grid grid-flow-col w-max gap-2">
                <img src={motivation} alt="smiley" />
                <p className="text-[#333333] font-bold text-xl">Motivations</p>
              </div>
              <div className="grid gap-4 mt-5">
                <div className="grid grid-flow-col w-max gap-2 ">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2 mt-2"></p>
                  <p className="text-[#6B7280] md:w-10/12">
                    Receive timely warnings to stay safe in a dangerous
                    environment.
                  </p>
                </div>
                <div className="grid grid-flow-col w-max gap-2 ">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2 mt-2"></p>
                  <p className="text-[#6B7280] md:w-10/12">
                    Gain confirmation that others are safe, reducing fear and
                    panic.
                  </p>
                </div>
              </div>
            </div>
            {/* Needs */}
            <div className="md:p-7 p-4 ">
              <div className="grid grid-flow-col w-max gap-2">
                <img src={smiley} alt="smiley" />
                <p className="text-[#333333] font-bold text-xl">Goals</p>
              </div>
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
          <span className="absolute top-10 bottom-10 left-1/2 w-px bg-[#F3F4F6]" />
          {/* Horizontal divider */}
          <span className="absolute left-10 right-10 top-1/2 h-px bg-[#F3F4F6]" />
          <div className="grid grid-cols-2">
            {/* Goals */}
            <div className="md:p-3 p-4">
              <div className="grid grid-flow-col w-max gap-2">
                <img src={smiley} alt="smiley" />
                <p className="text-[#333333] font-bold text-xl">Goals</p>
              </div>
              <p className="text-[#6B7280] mt-3">
                To restore dependable communication in a world without digital
                infrastructure. The system must allow survivors to exchange
                urgent information quickly, using minimal energy, while
                maintaining clarity and reliability across long distances.
              </p>
            </div>
            {/* Challenges */}
            <div className="md:p-4 p-4">
              <div className="grid grid-flow-col w-max gap-2">
                <img src={challenges} alt="challenge" />
                <p className="text-[#333333] font-bold text-xl">Challenges</p>
              </div>
              <div className="grid gap-4 mt-5">
                <div className="grid grid-flow-col w-max gap-2 items-center">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2"></p>
                  <p className="text-[#6B7280]">
                    No internet or central infrastructure.
                  </p>
                </div>
                <div className="grid grid-flow-col w-max gap-2 items-center">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2"></p>
                  <p className="text-[#6B7280]">
                    Unstable, short-range connectivity.
                  </p>
                </div>
                <div className="grid grid-flow-col w-max gap-2 items-center ">
                  <p className="rounded-full bg-[#F08C00]  w-2 h-2"></p>
                  <p className="text-[#6B7280] ">
                    Severe power and battery limitations.
                  </p>
                </div>
              </div>
            </div>
            {/* Motivations */}
            <div className="md:p-3 mt-10 p-4">
              <div className="grid grid-flow-col mt-3 w-max gap-2">
                <img src={motivation} alt="smiley" />
                <p className="text-[#333333] font-bold text-xl">Motivations</p>
              </div>
              <div className="grid gap-1 mt-2">
                <div className="grid grid-flow-col w-max gap-2 ">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2 mt-2"></p>
                  <p className="text-[#6B7280] md:w-10/12">
                    Locate and reconnect with missing loved ones.
                  </p>
                </div>
                <div className="grid grid-flow-col w-max gap-2 ">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2 mt-2"></p>
                  <p className="text-[#6B7280] md:w-10/12">
                    Maintain a sense of agency and reduce uncertainty in chaos.
                  </p>
                </div>
                <div className="grid grid-flow-col w-max gap-2 ">
                  <p className="rounded-full bg-[#F08C00] w-2 h-2 mt-2"></p>
                  <p className="text-[#6B7280] md:w-10/12">
                    Alert others to immediate dangers, like hazards or hostile
                    areas.
                  </p>
                </div>
              </div>
            </div>
            {/* Needs */}
            <div className="md:p-3 p-4  mt-12">
              <div className="grid grid-flow-col w-max gap-2">
                <img src={needs} alt="smiley" />
                <p className="text-[#333333] font-bold text-xl">Needs</p>
              </div>
              <p className="text-[#6B7280] mt-6">
                They need simple, actionable messaging that works offline,
                consumes minimal power, delivers reliably with delays, and uses
                visual cues for quick understanding under pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
