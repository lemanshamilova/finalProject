import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/slices/state";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
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
              <div>
                {user ? (
                  <a className="creater" href="/create_listing">
                    Become A Host
                  </a>
                ) : (
                  <a className="creater" href="/login">
                    Become A Host
                  </a>
                )}
              </div>

              <div className="signIn">
                <div
                  className="userPanel"
                  onClick={() => setDropdownMenu(!dropdownMenu)}
                >
                  <MenuIcon className="menuIcon" style={{ fontSize: "30px",cursor:"pointer" }} />
                  {!user ? (
                    <PersonIcon style={{ fontSize: "26px" }} />
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
                        height: "30px",
                        cursor:"pointer"
                      }}
                    />
                  )}
                   {dropdownMenu && !user && (
            <div className="dropdownMenu">
              <Link to={"/login"}>Log In</Link>
              <Link to={"/register"}>Sign Up</Link>
            </div>
          )}
          {dropdownMenu && user && (
            <div className="dropdownMenu">
              <Link to={""}>Trip List</Link>
              <Link to={""}>Wish List</Link>
              <Link to={""}>Property list</Link>
              <Link to={""}>Reservation List</Link>
              <Link to={""}>Become A Host</Link>

              <Link
                to={"/login"}
                onClick={() => {
                  dispatch(setLogout());
                }}
              >
                Log Out
              </Link>
            </div>
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
