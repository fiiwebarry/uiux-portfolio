const Wireframes = () => {
  return (
    <section className="bg-[#FBEECD] md:-mx-6 ">
      <div className="md:max-w-7xl mx-auto md:py-10">
        <div className="grid grid-flow-col mt-10 justify-between">
          <div className="border-[#D1D5DB] border py-3 px-5 text-[#6B7280] rounded-3xl">
            Wireframes
          </div>
          <div className="border-[#D1D5DB] grid justify-center mx-auto  border rounded-full  w-10 h-10">
            <p className="mt-2 text-[#6B7280]">05</p>
          </div>
        </div>
        <div className="grid grid-flow-col mt-10 justify-between">
          <div>
            <p>App Structure and Layout</p>
          </div>
          <div>
            <p className="w-1/2">
              The app structure and layout of Sigyn are designed for simplicity
              and efficiency, ensuring users can navigate effortlessly even
              under stressful conditions. The main interface is organized into
              clear sections: Messaging, Contacts, Alerts, and Settings.
            </p>
          </div>
        </div>

        <div className="justify-center mt-10">
          <p className="text-center text-[#1F1F1F] text-6xl">
            The focus was on resilient communication over convenience. Every
            decision centered on enabling critical information to move reliably
            between survivors, even with unstable signals and minimal
            electricity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wireframes;
