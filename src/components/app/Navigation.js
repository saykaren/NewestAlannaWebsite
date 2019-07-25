import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HeroSection from './HeroPicture';
import ServiceSection from './Service';
import ContactMe from './ContactMe';
import Credentials from './Credential';
import FAQ from './FAQ';
import Home from './HomeSection';

const NavigationBar = () => (
  <Router> 
      <div>
        <nav className="navBar">
          <div className="navLink">
            <Link to="/Home">Home</Link>
          </div>
          <div className="navLink"> 
            <Link to={"/Services"}>Services</Link>
            
          </div>
          <div className="navLink">
            <Link to={"/Schedule"}>Schedule Testing</Link>
            <section className="subNavLink"> 
              <Link to={"/Schedule/Credentials"}>Credentials</Link>
            </section>
          </div>
          <div className="navLink">
            <Link to={"/contact"}>Contact Me</Link>
            <section className="subNavLink"> 
              <Link to={"/contact/FAQ"}>FAQ</Link>
            </section>
          </div>
        </nav>
      
        <Route exact strict path={"/"} component={Home}/>
        <Route path={"/Home"} component={Home}/>
        <Route exact strict path={"/Schedule/Credentials"} component={Credentials}/>
        <Route exact strict path={"/Services"} component={ServiceSection}/>
        <Route exact strict path={"/Schedule"} component={HeroSection}/>
        <Route exact strict path={"/contact/FAQ"} component={FAQ}/> 
        <Route path={'/contact'} component={ContactMe} />
      </div>
  </Router>      
  );

export default NavigationBar