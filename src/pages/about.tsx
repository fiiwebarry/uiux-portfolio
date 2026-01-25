import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import icon from "/src/assets/empowering.png";

const About = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const ToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto py-3 ">
        <div className="grid gap-5">
          <div className="grid grid-flow-col w-max gap-1 items-center md:mb-10">
            <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
            <p className="text-[#1F1F1F] text-xl">About Me</p>
          </div>

          <p className="italic text-[#1B1EE4] text-xl">
            LET'S START WITH A SMALL RIDDLE
          </p>
          <h1 className="text-[#1F1F1F] text-6xl w-4/12">
            Why do users leave a product even when it looks good?
          </h1>
          {!showAnswer && (
            <div
              onClick={ToggleAnswer}
              className="grid grid-flow-col items-center cursor-pointer gap-3 w-max  text-[#F59E0B]"
            >
              <FaEye />
              <p className="text-xl">Show Answer</p>
            </div>
          )}

          {showAnswer && (
            <div className="grid gap-4">
              <p className="text-xl">
                Because beauty without{" "}
                <span className="text-[#1B1EE4]">clarity </span>is just
                decoration.
              </p>
              <p className=" w-5/12 text-xl">
                I'm a product designer who designs beyond the surface but
                focused on how things work, feel, and guide users{" "}
                <span className="text-[#1B1EE4]">
                  effortlessly from confusion to clarity.
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <hr className="text-[#0A0A0A1A] mt-6" />
      {/* how i think about a design */}
      <div className=" max-w-7xl mx-auto mt-9 grid gap-3 py-10">
        <p className="text-[#F59E0B] italic font-bold text-sm">MY PHILOSOPHY</p>
        <p className="text-[#1F1F1F] text-6xl">How I Think About Design</p>

        <div className="grid grid-cols-3 mt-10">
          <div className="border grid gap-3 border-[#495DFF] rounded-2xl p-4">
            <p className="font-bold text-6xl text-[#1B1EE4]">01</p>
            <p className="text-[#1F1F1F] text-2xl">Empathy</p>
            <p className="text-2xl text-[#6B7280]">
              I approach every project with empathy and intention. I start with
              the 'Why' before the 'What'.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div>
            <p>1 /</p>
            <p>Product Design</p>
          </div>
          <div>
            <p>
              Every product begins with a moment of uncertainty. Someone has an
              idea. A team has a goal. Users have needs they can’t quite
              articulate yet. That’s where I start. I step into the early, messy
              stage of product thinking when questions matter more than answers.
              Through discovery and research, I work to understand the people
              behind the screens: what they’re trying to do, where they get
              stuck, and what success looks like from their perspective. From
              there, ideas take shape as wireframes, flows, and prototypes,
              slowly evolving into polished interfaces that feel intuitive and
              purposeful. By the time a product is ready for delivery, it
              doesn’t just look finished. It feels considered, usable, and
              aligned with both user needs and business goals. Tiny truth: good
              design doesn’t feel designed it feels obvious.
            </p>
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
