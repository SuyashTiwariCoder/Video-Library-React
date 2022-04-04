import React from "react";
import { Link } from "react-router-dom";
const LandingPageBanner = () => {
  const clickHandler = () => {
    <Link to="/explore"></Link>;
  };
  return (
    <>
      <img
        className="image__LandingPage"
        src="\Assets\Banner-img.jpg"
        alt="Hero--Image"
      />
      <div className="heading__landingPage">
        <h2>Watch Movies and Shows </h2>
        <button className="btn__landingPage" onClick={clickHandler}>
          GET STARTED
        </button>
      </div>
    </>
  );
};

export default LandingPageBanner;
