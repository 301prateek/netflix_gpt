import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingHook = () => {
  const dispatch = useDispatch();

  const apiKey = import.meta.env.VITE_READ_ACCESS_TMDB_KEY;
  console.log("TMDB API Key:", import.meta.env);

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const data = await response.json();
      dispatch(setNowPlayingMovies(data.results));
      console.log("Now Playing Movies Data:", data.results);
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingHook;
