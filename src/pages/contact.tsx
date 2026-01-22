const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-2 gap-3">
        <div className="">
          <h1 className="text-[#1F1F1F] text-5xl w-119.5 ">
            Consult with a Product Design Expert
          </h1>
          <p className="text-[#1F2937]  mt-4 text-2xl w-138.75">
            Whether you’re building a new product, refining an existing
            experience, or stuck on a design decision, I offer thoughtful,
            user-centered consultation to help you move forward with confidence.
            Every session is focused on clarity, usability, and impact.
          </p>
        </div>
        <div className="bg-[#FBFBFB]  rounded-2xl">
          <div className="grid p-7 justify-center  mx-auto">
            <p className="text-3xl">Let’s Build Something Great Together!</p>
            <p className="  text-[#1F2937] text-center">
              Have a project in mind or just want to connect? I’d love to hear
              from you.
            </p>
          </div>
          <form className="p-7">
            <div className="grid grid-cols-2 gap-6">
              <div className="grid grid-flow-row gap-2">
                <label>Full Name</label>
                <input
                  className="border border-[#D1D5DB] p-3 text-[#D1D5DB] w-69.5 rounded-2xl py-3"
                  type="text"
                  aria-placeholder="Enter Name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <label>Email Address</label>
                <input
                  className="border border-[#D1D5DB] p-3 text-[#D1D5DB] w-69.5 rounded-2xl py-3"
                  type="text"
                  aria-placeholder="Enter Name"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <select className="w-full border border-[#D1D5DB] p-3 text-[#D1D5DB] rounded-2xl "></select>

            <button className="bg-[#1B1EE4] rounded-3xl px-6 py-3 w-full text-white">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
