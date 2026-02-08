import Footer from "./footer";
import Navbar from "./navbar";
import ScrollToTop from "./scrollToTop";
import Sidebar from "./sideBar";
import type { ReactNode } from "react";
import { useState } from "react";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      {showSideBar && <Sidebar onToggleSideBar={toggleSideBar} />}

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <ScrollToTop />
        {/* Navbar */}
        <Navbar onToggleSideBar={toggleSideBar} showSideBar={showSideBar} />

        {/* Page content */}
        <main className="flex-1 md:p-6">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
