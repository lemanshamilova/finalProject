import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import registerImg from '../../assets/images/faq-image-1.svg'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";

const Register = () => {
  const navigate=useNavigate()
  return (
    <section className="registerPage">
    <div className="container">
      <div className="RegisterBox">
        <h1 className="welcome">Register</h1>

        <div className="total-Box">
          <div className="leftSide">
            <img
              
              src={registerImg}
             
            />
          </div>
          <div className="rightSide">
            <form>
             
              <label>Email <span style={{color:"#1dc5ce"}}>*</span></label>
              <input type="text" placeholder="Email" />
              <label>Username <span style={{color:"#1dc5ce"}}>*</span></label>
              <input type="text" placeholder="Username" />
              <label>Password <span style={{color:"#1dc5ce"}}>*</span></label>
              <input type="text" placeholder="Password" />
              <button className="registerBtn" >Register <SlArrowRight style={{fontSize:"11px",fontWeight:"800"}}/></button>
              <p >Don't have an account ?<span onClick={()=>{
                navigate(`/login`)
              }}  style={{color:"red",cursor:"pointer",textDecoration:"underline"}}>  Login</span> </p>

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

export default Register;
