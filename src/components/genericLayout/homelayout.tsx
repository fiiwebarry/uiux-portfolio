import Inspired from "../reusable/inspired";
import Footer from "./footer";
import GenericNavbar from "./genericNavbar";
import Sidebar from "./sideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import { useLocation } from "react-router-dom";
import Onboarding from "../casestudies/sigyn/onboarding";
import OtherScreens from "../casestudies/sigyn/otherScreens";
import Projects from "../casestudies/sigyn/projects";
import Style from "../casestudies/sigyn/style";
import Wireframes from "../casestudies/sigyn/wireframes";
import Webflow from "../casestudies/sigyn/webflow";
import Challenges from "../casestudies/sigyn/challenges";

const HomeLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSigynCase = location.pathname === "/sigyncase";
  const isDigitalCase = location.pathname === "/digitalcase";

  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      {showSideBar && <Sidebar onToggleSideBar={toggleSideBar} />}
      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <ScrollToTop />
        {/* Section with navbar + hero background */}
        {isHome && (
          <section className="bg-[url('/image/hero-image.png')] bg-cover bg-center">
            <GenericNavbar
              onToggleSideBar={toggleSideBar}
              showSideBar={showSideBar}
            />
            {/* This Outlet section will render any home page content that should share the background */}
            <div className="flex flex-col">
              <Outlet context={{ showSideBar, toggleSideBar }} />
            </div>
          </section>
        )}
        {/* Other sections of the page (not sharing the background) */}
        {isHome && (
          <main className="flex-1 md:p-6 p-8">
            <Inspired />
          </main>
        )}
        {/* isSigyncase */}
        {isSigynCase && (
          <section className="bg-[#F8F8F8]">
            <GenericNavbar
              onToggleSideBar={toggleSideBar}
              showSideBar={showSideBar}
            />

            {/* This Outlet section will render any home page content that should share the background */}
            <div className="flex flex-col">
              <Outlet context={{ showSideBar, toggleSideBar }} />
            </div>
          </section>
        )}
        {isSigynCase && (
          <main className="">
            <Webflow />
            <Challenges />
            <Style />
            <Wireframes />
            <Onboarding />
            <OtherScreens />
            <Projects />
          </main>
        )}
        {/* isDigitalCase */}
        {isDigitalCase && (
          <section className="bg-[#111827]">
            <GenericNavbar
              onToggleSideBar={toggleSideBar}
              showSideBar={showSideBar}
            />

            {/* This Outlet section will render any home page content that should share the background */}
            <div className="flex flex-col">
              <Outlet context={{ showSideBar, toggleSideBar }} />
            </div>
          </section>
        )}
        {isDigitalCase && (
          <main className="flex-1 md:p-6 p-8 opacity-0">
            <Webflow />
            <Challenges />
            <Style />
            <Wireframes />
            <Onboarding />
            <OtherScreens />
            <Projects />
          </main>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
