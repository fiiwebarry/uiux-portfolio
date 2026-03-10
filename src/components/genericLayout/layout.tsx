import Footer from "./footer";
import Navbar from "./navbar";
import GenericNavbar from "./genericNavbar";
import ScrollToTop from "./scrollToTop";
import Sidebar from "./sideBar";
import type { ReactNode } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { pathname } = useLocation();

  const isHomePath = pathname === "/";

  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  const NavbarComponent = isHomePath ? GenericNavbar : Navbar;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {showSideBar && <Sidebar onToggleSideBar={toggleSideBar} />}

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <ScrollToTop />

        {/* Navbar */}
        <NavbarComponent onToggleSideBar={toggleSideBar} showSideBar={showSideBar} />

        {/* Page content */}
        <main className="flex-1 md:p-6">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
