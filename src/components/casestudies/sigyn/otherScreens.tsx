import sigyn from "/src/assets/sigyn-progs.png";

const OtherScreens = () => {
  return (
    <section className="md:max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 md:gap-64">
        <div>
          <p className="text-3xl md:text-6xl md:w-1/2">Other Screens</p>
        </div>
        <div>
          <p className="text-lg md:text-2xl text-[#6B7280] md:w-11/12">
            The other screens in Sigyn are designed to support essential actions
            with clarity and minimal distraction, ensuring users can manage
            contacts, alerts, and settings quickly and confidently, even in
            high-stress or low-power situations.
          </p>
        </div>
      </div>
      <div className="bg-linear-to-b from-[#FFF6EB] to-[#FFFCF7] min-h-screen mt-9 p-7 rounded-3xl">
        <div className="grid grid-cols-3 justify-center mx-auto w-max gap-20">
          <img src={sigyn} alt="" />
          <img src={sigyn} alt="" />
          <img src={sigyn} alt="" />
          <img src={sigyn} alt="" />
          <img src={sigyn} alt="" />
          <img src={sigyn} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OtherScreens;
