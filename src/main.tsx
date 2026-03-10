/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/genericLayout/layout";
import Contact from "./pages/contact";
import CaseStudy from "./pages/casestudies";
import About from "./pages/about";
import Home from "./pages/home";
import HomeLayout from "./components/genericLayout/homelayout";
import Services from "./pages/services";
import DigitalCase from "./pages/digitalCase";
import SigynCase from "./pages/sigynCase";

const router = createBrowserRouter([
  {
    element: (
      <HomeLayout
        heroBgClass="bg-[url('/image/hero-image.png')] bg-cover bg-center"
        navbarBgClass="bg-transparent"
        showInspired
      />
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: (
      <HomeLayout
        heroBgClass="bg-[#0F172A]"
        navbarBgClass="bg-black/60"
        showInspired={false}
      />
    ),
    children: [
      {
        path: "/digitalcase",
        element: <DigitalCase />,
      },
    ],
  },
  {
    element: (
      <HomeLayout
        heroBgClass="bg-[#111827]"
        navbarBgClass="bg-black/60"
        showInspired={false}
      />
    ),
    children: [
      {
        path: "/sigyncase",
        element: <SigynCase />,
      },
    ],
  },
  {
    element: (
      <>
        <Layout>
          <Outlet />
        </Layout>
      </>
    ),
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/casestudy",
        element: <CaseStudy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
