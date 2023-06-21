import React from "react";

const VideoPlayer = ({ link, setVideoPlayer }) => {
  console.log(link,"and", setVideoPlayer)
  return (
    <div
      className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-dark bg-opacity-10 w-screen backdrop-blur"
      onClick={() => setVideoPlayer(null)}
    >
      <div className="realtive w-11/12 rounded-lg p-6 h-[80vh] flex flex-col justify-center items-center bg-transparent bg-opacity-50 overflow-y-auto md:p-2"  onClick={() => setVideoPlayer(null)}>
      <iframe src={link}
       className="w-10/12 h-full md:max-h-[345px] md:w-full">
      </iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
