import React, { useState } from "react";
import "./../styling/App.scss";
import NavigationBar from "./Navigation";
import Footer from "./Footer1";
import HomeSection from "./HomeSection";
import Service from "./Service";
import Credential from "./Credential";
import ContactMe from "./ContactMe";
import FAQ from "./FAQ";

const App = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [navActive, setNavActive] = useState(false);

  const toggleNavMenu = () => {
    setNavActive(!navActive);
  };

  const toggleActive = (item) => {
    setActiveItem(item);
    setNavActive(false);
    window.scrollTo(0, 0);
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
          <section className="home_button_section">
            <div
              className="home_button"
              onClick={() => toggleActive("Home")}
            >
              Home
            </div>
            <div
              className="home_button"
              onClick={() => toggleActive("Service")}
            >
              Services
            </div>
            <div
              className="home_button"
              onClick={() => toggleActive("Credential")}
            >
              Credentials
            </div>
            <div
              className="home_button"
              onClick={() => toggleActive("FAQ")}
            >
              FAQ
            </div>
            <div
              className="home_button"
              onClick={() => toggleActive("ContactMe")}
            >
              Contact Dr. Everett
            </div>

          </section>
          {activeItem === "Home" && <HomeSection toggleActive={toggleActive} />}

          {activeItem === "Service" && <Service />}
          {activeItem === "Credential" && <Credential />}
          {activeItem === "FAQ" && <FAQ />}
          {activeItem === "ContactMe" && <ContactMe />}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default App;
