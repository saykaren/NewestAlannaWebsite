import React from "react";

const NavigationBar = ({ toggleActive, navActive, toggleNavMenu }) => {
  return (
    <section className="navBox">
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
          <div className="navBarDetails" onClick={() => toggleActive("FAQ")}>
            FAQ
          </div>
          <div
            className="navBarDetails"
            onClick={() => toggleActive("Documents")}
          >
            Documents
          </div>
          <div
            className="navBarDetails"
            onClick={() => toggleActive("ContactMe")}
          >
            About Me
          </div>
        </div>
      )}
    </section>
  );
};

export default NavigationBar;
