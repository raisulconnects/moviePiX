import { useState } from "react";
import useMovieContext from "../Hooks/useMovieContext";

export default function Searchbar() {
  const { setQuery } = useMovieContext();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center mb-10">
      <label className="input w-1/4">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search your desired movie.."
          className=""
          value={searchInput}
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}
