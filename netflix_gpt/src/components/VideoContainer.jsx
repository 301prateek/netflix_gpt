import React, { useEffect, useState } from "react";

const VideoContainer = ({ mainMovie }) => {
  const apiKey6 = import.meta.env.VITE_READ_ACCESS_TMDB_KEY;
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchTrailer = async () => {
      try {
        const movieId = mainMovie.id;
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${apiKey6}`,
            },
          }
        );
        const data = await res.json();
        const trailers = data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        const filtered = trailers.length ? trailers[0] : data.results[0];
        if (isMounted) {
          setTrailerId(filtered.key);
        }
        console.log("VideoContainer Props:", filtered);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();

    return () => {
      isMounted = false;
    };
  }, [mainMovie]);

  return (
    <div className="w-screen">
      {trailerId && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerId}?si=cALsg1D7N2drBKLg`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoContainer;
