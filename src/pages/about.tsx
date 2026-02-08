import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import icon from "/src/assets/empowering.png";
import user from "/src/assets/user-image.png";
import workstation from "/src/assets/station.png";
import { EXPERIENCE_SCHEMA, EXPERTISE } from "../utils/constants";
import { PiDownloadBold } from "react-icons/pi";
import figma from "/src/assets/figma.png";

const About = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const EXPERTISE_ROWS = [
    EXPERTISE.slice(0, 6),
    EXPERTISE.slice(6, 11),
    EXPERTISE.slice(11, 15),
    EXPERTISE.slice(15, 18),
    EXPERTISE.slice(18, 20),
    EXPERTISE.slice(20, 21),
  ];

  const ToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <section className=" md:mb-10 md:p-0 p-5">
      <div className="md:max-w-7xl mx-auto md:py-10 ">
        <div className="grid grid-flow-col w-max gap-1 items-center md:mb-5">
          <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
          <p className="text-[#1F1F1F] text-xl">About Me</p>
        </div>
        <div className="grid md:grid-flow-col mt-2 gap-7 md:py-10 md:mb-12">
          <div className="grid gap-5">
            <p className="italic text-[#1B1EE4] md:text-xl">
              LET'S START WITH A SMALL RIDDLE
            </p>
            <h1 className="text-[#1F1F1F] md:text-6xl md:w-6/12">
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
                <p className="md:text-xl">
                  Because beauty without{" "}
                  <span className="text-[#1B1EE4]">clarity </span>is just
                  decoration.
                </p>
                <p className=" md:w-5/12 md:text-xl">
                  I'm a product designer who designs beyond the surface but
                  focused on how things work, feel, and guide users{" "}
                  <span className="text-[#1B1EE4]">
                    effortlessly from confusion to clarity.
                  </span>
                </p>
              </div>
            )}
          </div>
          <span className="rounded-full bg-amber-900 object-cover md:mb-0 mb-9">
            <img src={user} className="rounded-full object-cover" alt="user" />
          </span>
        </div>
      </div>
      {/* how i think about a design */}
      <div className="bg-[#121454] md:-mx-6  px-7 -mx-5 ">
        <div className=" max-w-7xl mx-auto grid md:py-20 py-10">
          <div className="grid gap-4 md:gap-8">
            <p className="text-[#F59E0B] italic font-bold md:text-sm">
              ABOUT ME
            </p>
            <p className="text-white md:text-6xl">My Story</p>
            <p className="md:ml-10 md:mt-8 text-[#F59E0B] font-bold md:text-xl">
              LET'S START WITH A SMALL TRUTH.
            </p>
            <p className="text-[#FFFFFF] font-bold md:text-[52px] border-l-4 border-[#1B1EE4] pl-4 md:pl-9 ">
              I believe great design isn't about making things pretty, it's
              about solving problems elegantly.
            </p>
          </div>

          <span className="py-10 md:mt-6 mt-2">
            <img className="rounded-4xl" src={workstation} alt="station" />
          </span>

          <div className=" grid gap-9 text-[#D1D5DB] md:mb-16 md:text-2xl">
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
      {/* product design */}
      <div className=" md:max-w-7xl md:pt-20 md:p-0 p-5 mx-auto grid md:grid-cols-2 gap-2  py-10 md:py-20">
        <div>
          <p className="text-[#6B7280] font-bold md:text-xl">1 /</p>
          <p className="text-[#1F1F1F] font-bold md:text-3xl">Product Design</p>
        </div>
        <div className="md:border-l grid gap-5 text-[#1F2937] md:text-xl border-[#D1D5DB] md:pl-40">
          <p> Every product begins with a moment of uncertainty.</p>
          <p>
            Someone has an idea. A team has a goal. Users have needs they can’t
            quite articulate yet. That’s where I start. I step into the early,
            messy stage of product thinking when questions matter more than
            answers.
          </p>
          <p>
            Through discovery and research, I work to understand the people
            behind the screens: what they’re trying to do, where they get stuck,
            and what success looks like from their perspective. From there,
            ideas take shape as wireframes, flows, and prototypes, slowly
            evolving into polished interfaces that feel intuitive and
            purposeful.
          </p>
          <p>
            By the time a product is ready for delivery, it doesn’t just look
            finished. It feels considered, usable, and aligned with both user
            needs and business goals.
          </p>
          <p>
            <span className="text-[#1B1EE4]">Tiny truth: </span>good design
            doesn’t feel designed it feels obvious.
          </p>
          <span className="mt-8">
            <img src={icon} alt="icon" />
          </span>
        </div>
      </div>
      {/*UX Strategy*/}
      <div className=" md:max-w-7xl md:pt-20 md:p-0 p-5 mx-auto grid gap-2 md:grid-cols-2 py-10">
        <div>
          <p className="text-[#6B7280] font-bold md:text-xl">2 /</p>
          <p className="text-[#1F1F1F] font-bold md:text-3xl">UX Strategy</p>
        </div>
        <div className="md:border-l grid gap-5 text-[#1F2937] md:text-xl border-[#D1D5DB] md:pl-40">
          <p> Not every product needs a redesign.</p>
          <p>
            Some just need clarity. When a product already exists but isn’t
            performing as expected, I shift into listening mode. I analyze
            flows, review user behavior, and audit the experience to uncover
            where friction lives and why it keeps showing up.
          </p>
          <p>I ask uncomfortable but necessary questions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Why are users dropping off here? </li>
            <li> Why is this feature ignored?</li>
            <li>Why does this flow feel harder than it should?</li>
          </ul>
          <p>
            The outcome isn’t guesswork or vague recommendations. It’s a clear,
            actionable UX roadmap prioritized improvements that help teams make
            confident decisions, reduce friction, and move forward with
            intention.
          </p>
          <p>
            {" "}
            Design strategy
            <span className="text-[#1B1EE4]">
              {" "}
              isn’t about more features.
            </span>{" "}
            It’s about
            <span className="text-[#1B1EE4]"> better ones.</span>
          </p>
          <span className="mt-8">
            <img src={icon} alt="icon" />
          </span>
        </div>
      </div>
      {/*Design Systems*/}
      <div className=" md:max-w-7xl md:pt-20 md:p-0 p-5 mx-auto  gap-2 md:mb-20 grid md:grid-cols-2 py-10">
        <div>
          <p className="text-[#6B7280] font-bold md:text-xl">3/</p>
          <p className="text-[#1F1F1F] font-bold md:text-3xl">Design Systems</p>
        </div>
        <div className="md:border-l grid gap-5 text-[#1F2937] md:text-xl border-[#D1D5DB] md:pl-40">
          <p>As products grow, design can either scale… or slowly unravel.</p>
          <p>
            What starts as a few screens becomes dozens. Buttons change.
            Patterns drift. Teams spend more time fixing inconsistencies than
            solving new problems. That’s when design systems stop being “nice to
            have” and start becoming essential.
          </p>
          <p>
            I build design systems that bring structure without slowing teams
            down. From reusable components to clear usage guidelines, I create
            systems that help products stay consistent, efficient, and
            recognizable as they evolve.
          </p>
          <p>
            A good design system doesn’t limit creativity. It removes friction
            so teams can focus on building meaningful experiences instead of
            reinventing the same UI decisions over and over again.
          </p>
          <p>
            <span className="text-[#1B1EE4]"> Consistency isn’t boring.</span>{" "}
            Inconsistency
            <span className="text-[#1B1EE4]"> is exhausting.</span>
          </p>
          <span className="mt-8">
            <img src={icon} alt="icon" />
          </span>
        </div>
      </div>
      <div className="bg-[#111827] md:py-20 py-10 md:-mx-6 -mx-5">
        <div className=" md:max-w-7xl md:p-0 p-5 grid gap-7 justify-items-center md:mb-20  mx-auto">
          <div>
            <p className="text-[#F59E0B] font-bold md:text-2xl">
              MY PHILOSOPHY
            </p>
          </div>
          <div className=" grid gap-2 relative md:w-8/12 text-center">
            <p className="text-[#FFFFFF] italic font-bold md:text-2xl">
              GREAT DESIGN ISN'T JUST ABOUT MAKING THINGS LOOK BEAUTIFUL{" "}
            </p>
            <span className=" md:block hidden absolute  -top-12 md:-left-32 md:text-[210px] text-[#1B1EE4] font-bold leading-none">
              “{" "}
            </span>
            <span className=" font-bold md:text-4xl md:leading-14  text-[#FFFFFF]">
              IT'S ABOUT SOLVING REAL PROBLEMS FOR REAL PEOPLE. EVERY PIXEL,
              EVERY INTERACTION, EVERY DECISION SHOULD SERVE A PURPOSE AND
              CREATE VALUE.
            </span>
            <span className=" md:block hidden md:absolute  md:-bottom-28 md:-right-32 md:text-[210px] text-[#1B1EE4] font-bold leading-none">
              ”{" "}
            </span>
          </div>
        </div>
        {/* Credentials */}
        <div className="md:max-w-7xl md:p-0 p-6 md:pt-20 grid gap-5 mx-auto md:px-6">
          <p className="text-[#F59E0B] font-bold italic ">CREDENTIALS</p>
          <div className="grid grid-flow-col p-3 md:p-0 justify-between">
            <p className="text-[#FFFFFF] md:text-5xl">Background</p>
            <button className="border  hover:bg-[#3D3D3D] hover:border-[#3D3D3D]  border-[#F59E0B] grid grid-flow-col gap-4 md:text-xl items-center px-5 py-3 rounded-3xl text-[#F59E0B]">
              VIEW RESUME
              <PiDownloadBold />
            </button>
          </div>
          <div className="grid md:grid-cols-2 md:p-0 p-2 gap-5 ">
            <div className="bg-[#1B1EE433] p-3 md:p-5 rounded-2xl">
              <p className="text-[#FFFFFF] md:text-2xl">Experience</p>
              <div className="grid grid-flow-col w-max gap-1 items-center ">
                <span className="h-1 w-4 rounded-full bg-linear-to-r from-[#1B1EE4] via-[#FF6C63] to-white"></span>
                <p className="text-white md:text-xl">04</p>
              </div>
              <hr className="bg-white text-white md:mb-6" />
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1.5 top-0 h-full w-px bg-white/30" />
                <ul className="space-y-8">
                  {EXPERIENCE_SCHEMA.map((item, i) => (
                    <li key={i} className="relative flex gap-6">
                      {/* Dot */}
                      <span className="relative z-10 mt-1 h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-indigo-400/20" />

                      {/* Content */}
                      <div className="flex w-full justify-between">
                        <div>
                          <h3 className="font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-white/70">{item.role}</p>
                        </div>

                        <span className="text-sm text-white/50">
                          {item.date}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#1B1EE433] grid gap-6 p-2 md:p-5 rounded-2xl">
              <p className="text-[#FFFFFF] md:text-2xl">Education</p>{" "}
              <hr className="bg-white text-white" />
              <ul className="space-y-8">
                {EXPERIENCE_SCHEMA.map((item, i) => (
                  <li key={i} className="relative flex gap-6">
                    {/* Content */}
                    <div className="flex w-full justify-between">
                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/70">{item.role}</p>
                      </div>

                      <span className="text-sm text-white/50">{item.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Expertise */}
      <div className="md:mt-14 grid gap-2 md:max-w-7xl md:px-6 mx-auto">
        <p className="text-[#1F1F1F] font-bold md:text-6xl">Expertise</p>
        <p className="text-[#1F2937] md:text-xl">
          Skills and technologies I work with
        </p>
      </div>

      <div className="flex flex-col mt-20 items-center gap-4 ">
        {EXPERTISE_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex  gap-7 flex-wrap">
            {row.map((skill, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#1F2937] text-sm md:text-base hover:border-[#1B1EE4] transition"
              >
                <span className="" />
                <img src={figma} alt="figma" />
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
