import React from "react";
import { FaRegCompass, FaHistory } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdOutlinePlaylistPlay } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarContent = [
    {
      id: "Explore",
      Icon: FaRegCompass,
      title: "Explore",
    },
    {
      id: "History",
      Icon: FaHistory,
      title: "History",
    },
    {
      id: "Like",
      Icon: AiFillLike,
      title: "Like",
    },
    {
      id: "WatchLater",
      Icon: MdWatchLater,
      title: "WatchLater",
    },
    {
      id: "Playlist",
      Icon: MdOutlinePlaylistPlay,
      title: "Playlist",
    },
  ];
  return (
    <div className="sidebar">
      {sidebarContent.map(({ id, Icon, title }) => (
        <NavLink
          key={id}
          to={`/${title === "explore" ? "" : title.toLowerCase()}`}
          style={({ isActive }) => ({
            color: isActive ? "red" : "green",
          })}
        >
          <h2 className="sidebar__component">
            <Icon size={20} />
            {title}
          </h2>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
