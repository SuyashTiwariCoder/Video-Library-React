import React from "react";
import { Link } from "react-router-dom";
const LandingPageBanner = () => {
  return (
    <>
      <img
        className="image__LandingPage"
        src="\Assets\Banner-img.jpg"
        alt="Hero--Image"
      />
      <div className="heading__landingPage">
        <h2>Watch Movies and Shows </h2>
        <Link to="/explore">
          <button className="btn__landingPage">GET STARTED</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPageBanner;
