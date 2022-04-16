import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar ">
        <Link to="/">
          <div className="nav--logo">
            <MdSlowMotionVideo color="var(--main-color)" />
            SENLIX
          </div>
        </Link>
        <div className="searchbar">
          <input
            className="searchbar__input"
            placeholder="Search"
            type="text"
          />
          <BiSearchAlt className="searchbar__icon" size={17} />
        </div>
        <button className="btn__login">Login</button>
      </div>
    </>
  );
};

export default Navbar;
