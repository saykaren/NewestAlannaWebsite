import React, { useState } from "react";
import "./../styling/App.scss";
import NavigationBar from "./Navigation";
import Footer from "./Footer1";
import HomeSection from "./HomeSection";
import Service from "./Service";
import Credential from "./Credential";
import ContactMe from "./ContactMe";

const App = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [navActive, setNavActive] = useState(false);

  const toggleNavMenu = () => {
    setNavActive(!navActive);
  };

  const toggleActive = (item) => {
    setActiveItem(item);
    setNavActive(false);
  };

  return (
    <>
      <NavigationBar
        toggleActive={toggleActive}
        navActive={navActive}
        toggleNavMenu={toggleNavMenu}
      />
      <span onClick={() => setNavActive(false)}>
        {activeItem === "Home" && <HomeSection />}

        {activeItem === "Service" && <Service />}
        {activeItem === "Credential" && <Credential />}
        {activeItem === "ContactMe" && <ContactMe />}
      </span>
      <Footer />
    </>
  );
};

export default App;
