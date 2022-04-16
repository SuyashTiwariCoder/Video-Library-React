import "./App.css";
import { BiSearchAlt } from "react-icons/bi";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import ExplorePage from "./Pages/ExplorePage";

import Navbar from "./components/Navbar";

import HistoryPage from "./Pages/HistoryPage";
import WatchLaterPage from "./Pages/WatchLaterPage";
import PlaylistPage from "./Pages/PlaylistPage";
import LikePage from "./Pages/LikePage";

function App() {
  return (
    <>
      <Navbar />
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/watchlater" element={<WatchLaterPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
    </>
  );
}

export default App;
