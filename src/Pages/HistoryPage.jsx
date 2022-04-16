import React from "react";
import History from "./../components/History Page/History";
import Navbar from "./../components/Navbar";
import Sidebar from "./../components/Sidebar/Sidebar";

const HistoryPage = () => {
  return (
    <>
      <div className="skeleton">
        <Sidebar />
        <History />
      </div>
    </>
  );
};

export default HistoryPage;
