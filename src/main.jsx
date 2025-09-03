import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import { MovieContextProvider } from "./Context/movieContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <ToastContainer />
    <RouterProvider router={router} />
  </MovieContextProvider>
);
