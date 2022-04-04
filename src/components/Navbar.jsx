import React from "react";
// import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="navbar ">
        <div className="nav--logo">Logo</div>
        <div className="searchbar">
          <input className="searchbar" type="text" />
          {/* <BiSearchAlt /> */}
        </div>
        <button className="btn__login">Login</button>
      </div>
    </>
  );
};

export default Navbar;
