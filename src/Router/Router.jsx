import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Favourite from "../Pages/Favourite";
import ErrorPage from "../Pages/ErrorPage";
import RootLayout from "./RootLayout";
import Movies from "../Pages/Movies";
import MoreMovieDetails from "../Pages/MoreMovieDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "*", element: <ErrorPage /> },
      { path: "/home", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/movies", element: <Movies /> },
      { path: "/favourite", element: <Favourite /> },
      { path: "/more-details/:imdbID", element: <MoreMovieDetails /> },
    ],
  },
]);
