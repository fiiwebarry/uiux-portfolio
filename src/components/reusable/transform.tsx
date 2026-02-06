import { FaArrowRightLong } from "react-icons/fa6";

const Transform = () => {
  return (
    <section className="bg-[#121454] md:-mx-6  py-20 ">
      <div className="grid justify-items-center gap-7 p-3 md:p-0 md:py-10">
        <div className="grid text-[#1B1EE4] grid-flow-col md:w-max gap-3 bg-[#EBF2FF] rounded-3xl items-center border border-[#EBF2FF]  px-3 md:px-5 py-3">
          <FaArrowRightLong className="hidden md:block" />
          <p className="md:justify-normal text-center">
            Join thousands of satisfied customers who've already made the
            switch.
          </p>
        </div>
        <p className="text-[#FFFFFF] md:text-7xl  text-center md:w-7/12">
          Ready to Transform Your Digital Experience?
        </p>
        <p className="text-[#D1D5DB] md:text-2xl text-center md:w-9/12">
          Share your project details, what you’re building, who it’s for, and
          what you hope to achieve. Let’s bring your ideas to life!
        </p>
        <button className="grid grid-flow-col cursor-pointer hover:bg-[#3D3D3D] hover:border-[#3D3D3D] hover:text-white px-6 border text-[#FFFFFF] border-[#F8F8F8] items-center w-max gap-2 py-3 rounded-3xl">
          <p>SEND ME A MESSAGE</p>
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default Transform;
