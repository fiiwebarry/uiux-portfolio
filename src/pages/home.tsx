const Home = () => {
  return (
    <div className="md:max-w-7xl mx-auto grid justify-items-center gap-6 p-5 py-20">
      <div className="border border-[#E5E7EB] px-8 gap-2 grid grid-flow-col items-center rounded-3xl py-3">
        <span className="w-3 h-3 bg-[#24D64E] rounded-full"></span>
        <p className="text-[#FFFFFF]">AVAILABLE FOR WORK</p>
      </div>

      {/* <h1 className=" md:text-7xl text-center w-10/12 font-bold  text-white">
        I design{" "}
        <span className="inline-block border-b-4 border-[#F59E0B] text-[#F59E0B] rounded-br-xs font-bold">
          products{" "}
        </span>{" "}
        that deliver real impact
      </h1> */}
      <h1 className="md:text-7xl text-center w-10/12 font-bold text-white mx-auto">
        I design{" "}
        <span className="relative inline-block text-[#F59E0B]">
          products
          <svg
            className="absolute left-0 -bottom-3 w-full"
            height="12"
            viewBox="0 0 200 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10 C50 2, 150 2, 198 10"
              stroke="#F59E0B"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </span>{" "}
        that deliver real impact
      </h1>

      <p className="text-xl text-[#FFFFFF] text-center md:w-8/12">
        I'm a Product (UI/UX) designer focused on turning complex ideas into
        intuitive, high-converting experiences through research, UX strategy,
        and clean interface design.
      </p>
      <div className="grid grid-flow-col gap-4">
        <button className="bg-[#1B1EE4] border px-10 py-3 text-white border-[#1B1EE4] rounded-3xl">
          HIRE ME
        </button>
        <button className="border border-[#F8F8F8] px-5 py-3 text-white rounded-3xl">
          VIEW RESUME
        </button>
      </div>
    </div>
  );
};

export default Home;
