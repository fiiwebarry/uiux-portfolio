import icon from "/src/assets/curve.png";
import resume from "/src/assets/Benjamin.pdf";

const Home = () => {
  return (
    <div className="md:max-w-7xl mx-auto grid justify-items-center gap-6 md:p-5 p-8 py-20">
      <div className="border border-[#E5E7EB] px-8 gap-2 grid grid-flow-col items-center rounded-3xl py-3">
        <span className="w-3 h-3 bg-[#24D64E] rounded-full  animate-pulse"></span>
        <p className="text-[#FFFFFF] font-semibold">AVAILABLE FOR WORK</p>
      </div>
      <div className="grid justify-items-center">
        <h1 className="md:text-7xl text-center md:w-10/12 font-bold md:leading-20 text-white">
          I design{" "}
          <span className="relative inline-block text-[#F59E0B] font-bold">
            products
            <img
              src={icon}
              alt="curve"
              className="absolute hidden md:block left-14 -bottom-6 w-52"
            />
          </span>{" "}
          that deliver real impact
        </h1>
      </div>
      <p className="md:text-xl text-[#FFFFFF] text-center md:w-8/12">
        I'm a Product (UI/UX) designer focused on turning complex ideas into
        intuitive, high-converting experiences through research, UX strategy,
        and clean interface design.
      </p>
      <div className="grid grid-flow-col gap-4  md:mb-10 mt-6">
        <a
          href="https://wa.me/2349125082119"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1B1EE4]  text-sm md:text-lg border  px-7 md:px-10 py-3 hover:bg-[#FFB85A] hover:border-[#FFB85A] text-white border-[#1B1EE4] rounded-3xl inline-block"
        >
          HIRE ME
        </a>
        <button className="border cursor-pointer border-[#F8F8F8] px-5 py-3 hover:bg-[#3D3D3D] hover:border-[#3D3D3D] md:text-lg text-sm text-white rounded-3xl">
          <a className="" href={resume} download=" ">
            {" "}
            DOWNLOAD RESUME
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
