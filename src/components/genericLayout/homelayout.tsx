import Inspired from "../reusable/inspired";
import Footer from "./footer";
import GenericNavbar from "./genericNavbar";
import Sidebar from "./sideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

const HomeLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false);

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

        {/* Other sections of the page (not sharing the background) */}
        <main className="flex-1 md:p-6 p-8">
          <Inspired />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
