//this page I want to have do just IQ testing information
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from '../../serviceWorker';
import NavigationBar from './Navigation';
import ServiceSection from './Service';
import ContactMe from './ContactMe';


ReactDOM.render(
  <div id="bodyContents">
    <NavigationBar />
    <ServiceSection />
    <ContactMe />
  </div>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

