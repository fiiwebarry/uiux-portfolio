import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import icon from "/src/assets/empowering.png";
import user from "/src/assets/user-image.png";
import workstation from "/src/assets/station.png";

const About = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const ToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto py-20 ">
        <div className="grid grid-flow-col w-max gap-1 items-center md:mb-10">
          <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
          <p className="text-[#1F1F1F] text-xl">About Me</p>
        </div>
        <div className="grid grid-flow-col gap-7">
          <div className="grid gap-5">
            <p className="italic text-[#1B1EE4] text-xl">
              LET'S START WITH A SMALL RIDDLE
            </p>
            <h1 className="text-[#1F1F1F] text-6xl w-7/12">
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
          <div>
            <img src={user} alt="user" />
          </div>
        </div>
      </div>

      {/* how i think about a design */}
      <div className="bg-[#111827] md:-mx-6  px-4 -mx-5 ">
        <div className=" max-w-7xl mx-auto grid  py-10">
          <div className="grid gap-8">
            <p className="text-[#F59E0B] italic font-bold text-sm">ABOUT ME</p>
            <p className="text-white text-6xl">My Story</p>
            <p className="ml-9 text-[#F59E0B] font-bold text-xl">
              LET'S START WITH A SMALL TRUTH.
            </p>
            <p className="text-[#FFFFFF] font-bold text-[56px] border-l-4 border-[#1B1EE4] md:pl-9 ">
              I believe great design isn't about making things pretty, it's
              about solving problems elegantly.
            </p>
          </div>

          <span className="py-10">
            <img src={workstation} alt="station" />
          </span>

          <div className=" grid gap-9 text-[#D1D5DB] text-2xl">
            <div>
              <span className="text-[#F59E0B]">Short version?</span>
              <p>I design products that make sense.</p>
            </div>
            <div>
              <span className="text-[#F59E0B]">Long version?</span>
              <p>
                {" "}
                I didn’t start out trying to be a designer. I started by
                noticing problems.
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Why is this confusing? </li>
              <li> Why did I click that and immediately regret it?</li>
              <li> Why does this look beautiful but feel broken? </li>
            </ul>
            <p>
              {" "}
              With an engineering background and a habit of asking why one too
              many times, I found my way into product design where structure
              meets empathy, and logic meets humans.
            </p>
            <p>
              {" "}
              I design digital experiences that feel obvious (in the best way).
              Every screen has a reason. Every interaction has intent. If a user
              has to pause and think too hard, something went wrong and I take
              that personally. (Politely. Professionally.)
            </p>
            <p> And I don’t stop at mockups.</p>
            <p>
              Using no-code tools, I turn ideas into real, working products
              quickly. This means faster feedback, fewer assumptions, and less
              “we’ll fix it later.” It also means fewer handoffs and more
              ownership from idea to execution. (Yes, things actually
              ship.){" "}
            </p>
            <p>
              I believe good design doesn’t scream for attention. It quietly
              works. And when done right, users don’t notice the design they
              just get things done.
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=" md:max-w-7xl mx-auto grid grid-cols-2 py-10">
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
            behind the screens: what they’re trying to do, where they get stuck,
            and what success looks like from their perspective. From there,
            ideas take shape as wireframes, flows, and prototypes, slowly
            evolving into polished interfaces that feel intuitive and
            purposeful. By the time a product is ready for delivery, it doesn’t
            just look finished. It feels considered, usable, and aligned with
            both user needs and business goals. Tiny truth: good design doesn’t
            feel designed it feels obvious.
          </p>
          <img src={icon} alt="icon" />
        </div>
      </div>
    </section>
  );
};

export default About;
