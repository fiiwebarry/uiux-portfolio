const Onboarding = () => {
  return (
    <section className="mx-auto md:max-w-7xl md:py-20">
      <div className="grid md:grid-cols-2 md:gap-64">
        <div>
          <p className="text-3xl md:text-6xl md:w-1/2">Messaging Screens</p>
        </div>

        <div>
          <p className="text-lg md:text-2xl text-[#6B7280] md:w-11/12">
            The messaging screens in Sigyn are crafted to be clear and
            efficient, ensuring users can quickly send, receive, and track
            messages even in low-connectivity conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
