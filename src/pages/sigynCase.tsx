import Challenges from "../components/casestudies/sigyn/challenges";
import Hero from "../components/casestudies/sigyn/hero";
import Onboarding from "../components/casestudies/sigyn/onboarding";
import OtherScreens from "../components/casestudies/sigyn/otherScreens";
import Projects from "../components/casestudies/sigyn/projects";
import Style from "../components/casestudies/sigyn/style";
import Webflow from "../components/casestudies/sigyn/webflow";
import Wireframes from "../components/casestudies/sigyn/wireframes";

const SigynCase = () => {
  return (
    <section>
      <Hero />
      <Webflow />
      <Challenges />
      <Style />
      <Wireframes />
      <Onboarding />
      <OtherScreens />
      <Projects />
    </section>
  );
};

export default SigynCase;
