/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/genericLayout/layout";
import Contact from "./pages/contact";
import CaseStudy from "./pages/casestudies";

const router = createBrowserRouter([
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
