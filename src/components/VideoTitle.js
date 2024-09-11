import React from "react";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[16%] px-20 w-full aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl w-2/4">{title}</h1>
      <p className="my-4 w-1/4 font-light">{description}</p>
      <div className="flex ">
        <div className="flex items-center px-5 py-2 cursor-pointer  bg-white text-black rounded hover:bg-gray-300">
          <FaPlay className="mr-2" />
          Play
        </div>
        <div className="flex items-center px-5 py-2 cursor-pointer font-bold bg-white text-black rounded mx-2 hover:bg-gray-300">
          <ImInfo className="mr-2" />
          More Info
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
