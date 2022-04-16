import React from "react";
import Sidebar from "./../components/Sidebar/Sidebar";
import Like from "./../components/Like Page/Like";

const LikePage = () => {
  return (
    <>
      <div className="skeleton">
        <Sidebar />
        <Like />
      </div>
    </>
  );
};

export default LikePage;
