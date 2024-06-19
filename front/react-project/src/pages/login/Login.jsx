import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/about-image-3.svg";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";
import { setLogin } from "../../redux/slices/state";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5050/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      //get data after fetching

      const loggedIn = await response.json();
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/")
      }
    } catch (err) {
      console.log("login failed",err.message);
    }
  };
  return (
    <section className="loginPage">
      <div className="container">
        <div className="loginBox">
          <h1 className="welcome">Login</h1>

          <div className="total-Box">
            <div className="leftSide">
              <img src={loginImg} />
            </div>
            <div className="rightSide">
              <form onSubmit={handleSubmit}>
                <label>
                  Email <span style={{ color: "#1dc5ce" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>
                  Password <span style={{ color: "#1dc5ce" }}>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="loginBtn">
                  Login{" "}
                  <SlArrowRight
                    style={{ fontSize: "11px", fontWeight: "800" }}
                  />{" "}
                </button >
                <p>
                  Don't have an account ?
                  <span
                    onClick={() => {
                      navigate(`/register`);
                    }}
                    style={{
                      color: "red",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    {" "}
                    Register
                  </span>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
        <div
          className="returnHome"
          onClick={() => {
            navigate("/");
          }}
        >
          <HiArrowNarrowLeft />
          <p>Home</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
