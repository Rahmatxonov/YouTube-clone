import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoCard from "../components/VideoCard";
import HomePage from "./HomePage";
import "../sass/VideoCard.scss";

const Trending = ({ playlistItem }) => {
  const videoId = useParams().videoId;

  if (!playlistItem) {
    return (
      <div className="loader">
        <div className="loader__element"></div>
      </div>
    );
  }

  return (
    <div className="videosCard">
      <HomePage />
      {videoId ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
        />
      ) : (
        playlistItem.map((item) => <VideoCard key={item.id} video={item} />)
      )}
    </div>
  );
};

export default Trending;
