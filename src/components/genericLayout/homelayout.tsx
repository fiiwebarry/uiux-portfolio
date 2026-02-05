import { PRODUCT_SCHEMA } from "../../utils/constants";
import Inspired from "../reusable/inspired";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

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
        {/* Section with navbar + hero background */}
        <section className="bg-[url('/image/hero-image.png')] bg-cover bg-center">
          <Navbar onToggleSideBar={toggleSideBar} showSideBar={showSideBar} />

          {/* This Outlet section will render any home page content that should share the background */}
          <div className="flex flex-col">
            <Outlet context={{ showSideBar, toggleSideBar }} />
          </div>
        </section>

        {/* Other sections of the page (not sharing the background) */}
        <main className="flex-1 md:p-6">
          <Inspired />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
