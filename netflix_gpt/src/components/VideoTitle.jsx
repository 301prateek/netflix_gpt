import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props.mainMovie;
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black/90 to-black/1 w-full h-full">
      <h1 className="text-4xl px-12 pt-[25%]">{title}</h1>
      <p className="px-12 py-6 w-1/4 text-xs h-min">{overview}</p>
      <div className="px-12 relative">
        <button className="bg-white text-black w-18 h-8 text-xs rounded-md hover:bg-opacity-90">
          ▶ Play
        </button>
        <button className="bg-gray-100 text-black w-18 h-8 text-xs bg-opacity-60 ml-8 rounded-md hover:bg-opacity-90">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
