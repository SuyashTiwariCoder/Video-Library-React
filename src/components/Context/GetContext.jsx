import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const Info = createContext();
const InfoProvider = ({ children }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/videos");
        console.log(data.videos);
        setVideo(data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <Info.Provider value={{ video }}>{children}</Info.Provider>;
};

export const useInfo = () => useContext(Info);
export default InfoProvider;
