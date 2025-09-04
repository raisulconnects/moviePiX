import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import { MovieContextProvider } from "./Context/movieContext.jsx";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./Context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <MovieContextProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </MovieContextProvider>
  </AuthContextProvider>
);
