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

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/digitalcase",
        element: <DigitalCase />,
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
