import React from "react";
import Sidebar from "./../components/Sidebar/Sidebar";
import WatchLater from "./../components/Watch Later Page/WatchLater";

const WatchLaterPage = () => {
  return (
    <>
      <div className="skeleton">
        <Sidebar />
        <WatchLater />
      </div>
    </>
  );
};

export default WatchLaterPage;
