import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ReactDOM from "react-dom/client";
import { Home } from "./Home";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Noodle } from "./Noodle";
import { Climbing } from "./Climbing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
    {
    path: "/Noodle",
    element: <Noodle/>,
  },
    {
    path: "/Climbing",
    element: <Climbing/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
