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

  // API Fetching For Movies and Search
  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        const data = await res.json();
        // console.log("With Search Query: ", data.Search);
        setMovies(data.Search);
        setLoading(false);
      } else {
        let randomMovie = getRandomMovie();
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${randomMovie}`
        );
        const data = await res.json();
        // console.log("In Initial State: ", data.Search);
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
    <MovieContext.Provider
      value={{
        movies,
        loading,
        query,
        setQuery,
        favMovies,
        setFavMovies,
        toggleFavourite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
