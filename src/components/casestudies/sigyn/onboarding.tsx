import icon from "/src/assets/sigyn-progs1.png";
import icon2 from "/src/assets/onboarding.png";
import icon3 from "/src/assets/science.png";
import icon4 from "/src/assets/beacon.png";
import icon5 from "/src/assets/active.png";
const Onboarding = () => {
  return (
    <section className=" grid mx-auto md:max-w-7xl md:px-0 px-6 md:py-20 py-10 md:p-7 p-6">
      <div>
        <div className="grid md:grid-cols-2 md:gap-64">
          <div>
            <p className="text-xl md:text-6xl md:w-1/2">Onboarding Screens</p>
          </div>
          <div>
            <p className=" md:text-2xl text-[#6B7280] md:w-11/12">
              The onboarding journey in Sigyn is designed to be intuitive and
              reassuring, helping users quickly learn how to send and receive
              messages even in low-connectivity environments.
            </p>
          </div>
        </div>
        <div className="grid md:grid-flow-col gap-5 mt-10 items-center w-max md:gap-50">
          <div className="bg-[#FDEBD0] md:w-132 grid justify-center md:p-7 p-3 rounded-4xl">
            <img className="md:w-60" src={icon} alt="icon" />
          </div>
          <div className="">
            <img className="md:w-122 w-80" src={icon2} alt="icon" />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid md:grid-cols-2  md:gap-64">
          <div>
            <p className="text-xl md:text-6xl md:w-1/2">Messaging Screens</p>
          </div>

          <div>
            <p className="text-lg md:text-2xl text-[#6B7280] md:w-11/12">
              The messaging screens in Sigyn are crafted to be clear and
              efficient, ensuring users can quickly send, receive, and track
              messages even in low-connectivity conditions.
            </p>
          </div>
        </div>
        <div className="grid md:grid-flow-col gap-5 mt-9 items-center w-max md:gap-50">
          <div className="bg-[#FDEBD0] md:w-132 grid justify-center md:p-7 p-3 rounded-4xl">
            <img className="md:w-60" src={icon} alt="icon" />
          </div>
          <div className="">
            <img className="md:w-122 w-80" src={icon3} alt="icon" />
          </div>
        </div>
      </div>
      <div className="rounded-3xl mt-20 bg-[#EBEBEB] md:py-20 md:p-9 p-4">
        <div className=" grid justify-center">
          <p className="text-center text-[#1F1F1F] md:text-5xl md:w-9/12 mx-auto">
            Every decision centered on enabling critical information to move
            reliably between survivors, even with unstable signals and minimal
            electricity.
          </p>
          <div className="grid md:grid-flow-col gap-4  mt-6 justify-center md:gap-2">
            <img src={icon4} alt="" />
            <img src={icon5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
