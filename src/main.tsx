import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/About.tsx";
import Properties from "./pages/Properties.tsx";
import Services from "./pages/Services.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
