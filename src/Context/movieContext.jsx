import getRandomMovie from "../UtilityFuctions/getRandomMovie";

import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=e65b7396&s=${query}`
        );
        const data = await res.json();
        console.log("With Search Query: ", data.Search);
        setMovies(data.Search);
        setLoading(false);
      } else {
        let randomMovie = getRandomMovie();
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=e65b7396&s=${randomMovie}`
        );
        const data = await res.json();
        console.log("In Initial State: ", data.Search);
        setMovies(data.Search);
        setLoading(false);
      }
    };

    const delay = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <MovieContext.Provider value={{ movies, loading, query, setQuery }}>
      {children}
    </MovieContext.Provider>
  );
};
