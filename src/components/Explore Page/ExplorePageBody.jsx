import React from "react";
import ExploreMain from "./ExploreMain";
import Sidebar from "./../Sidebar/Sidebar";

const ExplorePageBody = () => {
  return (
    <>
      <div className="skeleton">
        <Sidebar />
        <ExploreMain />
      </div>
    </>
  );
};

export default ExplorePageBody;
