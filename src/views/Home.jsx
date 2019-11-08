import React from 'react';

//  react-icons package

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';




class Home extends React.Component {
    
  render() {
      return (
              <>
              <div className="content">
                <h1>Hi, I am <stong>Kernael Apuko</stong></h1>
                <p>
                  I am a Full Stack web developer. 
                  I can provide clean code and pixel perfect design.
                  I also make websites more and more interactive with web animations.
                </p>
                <div className="social-network social-circle">
                  <a 
                  href="https://github.com/Kernael92"
                  className="github"
                  >
                    <FaGithub />
                  </a>
                  <a 
                  href="https://github.com/Kernael92"
                  className="twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                  href="https://github.com/Kernael92"
                  className="linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </div>     
              </div>
              </>
      );
    };
  }
  
  export default Home;
  