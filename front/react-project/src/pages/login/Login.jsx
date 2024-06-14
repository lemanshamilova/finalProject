import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import loginImg from '../../assets/images/about-image-3.svg'
import { HiArrowNarrowLeft } from "react-icons/hi";

const Login = () => {
  const navigate=useNavigate()
  return (
    <section className="loginPage">
      <div className="container">
        <div className="loginBox">
          <h1 className="welcome">Login</h1>

          <div className="total-Box">
            <div className="leftSide">
              <img
                
                src={loginImg}
               
              />
            </div>
            <div className="rightSide">
              <form>
               
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Password</label>
                <input type="text" placeholder="Password" />
                <button className="loginBtn">Login</button>
                <p >Don't have an account ?<span onClick={()=>{
                  navigate(`/register`)
                }}  style={{color:"red",cursor:"pointer",textDecoration:"underline"}}>  Register</span> </p>

              </form>
            </div>
          </div>
        </div>
       <div className="returnHome" onClick={()=>{
        navigate("/")
       }}>
       <HiArrowNarrowLeft /> 
       <p>Home</p>
       </div>
      </div>
    </section>
  );
};

export default Login;
