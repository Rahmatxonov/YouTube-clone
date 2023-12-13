import React, { useEffect, useState } from "react";
import axios from "axios";
import "../sass/VideoCard.scss";

const VideoCard = () => {
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/playlistItems",
        params: {
          playlistId: "RDZiQo7nAkQHU",
          part: "snippet",
          maxResults: "50",
        },
        headers: {
          "X-RapidAPI-Key":
            "edd5784d3emsh13987b38c01438cp175989jsn1089ccb43ec1",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const result = response.data.items;
        setPlaylistItems(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="videosCard">
      {playlistItems.map((item) => (
        <div key={item.id}>
          <h3>{item.snippet.title}</h3>
          <img
            src={item.snippet.thumbnails.default.url}
            alt={item.snippet.title}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
