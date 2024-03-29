import React, { useEffect, useState } from "react";
import "./../styling/App.scss";
import NavigationBar from "./Navigation";
import Footer from "./Footer1";
import HomeSection from "./HomeSection";
import Service from "./Service";
import ContactMe from "./ContactMe";
import FAQ from "./FAQ";
import Forms from "./Forms";
import NavItems from "../Data/NavigationItems";

const isWindowAvailable = typeof window !== "undefined";
const getPosition = () => (isWindowAvailable ? window.pageYOffset : undefined);

const App = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [navActive, setNavActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(getPosition());

  useEffect(() => {
    if (!isWindowAvailable) {
      return false;
    }
    const handleScroll = () => {
      setScrollPosition(getPosition());
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {scrollPosition > 54 && (
          <NavigationBar
            toggleActive={toggleActive}
            navActive={navActive}
            toggleNavMenu={toggleNavMenu}
          />
        )}

        <section onClick={() => setNavActive(false)} id="mainApp">
          <section className="home_button_section">
            {NavItems.map((nav, navIndex) => (
              <div
                className="home_button"
                onClick={() => toggleActive(`${nav.toggleAction}`)}
                key={navIndex}
              >
                {nav.Title}
              </div>
            ))}
          </section>
          {activeItem === "Home" && <HomeSection toggleActive={toggleActive} />}
          {activeItem === "Service" && <Service />}
          {activeItem === "FAQ" && <FAQ />}
          {activeItem === "Forms" && <Forms />}
          {activeItem === "ContactMe" && <ContactMe />}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default App;
