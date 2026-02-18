import icon from "/src/assets/digital.png";

const Hero = () => {
  return (
    <section>
      <div className="bg-[#111827] md:py-20 py-10 md:-mx-6 -mx-5">
        <div className="md:max-w-7xl grid md:grid-flow-col gap-4 mx-auto">
          <div>
            <p className="text-white md:text-7xl md:w-9/12">
              Reimagining digital solutions for the modern engineer
            </p>
            <p className="text-[#D1D5DB] mt-4 md:w-9/12">
              IncQuery Labs offers tailored solutions for the automated digital
              engineering experience throughout the whole engineering process.
            </p>
          </div>
          <div>
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
