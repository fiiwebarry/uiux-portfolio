import user from "/src/assets/client.png";
import user2 from "/src/assets/client3.png";
import user3 from "/src/assets/client2.png";

const Feedback = () => {
  return (
    <section className=" md:py-20 py-10">
      <div className="grid gap-3 justify-items-center">
        <p className="bg-[#EBF2FF] px-5 py-3 rounded-2xl grid justify-items-center ">
          WHAT CLIENTS SAY
        </p>
        <p className="text-[#6B7280] font-bold md:text-5xl">Honest Feedback</p>
        <p className="text-[#1F1F1F] md:text-6xl">From Valued People</p>
        <p className="text-[#6B7280] md:text-2xl text-center md:w-1/2">
          Real feedback from businesses and individuals who trusted my content
          to elevate their brands. Their words reflect the impact of my work.
        </p>
      </div>
      <div className=" md:max-w-7xl mx-auto md:justify-normal justify-items-center grid md:grid-flow-col gap-4 md:gap-10 mt-6">
        <div className="grid gap-3">
          <img src={user} alt="user" />
          <img src={user2} alt="user" />
          <img src={user3} alt="user" />
        </div>
        <div className="">
          <p className="text-[#1F1F1F] md:text-4xl">
            Benny didn’t just design screens he helped us think clearly about
            our product.”
          </p>
          <p className="mt-6 md:text-xl">
            From the very first session, Benny focused on understanding our
            users, goals, and constraints before touching any UI. He challenged
            our assumptions in a constructive way and helped us simplify complex
            ideas into clear, usable flows. The final designs were clean,
            intuitive, and aligned perfectly with our vision. Our users
            immediately noticed the improvement, and internal alignment became
            much easier.
          </p>
          <div className="md:pt-52  pt-4">
            <p>Wisdom Okposin</p>
            <p>Startup Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
