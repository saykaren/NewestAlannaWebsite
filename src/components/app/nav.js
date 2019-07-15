import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HeroSection from './heroSection';
import ServiceSection from './serviceSection';
import ContactMe from './contact';
import Credentials from './credentials';
import FAQ from './FAQ';
import Home from './home';

function NavigationBar(){
  return(
    
      <Router> 
          <div>
            <nav className={"navBar"}>
              <div className={"navLink"}>
                <Link to="/Home">Home</Link>
              </div>
              <div className={"navLink"}> 
                <Link to={"/Services"}>Services</Link>
                <div className={"subNavLink"}> 
                  <Link to={"/Services/FAQ"}>FAQ</Link>
                </div>
              </div>
              <div className={"navLink"}>
                <Link to={"/Schedule"}>Schedule Testing</Link>
                <div className={"subNavLink"}> 
                  <Link to={"/Schedule/Credentials"}>Credentials</Link>
                </div>
              </div>
              <div className={"navLink"}>
                <Link to={"/contact"}>Contact Me</Link>
              </div>
            </nav>
          
            <Route exact strict path={"/"} component={Home}/>
            <Route path={"/Home"} component={Home}/>
            <Route exact strict path={"/Schedule/Credentials"} component={Credentials}/>
            <Route exact strict path={"/Services"} component={ServiceSection}/>
            <Route exact strict path={"/Schedule"} component={HeroSection}/>
            <Route exact strict path={"/Services/FAQ"} component={FAQ}/>
            <Route path={'/contact'} component={ContactMe} />
              
          </div>
      </Router>
  
      
  );
};


export default NavigationBar