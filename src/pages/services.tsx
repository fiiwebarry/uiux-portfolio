import CoreServices from "../components/services/core-services";
import icon from "../assets/brainstorm.png";
import Process from "../components/services/process";
import Feedback from "../components/services/feedback";
import Advantage from "../components/services/advantage";
import Transform from "../components/reusable/transform";
import Inspired from "../components/reusable/inspired";
import Figures from "../components/services/figures";

const Services = () => {
  return (
    <section className="  md:p-0 p-5">
      <div className="md:max-w-7xl md:mb-20 mx-auto">
        <div className="  grid grid-flow-col w-max gap-1 items-center md:mb-10">
          <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
          <p className="text-[#1F1F1F] md:text-xl">Services</p>
        </div>
      </div>

      <div className=" md:max-w-7xl mx-auto grid md:grid-flow-col gap-4 md:justify-between ">
        <div className="">
          <p className="text-[#F59E0B] font-bold md:text-5xl md:w-2/12 ">
            Craft. Launch. Scale.
          </p>
          <p className="text-[#1F2937] mt-4 md:text-xl md:w-8/12">
            I partner with startups and established companies to create digital
            products that solve real problems. Every engagement is tailored to
            your unique needs.
          </p>
        </div>
        <span>
          <img className="w-full " src={icon} alt="illustration" />
        </span>
      </div>
      <CoreServices />
      <Process />
      <Feedback />
      <Advantage />
      <Transform />
      <Inspired />
      <Figures />
    </section>
  );
};

export default Services;
