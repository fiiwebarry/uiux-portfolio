import content from "/src/assets/Content.png";

const Advantage = () => {
  return (
    <section className="py-20">
      <div className="grid gap-3 justify-items-center">
        <p className="bg-[#EBF2FF] px-5 py-3 rounded-2xl grid justify-items-center ">
          THE ADVANTAGE
        </p>
        <p className="text-[#6B7280] font-bold md:text-5xl">Why Work With Me</p>
        <p className="text-[#1F1F1F] md:text-6xl">From Valued People</p>
        <p className="text-[#6B7280] md:text-2xl text-center md:w-1/2">
          I combine strategic thinking with execution excellence to deliver
          designs that move the needle on your most important metrics.
        </p>
        <span className="mt-6">
          <img src={content} alt="content" />
        </span>
        <div className="grid md:max-w-7xl mt-5 mx-auto grid-cols-3 gap-3">
          {[...Array(3)].map(() => {
            return (
              <div className="grid justify-items-center">
                <p>Empathy</p>
                <p className="text-center md:w-7/12">
                  I approach every project with empathy and intention. I start
                  with the 'Why' before the 'What'.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
