// import { PROJECT_BUDGET_SCHEMA } from "../utils/constants";
import icon from "/src/assets/transform-image.png";
import { useState } from "react";

type ContactForm = {
  fullName: string;
  email: string;
  message: string;
  subject: string;
  project?: string; // optional if needed
};

type ContactErrors = Partial<Record<keyof ContactForm, string>>;
const Contact = () => {
  const [error, setError] = useState<ContactErrors>({});
  const [formData, setFormData] = useState<ContactForm>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    // project: "0",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "project" ? Number(value) : value, // convert range to number
    }));
  };
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation: ContactErrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.fullName.trim()) {
      validation.fullName = "Name is required";
    }

    if (!formData.email.trim()) {
      validation.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validation.email = "Email is invalid";
    }

    setError(validation);

    if (Object.keys(validation).length === 0) {
      // submit form logic here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="md:max-w-7xl md:mx-auto p-8 md:p-0  py-10">
      <div className="grid grid-flow-col w-max gap-1 items-center md:mb-10">
        <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
        <p className="text-[#1F1F1F] text-xl">Contact</p>
      </div>
      <div className="grid md:grid-cols-2 gap-3 py-10 ">
        <div className="">
          <h1 className="text-[#1F1F1F] md:text-5xl md:w-119.5 ">
            Consult with a Product Design Expert
          </h1>
          <p className="text-[#1F2937]  mt-4 text-2xl md:w-138.75">
            Whether you’re building a new product, refining an existing
            experience, or stuck on a design decision, I offer thoughtful,
            user-centered consultation to help you move forward with confidence.
            Every session is focused on clarity, usability, and impact.
          </p>
        </div>
        <div className="bg-[#FBFBFB] rounded-2xl">
          <div className="grid p-7 justify-center  mx-auto">
            <p className="md:text-3xl">Let’s Build Something Great Together!</p>
            <p className="  text-[#1F2937] text-center">
              Have a project in mind or just want to connect? I’d love to hear
              from you.
            </p>
          </div>
          <form onSubmit={handleSubmitForm} className="grid gap-6 p-5">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid grid-flow-row gap-2">
                <label className="text-xl">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="border border-[#D1D5DB] p-3 rounded-2xl"
                />
                {error.fullName && (
                  <p className="text-red-500">{error.fullName}</p>
                )}
              </div>

              <div className="grid grid-flow-row gap-2">
                <label className="text-xl">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="border border-[#D1D5DB] p-3 rounded-2xl"
                />
                {error.email && <p className="text-red-500">{error.email}</p>}
              </div>
            </div>

            <div className="grid grid-flow-row gap-2">
              <label className="text-xl">Subject / Project Type</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tell me about your project"
                className="border border-[#D1D5DB] p-3 rounded-2xl"
              />
              {error.email && <p className="text-red-500">{error.email}</p>}
            </div>
            <div className="grid grid-flow-row gap-2">
              <label className="text-xl">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                className="border border-[#D1D5DB] p-4 rounded-3xl h-40 w-full"
              />
            </div>

            {/* <div className="grid grid-flow-row gap-2">
              <label className="text-xl">Project Budget</label>
              <input
                type="range"
                min={0}
                max={PROJECT_BUDGET_SCHEMA.length - 1}
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full"
              />
            </div> */}

            <button
              type="submit"
              className="bg-[#1B1EE4] cursor-pointer mt-4 rounded-3xl px-6 py-3 w-full text-white"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#121454] mt-4 rounded-3xl">
        <div className="grid md:grid-cols-2">
          <div className=" md:p-10">
            <p className="font-bold text-4xl text-[#FFFFFF]">
              Ready to Transform Your Digital Experience?
            </p>
            <p className="text-[#D1D5DB] text-2xl mt-8 ">
              Share your project details, what you’re building, who it’s for,
              and what you hope to achieve. Let’s bring your ideas to life!
            </p>
            <div className="mt-10 md:relative">
              <input
                className="md:w-131 text-[#6B7280] p-4 rounded-3xl py-5 border border-[#F8F8F8]"
                type="text"
                placeholder="ENTER EMAIL"
              />

              <button className="bg-[#1B1EE4] md:absolute rounded-3xl py-3 px-6 md:right-14 top-2 text-white">
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
