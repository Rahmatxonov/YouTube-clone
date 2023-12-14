// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../sass/VideoCard.scss";

// const VideoCard = () => {
//   const [playlistItems, setPlaylistItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: "GET",
//         url: "https://youtube-v31.p.rapidapi.com/search",
//         params: {
//           q: "music",
//           part: "snippet,id",
//           regionCode: "US",
//           maxResults: "50",
//           order: "date",
//         },
//         headers: {
//           "X-RapidAPI-Key":
//             "edd5784d3emsh13987b38c01438cp175989jsn1089ccb43ec1",
//           "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         const result = response.data.items;
//         setPlaylistItems(result);
//         console.log(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="videosCard">
//       {playlistItems.map((item) => (
//         <div key={item.id}>
//           <h3>{item.snippet.title}</h3>
//           <img
//             src={item.snippet.thumbnails.default.url}
//             alt={item.snippet.title}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoCard;

////////////////////

import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "../sass/VideoCard.scss";

const VideoCard = () => {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
          q: "music",
          part: "snippet,id",
          regionCode: "US",
          maxResults: "50",
          order: "date",
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
        setLoading(false);
        console.log(result);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setError("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div class="loader">
        <div class="loader__element"></div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="videosCard">
      {playlistItems.map((item) => (
        <div key={item.id}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            controls
            width="100%"
            height="auto"
          />
          s <h3>{item.snippet.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
