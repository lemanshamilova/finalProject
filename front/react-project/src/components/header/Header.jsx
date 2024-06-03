import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="head">
            <div className="left-side">
              <div>
                <FaEnvelope />
              </div>
              <div>
                <a href="mailto:INFO@TREKER.COM">INFO@TREKER.COM</a>
              </div>
            </div>
            <div className="right-side">
              <div className="language">
                
                  <FaGlobeAfrica />
                  <p>ENG</p>
                  <GoChevronDown />
                
              </div>
              <div className="signIn">
                <FaCircleUser />
                <p>SIGN IN</p>
              </div>
            </div>
          </div>
         


        </div>
      </div>
    </header>
  );
};

export default Header;
