import { PRODUCT_SCHEMA } from "../../utils/constants";
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
          {/* hero section */}
          <div className="grid py-10 md:max-w-7xl md:mx-auto gap-5 justify-items-center">
            <p className="  border border-[#EBF2FF] py-3 px-6 rounded-3xl bg-[#EBF2FF] text-[#1B1EE4]">
              {" "}
              More Hand-picked highlights
            </p>
            <p className="text-center text-[#1F1F1F] md:w-1/2 md:text-6xl">
              Get inspired
            </p>
            <p className="text-center md:w-9/12 md:text-2xl text-[#1F2937]">
              A selection of projects that demonstrate how user-centered design
              solved real problems and delivered measurable results.
            </p>
          </div>
          {/* product */}
          <div className="grid md:grid-cols-2 gap-9 md:max-w-7xl py-10  md:mx-auto">
            {PRODUCT_SCHEMA.map((r, i) => {
              return (
                <div key={i} className="grid gap-5 ">
                  <span className="bg-[#F0F4F9] rounded-3xl">
                    <img src={r.image} alt="icon" />
                  </span>
                  <div className="grid grid-flow-col items-center w-max gap-3">
                    <p className="bg-[#1B1EE4]  text-white border border-[#1B1EE4] rounded-3xl py-3 px-5 md:px-7">
                      {r.slug}
                    </p>
                    <p className="text-[#FF6C63] border border-[#FF6C63] rounded-3xl py-3  px-5 md:px-7">
                      {r.header}
                    </p>
                  </div>
                  <p className="text-[#1F1F1F] mt-4 text-xl">{r.content}</p>
                </div>
              );
            })}
          </div>
          <div className="grid justify-items-center md:mt-4">
            <button className="bg-[#1B1EE4] border text-white px-9 py-3 rounded-3xl border-[#1B1EE4]">
              {" "}
              SEE MORE CASE STUDIES
            </button>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
