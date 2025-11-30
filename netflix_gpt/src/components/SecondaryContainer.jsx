import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const list = useSelector((state) => state?.movies?.nowPlaying);
  if (list === undefined || list === null) return;
  console.log("Movie List:", list.map((movie) => movie.title).join(", "));

  return (
    <div>
      <MovieList title={"Now Playing"} list={list} />
    </div>
  );
};

export default SecondaryContainer;
