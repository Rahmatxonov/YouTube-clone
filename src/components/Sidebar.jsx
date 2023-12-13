import React from "react";
import "../sass/Sidebar.scss";
import SidebarRow from "./SidebarRow";
import { IoHomeOutline } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { IoIosStopwatch } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CgGames } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={IoHomeOutline} title="Home" />
      <SidebarRow Icon={BsFire} title="Trending" />
      <SidebarRow Icon={MdSubscriptions} title="Subscription" />
      <hr />
      <SidebarRow Icon={FaRegFolder} title="Library" />
      <SidebarRow Icon={FaRegFile} title="History" />
      <SidebarRow Icon={IoIosStopwatch} title="Watch later" />
      <SidebarRow Icon={FaRegStar} title="Favourites" />
      <SidebarRow Icon={FaRegHeart} title="Liked videos" />
      <SidebarRow Icon={IoMusicalNotesOutline} title="Music" />
      <SidebarRow Icon={CgGames} title="Games" />
      <SidebarRow Icon={FaAngleDown} title="Show more" />
      <hr />
    </div>
  );
};

export default Sidebar;
