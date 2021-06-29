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
      <section>
        <NavigationBar
          toggleActive={toggleActive}
          navActive={navActive}
          toggleNavMenu={toggleNavMenu}
        />
        <section onClick={() => setNavActive(false)} id="mainApp">
          {activeItem === "Home" && <HomeSection />}

          {activeItem === "Service" && <Service />}
          {activeItem === "Credential" && <Credential />}
          {activeItem === "ContactMe" && <ContactMe />}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default App;
