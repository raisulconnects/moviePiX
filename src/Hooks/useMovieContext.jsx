import { useContext } from "react";
import { MovieContext } from "../Context/movieContext";

export default function useMovieContext() {
  return useContext(MovieContext);
}
