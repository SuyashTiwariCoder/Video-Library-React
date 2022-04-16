import React from "react";
import Sidebar from "./../components/Sidebar/Sidebar";
import Playlist from "./../components/Playlist Page/Playlist";

const PlaylistPage = () => {
  return (
    <>
      <div className="skeleton">
        <Sidebar />
        <Playlist />
      </div>
    </>
  );
};

export default PlaylistPage;
