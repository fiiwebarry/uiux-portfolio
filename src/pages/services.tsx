import CoreServices from "../components/services/core-services";
import icon from "../assets/brainstorm.png";
import Process from "../components/services/process";
import Feedback from "../components/services/feedback";

const Services = () => {
  return (
    <section className="">
      <div className="  grid grid-flow-col w-max gap-1 items-center md:mb-10">
        <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
        <p className="text-[#1F1F1F] text-xl">Services</p>
      </div>
      <div className=" md:max-w-7xl mx-auto grid grid-flow-col justify-between ">
        <div className="">
          <p className="text-[#F59E0B]  font-bold md:text-6xl md:w-2/12 ">
            Craft. Launch. Scale.
          </p>
          <p className="text-[#1F2937] mt-4  text-xl md:w-8/12">
            I partner with startups and established companies to create digital
            products that solve real problems. Every engagement is tailored to
            your unique needs.
          </p>
        </div>
        <div>
          <span>
            <img className="w-712.5" src={icon} alt="illustration" />
          </span>
        </div>
      </div>
      <CoreServices />
      <Process />
      <Feedback />
    </section>
  );
};

export default Services;
