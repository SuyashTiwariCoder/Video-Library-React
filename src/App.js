import "./App.css";
import { BiSearchAlt } from "react-icons/bi";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import ExplorePage from "./Pages/ExplorePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="explore" element={<ExplorePage />} />
      </Routes>
    </>
  );
}

export default App;
