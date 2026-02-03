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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/casestudy",
        element: <CaseStudy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
