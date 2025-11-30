import React, { useEffect } from "react";
import { TMDB_API_KEY, READ_ACCESS_TMDB_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingHook = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${READ_ACCESS_TMDB_KEY}`,
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
