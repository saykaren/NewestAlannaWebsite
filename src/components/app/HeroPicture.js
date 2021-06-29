import React from "react";
import ContactMe from "./ContactMe";
import alannaHero from "../assets/alanna_heroPic.jpg";
import brain from "../assets/brain.png";

const HeroSection = () => (
  <div className="web_section_box">
    <main className="heroSection" id="heroImage">
      <img
        src={brain}
        alt="Alanna Teaching"
        id="heroContactPic"
        rel="noopener noreferrer"
      />
      <section id="heroText">
        Alanna Everett
        <section id="heroTitle">Psychologist</section>
      </section>
      {/* <h3 id="buttonSignUp">
        <a
          href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          id="buttonMain"
        >
          IQ Testing Schedule
        </a>
      </h3> */}
    </main>
  </div>
);

export default HeroSection;
