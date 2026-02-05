import icon from "/src/assets/curve.png";

const Home = () => {
  return (
    <div className="md:max-w-7xl mx-auto grid justify-items-center gap-6 md:p-5 p-8 py-20">
      <div className="border border-[#E5E7EB] px-8 gap-2 grid grid-flow-col items-center rounded-3xl py-3">
        <span className="w-3 h-3 bg-[#24D64E] rounded-full"></span>
        <p className="text-[#FFFFFF]">AVAILABLE FOR WORK</p>
      </div>
      <div className="grid justify-items-center md:relative">
        <h1 className="md:text-7xl text-center md:w-10/12 font-bold md:leading-20  text-white">
          I design <span className=" text-[#F59E0B] font-bold">products </span>{" "}
          that deliver real impact
        </h1>
        <img
          className="md:block hidden md:absolute top-16.75 ml-28"
          src={icon}
          alt="curve"
        />
      </div>
      <p className="md:text-xl text-[#FFFFFF] text-center md:w-8/12">
        I'm a Product (UI/UX) designer focused on turning complex ideas into
        intuitive, high-converting experiences through research, UX strategy,
        and clean interface design.
      </p>
      <div className="grid grid-flow-col gap-4 mt-6">
        <button className="bg-[#1B1EE4] cursor-pointer border px-10 py-3 hover:bg-[#FFB85A] hover:border-[#FFB85A]  text-white border-[#1B1EE4] rounded-3xl">
          HIRE ME
        </button>
        <button className="border cursor-pointer border-[#F8F8F8] px-5 py-3 hover:bg-[#3D3D3D] hover:border-[#3D3D3D]  text-white rounded-3xl">
          VIEW RESUME
        </button>
      </div>
    </div>
  );
};

export default Home;
