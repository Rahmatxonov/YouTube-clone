import React from "react";
import "../sass/Videos.scss";
import VideoCard from "./VideoCard";

const Videos = () => {
  return (
    <div className="videos">
      <h2 className="videos__title">Recomended</h2>
      <VideoCard />
    </div>
  );
};

export default Videos;
