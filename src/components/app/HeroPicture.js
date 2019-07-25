import React from 'react';
import './App.css';
import ContactMe from './ContactMe';
import alannaHero from '../../assets/alanna_heroPic.jpg'

const HeroSection= () => (
    <div>
      <main
        className="heroSection"
        id="heroImage"
      >        
        <h1
        id="heroText"
        >
          Alanna Everett
          <section id="heroTitle">
            Psychologist
          </section>
        </h1>

        <img src={alannaHero}
          alt="Alanna Teaching"
          id="heroContactPic"
          rel="noopener noreferrer"
        />
        <h3 id="buttonSignUp">
          <a href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna" 
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            id="buttonMain"
          >
            IQ Testing Schedule
          </a>
        </h3>
      </main> 
    <ContactMe />
    </div> 
  );

export default HeroSection