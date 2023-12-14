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

import React, { useState } from "react";
import "../sass/Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import humberger from "../assets/icons/humberger.svg";
import logo from "../assets/icons/logo.svg";
import video from "../assets/icons/video.svg";
import menu from "../assets/icons/menu.svg";
import ringtong from "../assets/icons/ringtong.svg";
import user from "../assets/icons/Userpic.svg";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`header ${isDarkMode ? "dark" : ""}`}>
      <div className="header__left">
        <img className="header__left__humberger" src={humberger} alt="menu" />
        <img className="header__left__logo" src={logo} alt="logo" />
      </div>
      <div className="header__center">
        <input
          className="header__center__input"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header__center__search" />
      </div>
      <div className="header__right">
        <img className="header__right__video" src={video} alt="video" />
        <img className="header__right__menu" src={menu} alt="menu" />
        <img
          className="header__right__ringtong"
          src={ringtong}
          alt="ringtong"
        />
        <img src={user} alt="user" />
      </div>
      <div className="header__mode-toggle">
        <button onClick={toggleDarkMode}></button>
      </div>
    </div>
  );
};

export default Header;
