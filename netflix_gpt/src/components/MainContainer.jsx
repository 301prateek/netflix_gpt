import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlaying);
  if (movies === undefined || movies === null) return;
  console.log("Main Movie:", movies[0].title, movies[0].overview);

  const mainMovie = movies[0];

  return (
    <div className="relative">
      <VideoTitle mainMovie={mainMovie} />
      <VideoContainer mainMovie={mainMovie} />
    </div>
  );
};

export default MainContainer;
