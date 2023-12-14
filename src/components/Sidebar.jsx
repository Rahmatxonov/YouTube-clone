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
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink active to="/ ">
        <SidebarRow selected Icon={IoHomeOutline} title="Home" />
      </NavLink>
      <NavLink active to="/trending">
        <SidebarRow Icon={BsFire} title="Trending" />
      </NavLink>

      <NavLink active to="/subscription">
        <SidebarRow Icon={MdSubscriptions} title="Subscription" />
      </NavLink>
      <hr />
      <NavLink active to="/library">
        <SidebarRow Icon={FaRegFolder} title="Library" />
      </NavLink>
      <NavLink active to="/history">
        <SidebarRow Icon={FaRegFile} title="History" />
      </NavLink>
      <NavLink active to="/watchlater">
        <SidebarRow Icon={IoIosStopwatch} title="Watch later" />
      </NavLink>
      <NavLink active to="/favourites">
        <SidebarRow Icon={FaRegStar} title="Favourites" />
      </NavLink>
      <NavLink active to="/likedvideos">
        <SidebarRow Icon={FaRegHeart} title="Liked videos" />
      </NavLink>
      <NavLink active to="/music">
        <SidebarRow Icon={IoMusicalNotesOutline} title="Music" />
      </NavLink>
      <NavLink active to="/games">
        <SidebarRow Icon={CgGames} title="Games" />
      </NavLink>
      <SidebarRow Icon={FaAngleDown} title="Show more" />
      <hr />
    </div>
  );
};

export default Sidebar;
