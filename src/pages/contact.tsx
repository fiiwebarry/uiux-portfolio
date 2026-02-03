import { PROJECT_BUDGET_SCHEMA } from "../utils/constants";
import icon from "/src/assets/transform-image.png";
import { useState } from "react";

type ContactForm = {
  fullName: string;
  email: string;
  message: string;
  subject: string;
  project: number; // number for range input
};

type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    project: 0,
  });

  const [error, setError] = useState<ContactErrors>({});

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
    <section className="md:max-w-7xl md:mx-auto p-8 md:p-0 py-10">
      <form onSubmit={handleSubmitForm} className="grid gap-6">
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
            {error.fullName && <p className="text-red-500">{error.fullName}</p>}
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
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-[#D1D5DB] p-3 rounded-2xl"
          >
            <option value="">Tell me about your project</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </select>
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

        <div className="grid grid-flow-row gap-2">
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
        </div>

        <button
          type="submit"
          className="bg-[#1B1EE4] mt-4 rounded-3xl px-6 py-3 w-full text-white"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
