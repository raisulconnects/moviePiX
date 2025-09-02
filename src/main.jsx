import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import { MovieContextProvider } from "./Context/movieContext.jsx";

createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <RouterProvider router={router} />
  </MovieContextProvider>
);
