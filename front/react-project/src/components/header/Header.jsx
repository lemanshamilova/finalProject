import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/slices/state";
const Header = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
                {user ? <a href="/create-listing"></a> : <a href="/login"></a>}
                <div className="userPanel">
                  <RxHamburgerMenu className="menu"/>
                  {!user ? (
                    <FaCircleUser style={{fontSize:"30px"}}/>
                  ) : (
                    <img
                      src={`http://localhost:5050/${user.profileImagePath.replace(
                        "public",
                        ""
                      )}`}
                      alt="profile photo"
                      style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px"
                      }}
                    />
                  )}
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
