// VideoCard Videolar //

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
//   if (loading) {
//     return (
//       <div class="loader">
//         <div class="loader__element"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="videosCard">
//       {playlistItems.map((item) => (
//         <div key={item.id}>
//           <ReactPlayer
//             url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
//             controls
//             width="100%"
//             height="auto"
//           />{" "}
//           <h3>{item.snippet.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoCard;

// VideoCard Rasmlar //

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ReactPlayer from "react-player";
// import "../sass/VideoCard.scss";

// const VideoCard = () => {
//   const [playlistItems, setPlaylistItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

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
//         setError("Error fetching data. Please try again.");
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div class="loader">
//         <div class="loader__element"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="videosCard">
//       {playlistItems.map((item) => (
//         <di className="videosCard__box" key={item.id}>
//           <img
//             src={item.snippet.thumbnails.default.url}
//             alt={item.snippet.title}
//           />
//           <h3>{item.snippet.title}</h3>
//         </di>
//       ))}
//     </div>
//   );
// };

// export default VideoCard;

// Header //

// import React, { useState } from "react";
// import "../sass/Header.scss";
// import SearchIcon from "@material-ui/icons/Search";
// import humberger from "../assets/icons/humberger.svg";
// import logo from "../assets/icons/logo.svg";
// import video from "../assets/icons/video.svg";
// import menu from "../assets/icons/menu.svg";
// import ringtong from "../assets/icons/ringtong.svg";
// import user from "../assets/icons/Userpic.svg";

// const Header = () => {
//   const [isDarkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!isDarkMode);
//   };
//   return (
//     <body className={`${isDarkMode ? "" : "dark"}`}>
//       <div className={"header"}>
//         <div className="header__left">
//           <img className="header__left__humberger" src={humberger} alt="menu" />
//           <img className="header__left__logo" src={logo} alt="logo" />
//         </div>
//         <div className="header__center">
//           <input
//             className="header__center__input"
//             type="text"
//             placeholder="Search"
//           />
//           <SearchIcon className="header__center__search" alt="search" />
//         </div>
//         <div className="header__right">
//           <img className="header__right__video" src={video} alt="video" />
//           <img className="header__right__menu" src={menu} alt="menu" />
//           <img
//             className="header__right__ringtong"
//             src={ringtong}
//             alt="ringtong"
//           />
//           <img src={user} alt="user" />
//         </div>
//         <div className="header__mode-toggle">
//           <button onClick={toggleDarkMode}></button>
//         </div>
//       </div>
//     </body>
//   );
// };

// export default Header;

//Header page //

// import "../sass/Header.scss";
// import SearchIcon from "@material-ui/icons/Search";
// import humberger from "../assets/icons/humberger.svg";
// import logo from "../assets/icons/logo.svg";
// import video from "../assets/icons/video.svg";
// import menu from "../assets/icons/menu.svg";
// import ringtong from "../assets/icons/ringtong.svg";
// import user from "../assets/icons/Userpic.svg";
// import dark from "../assets/icons/dark.svg";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header__left">
//         <img className="header__left__humberger" src={humberger} alt="menu" />
//         <img className="header__left__logo" src={logo} alt="logo" />
//       </div>
//       <div className="header__center">
//         <input
//           className="header__center__input"
//           type="text"
//           placeholder="Search"
//         />
//         <SearchIcon className="header__center__search" />
//       </div>
//       <div className="header__right">
//         <img className="header__right__dark" src={dark} alt="dark-mode" />
//         <img className="header__right__video" src={video} alt="video" />
//         <img className="header__right__menu" src={menu} alt="menu" />
//         <img
//           className="header__right__ringtong"
//           src={ringtong}
//           alt="ringtong"
//         />
//         <img src={user} alt="user" />
//       </div>
//     </div>
//   );
// };

// export default Header;
