import React from "react";
import NavItems from "../Data/NavigationItems";

const NavigationBar = ({ toggleActive, navActive, toggleNavMenu }) => {
  return (
    <section className="navBox">
      <div id="navButton" onClick={() => toggleNavMenu()}>
        {navActive ? <>&#10005;</> : <>&#9776;</>}
      </div>
      {navActive && (
        <div className="navBar">
          {NavItems.map((nav, navIndex) => (
            <div
              className="navBarDetails"
              onClick={() => toggleActive(`${nav.toggleAction}`)}
              key={navIndex}
            >
              {nav.Title}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NavigationBar;
