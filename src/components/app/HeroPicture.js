import React from "react";
import ContactMe from "./ContactMe";
import alannaHero from "../assets/alanna_heroPic.jpg";

const HeroSection = () => (
  <>
    <main className="heroSection" id="heroImage">
      <section id="heroText">
        Alanna Everett
        <section id="heroTitle">Psychologist</section>
      </section>

      <img
        src={alannaHero}
        alt="Alanna Teaching"
        id="heroContactPic"
        rel="noopener noreferrer"
      />
      <h3 id="buttonSignUp">
        <a
          href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          id="buttonMain"
        >
          IQ Testing Schedule
        </a>
      </h3>
    </main>
  </>
);

export default HeroSection;
