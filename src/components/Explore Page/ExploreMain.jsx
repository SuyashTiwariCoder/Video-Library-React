import React from "react";
import Videos from "../VideoPage/Videos";

const ExploreMain = () => {
  return (
    <div className="main__content">
      <div className="badges__mainContent">
        <button>Genre</button>
      </div>
      <div className="video__section">
        <Videos />
      </div>
    </div>
  );
};

export default ExploreMain;
