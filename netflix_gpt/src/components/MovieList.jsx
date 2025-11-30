import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, list }) => {
  console.log("MovieList Props:", { title, list });
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          {list?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
