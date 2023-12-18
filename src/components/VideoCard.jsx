// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ReactPlayer from "react-player";
// import { NavLink, useParams, useNavigate } from "react-router-dom";
// import "../sass/VideoCard.scss";

// const VideoCard = () => {
//   const { videoId } = useParams();
//   const [playlistItems, setPlaylistItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: "GET",
//         url: "https://youtube-v31.p.rapidapi.com/search",
//         params: {
//           channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
//           part: "snippet,id",
//           order: "date",
//           maxResults: "50",
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
//         setLoading(false);
//         console.log(result);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//         setError("Kechirasiz server xatoligi");
//       }
//     };

//     fetchData();
//   }, []);

//   const handleImageClick = (videoId) => {
//     navigate(`/trending/${videoId}`);
//   };

//   if (loading) {
//     return (
//       <div className="loader">
//         <div className="loader__element"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (playlistItems.length === 0) {
//     return <p>Hech qanday video topilmadi.</p>;
//   }

//   return (
//     <div className="videosCard">
//       {videoId ? (
//         <ReactPlayer
//           url={`https://www.youtube.com/watch?v=${videoId}`}
//           controls
//         />
//       ) : (
//         playlistItems.map((item) => (
//           <div className="videosCard__box" key={item.id.videoId}>
//             <NavLink to={`/trending/${item.id.videoId}`}>
//               <img
//                 src={item.snippet.thumbnails.default.url}
//                 alt={item.snippet.title}
//                 onClick={() => handleImageClick(item.id.videoId)}
//               />
//               <h3>{item.snippet.title}</h3>
//             </NavLink>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default VideoCard;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeDetail() {
  const params = useParams();
  const [videos, setVideos] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const [channel, setChannel] = useState(null);
  const goPage = useNavigate();

  const relatedVideosUrl =
    "https://youtube-v3-alternative.p.rapidapi.com/trending";
  const videoDetailsUrl = `https://youtube-v31.p.rapidapi.com/videos?id=${params.videoId}&part=contentDetails%2Csnippet%2Cstatistics`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c2f6b51631msh8e553a8cbc46edep199347jsnde38d0389611",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  const options2 = {
    ...options,
    headers: {
      ...options.headers,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const options3 = {
    ...options,
    headers: {
      ...options.headers,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  async function GET(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }

  async function getData(url, options) {
    const data = await GET(url, options);
    setVideos(data.data);
  }

  async function GetAllData() {
    const details = await GET(videoDetailsUrl, options2);
    setVideoInfo(details);

    const channelId = details.items[0]?.snippet.channelId;
    if (channelId) {
      const channelRes = await GET(
        `https://youtube-v31.p.rapidapi.com/channels?id=${channelId}`,
        options3
      );
      setChannel(channelRes);
    }
  }

  useEffect(() => {
    getData(relatedVideosUrl, options);
    GetAllData();
    console.log("RENDERED");
  }, [params]);

  return (
    <>
      <div className="homeDetail">
        <div className="homeDetailVideo">
          <iframe
            className="detailVideo"
            src={`https://www.youtube.com/embed/${params.videoId}`}
            frameBorder="0"
          ></iframe>
          <p>{videoInfo?.items[0]?.snippet.title}</p>
          <div className="statistics">
            <p>{videoInfo?.items[0]?.statistics.viewCount}</p>
            <div>
              <span>
                <img src="" alt="like" />
                {videoInfo?.items[0]?.statistics.likeCount}
              </span>
              <span>
                <img src="" alt="dislike" />
                {videoInfo?.items[0]?.statistics.favoriteCount}
              </span>
              <span>
                <img src="" alt="share" />
              </span>
            </div>
          </div>
          <div className="channels">
            <div>
              <div>
                {channel && (
                  <img
                    src={channel.items[0]?.snippet.thumbnails.default.url}
                    alt=""
                  />
                )}
                <span>
                  <p></p>
                  <p></p>
                </span>
              </div>
            </div>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="homeDetailCards">
          {videos?.map((url) => (
            <div
              className="video"
              onClick={() => {
                goPage(`/home${url.videoId}`);
              }}
            >
              <div className="videoTime">
                <img src={url.thumbnail[0]?.url} alt="" />
                <span>{url.lengthText}</span>
              </div>
              <p>{url.title}</p>
              <div className="detailTitles">
                <span>{url.publishedText}</span>
                <span>{url.channelTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
