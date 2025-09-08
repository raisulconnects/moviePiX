import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import useAuthContext from "../Hooks/useAuthContext";
import getRandomMovie from "../UtilityFuctions/getRandomMovie";

import { createContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase/firebase";

// eslint-disable-next-line react-refresh/only-export-components
export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState();
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const { userLoggedIn } = useAuthContext();

  // ===== Infinite Scroll states =====
  const [page, setPage] = useState(1); // current page number
  const [hasMore, setHasMore] = useState(true); // whether more movies are available
  const [totalResults, setTotalResults] = useState(0);

  // For Managing Users Favourite add or Remove in Firebase DB itself
  const toggleFavourite = async (movie) => {
    if (!userLoggedIn) return; // only logged in users can save
    const userRef = doc(db, "users", auth.currentUser.uid);

    if (favMovies.find((m) => m.id === movie.id)) {
      // remove from fav
      setFavMovies(favMovies.filter((m) => m.id !== movie.id));
      await updateDoc(userRef, {
        fav: arrayRemove(movie), // movie already has title & id
      });
    } else {
      // add to fav
      setFavMovies([...favMovies, movie]);
      await updateDoc(userRef, {
        fav: arrayUnion(movie),
      });
    }
  };

  // Fecthing Users Favourite Movies from Database
  useEffect(() => {
    if (!userLoggedIn || !auth.currentUser) {
      setFavMovies([]);
      return;
    }

    const fetchUserFavMovies = async () => {
      let userFavDocReference = doc(db, "users", auth.currentUser.uid);

      const snap = await getDoc(userFavDocReference);

      if (snap.exists()) {
        setFavMovies(snap.data().fav || []);
      }
    };

    fetchUserFavMovies();
  }, [userLoggedIn]);

  // ===== New fetchMovies function for infinite scroll =====
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const searchTerm = query || getRandomMovie();
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies((prev) => [...prev, ...data.Search]); // append new results
        setTotalResults(Number(data.totalResults));
        setHasMore(
          movies.length + data.Search.length < Number(data.totalResults)
        );
        setPage((prev) => prev + 1); // increment page for next fetch
      } else {
        setHasMore(false); // no more movies
      }
    } catch (err) {
      console.error("Failed to fetch movies:", err);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Reset movies and pagination when query changes
  useEffect(() => {
    setMovies([]);
    setPage(1);
    setHasMore(true);
    fetchMovies(); // fetch first page for new query
  }, [query]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        query,
        setQuery,
        favMovies,
        setFavMovies,
        toggleFavourite,
        fetchMovies, // expose fetchMovies for infinite scroll
        hasMore, // expose hasMore for infinite scroll
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
