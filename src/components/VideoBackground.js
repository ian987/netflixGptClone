import React from "react";
import useTrailerVideos from "../hooks/useTrailerVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ trailerId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useTrailerVideos(trailerId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
