import React, { useState } from "react";

const NavigationBar = ({ toggleActive, navActive, toggleNavMenu }) => {
  return (
    <>
      <div id="navButton" onClick={() => toggleNavMenu()}>
        {navActive ? <>&#10005;</> : <>&#9776;</>}
      </div>

      {navActive && (
        <div className="navBar">
          <div className="navBarDetails" onClick={() => toggleActive("Home")}>
            Home
          </div>
          <div
            className="navBarDetails"
            onClick={() => toggleActive("Service")}
          >
            Services
          </div>
          <div
            className="navBarDetails"
            onClick={() => toggleActive("Credential")}
          >
            Credentials
          </div>
          {/* <div className="navBarDetails" onClick={() => toggleActive("AboutMe")}>
          About Me
        </div> */}
          <div
            className="navBarDetails"
            onClick={() => toggleActive("ContactMe")}
          >
            Contact Me
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
