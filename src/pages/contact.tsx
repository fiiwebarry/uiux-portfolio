import icon from "/src/assets/transform-image.png";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto  py-10">
      <div className="grid grid-cols-2 gap-3 py-10 ">
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
                <label className="text-[#000000] text-xl">Full Name</label>
                <input
                  className="border border-[#D1D5DB] p-3 text-[#D1D5DB] rounded-2xl py-3"
                  type="text"
                  aria-placeholder="Enter Name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="grid grid-flow-row gap-2">
                <label className="text-[#000000] text-xl">Email Address</label>
                <input
                  className="border border-[#D1D5DB] p-3 text-[#D1D5DB] rounded-2xl py-4"
                  type="text"
                  aria-placeholder="Enter Name"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div className="grid grid-flow-row  mt-4 gap-2">
              <label className="text-[#000000] text-xl">
                Subject/ Project Type
              </label>
              <select className="w-full border border-[#D1D5DB] py-4  px-3 text-[#D1D5DB] rounded-2xl ">
                <option> Tell me about your project</option>
                <option> pick me</option>
                <option> pick me</option>
                <option> pick me</option>
              </select>
            </div>
            <div className="grid grid-flow-row  mt-4 gap-2">
              <label className="text-[#000000] text-xl">Message box</label>
              <textarea
                className="border  border-[#D1D5DB] p-4 text-[#D1D5DB]  w-full "
                placeholder="Tell me about your project"
              />
            </div>

            <button className="bg-[#1B1EE4]  mt-7 rounded-3xl px-6 py-3 w-full text-white">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#121454] mt-4 rounded-3xl">
        <div className="grid grid-cols-2">
          <div className=" p-10">
            <p className="font-bold text-4xl text-[#FFFFFF]">
              Ready to Transform Your Digital Experience?
            </p>
            <p className="text-[#D1D5DB] text-2xl mt-8 ">
              Share your project details, what you’re building, who it’s for,
              and what you hope to achieve. Let’s bring your ideas to life!
            </p>
            <div className="mt-10 relative">
              <input
                className="w-131 text-[#6B7280] p-4 rounded-3xl py-5 border border-[#F8F8F8]"
                type="text"
                placeholder="ENTER EMAIL"
              />

              <button className="bg-[#1B1EE4] absolute rounded-3xl py-3 px-6 right-14 top-2 text-white">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="grid justify-items-end">
            <img className=" " src={icon} alt="transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
