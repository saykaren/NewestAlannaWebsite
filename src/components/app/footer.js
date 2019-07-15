import React from 'react';
import './App.css';
import sayKarenLogo from '../../assets/sayKaren_Logo_transparent_7.2019.png'


function Footer(){
  return(
    <div>
      <div
        className={"footer"}
      >
        <div
          id={"footer"}
          className={"footerDetails"}
        >
          Website created by:
          <a 
            href={"http://saykaren.com"} 
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <img src={sayKarenLogo}
              className={"footerDetails"}
              id={"sayKarenLogo"}
              alt={"sayKaren"}
            />
            
            </a>
        </div>  
  
      </div>
    </div>
  );
}



export default Footer