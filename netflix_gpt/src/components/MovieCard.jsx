import React from "react";

const MovieCard = ({ movie }) => {
  console.log("MovieCard Movie:", movie.poster_path);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
