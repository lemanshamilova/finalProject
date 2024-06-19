import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import registerImg from "../../assets/images/faq-image-1.svg";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";
import { FiUpload } from "react-icons/fi";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  console.log(formData);

const [passwordMatch,setPasswordMatch]=useState(true)
useEffect(() => {
  
  setPasswordMatch(formData.password===formData.confirmPassword || formData.confirmPassword ==="" )


})


const handleSubmit =async (e)=>{
  e.preventDefault()



  try {
    const register_form=new FormData()

    for(var key in formData){
      register_form.append(key,formData[key])
    }
    
    const response= await fetch("http://localhost:5050/auth/register",{
      method:"POST",
      body:register_form
    })

    if(response.ok){
      navigate("/login")
    }
  } catch (err) {
    console.log("registered error",err.message)
    
  }
}


  const navigate = useNavigate();
  return (
    <section className="registerPage">
      <div className="container">
        <div className="RegisterBox">
          <h1 className="welcome">Register</h1>

          <div className="total-Box">
            <div className="leftSide">
              <img src={registerImg} />
            </div>
            <div className="rightSide">
              <form onSubmit={handleSubmit}>
                <label>
                  Email <span style={{ color: "#1dc5ce" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>
                  Username <span style={{ color: "#1dc5ce" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
                <label>
                  Password <span style={{ color: "#1dc5ce" }}>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                 <label>
                  Confirm Password <span style={{ color: "#1dc5ce" }}>*</span>
                </label>
                <input
                  type="password"
                  placeholder="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {!passwordMatch && (
                  <p style={{color:"red"}}>Passwords are not matched!</p>
                )

                }
                <label
                htmlFor="image"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    cursor: "pointer",
                  }}
                >
                  <FiUpload style={{ fontSize: "20px" }} />{" "}
                  <span style={{ fontSize: "11px" }}> Upload your Photo </span>
                </label>
                <input
                  id="image"
                  type="file"
                  name="profileImage"
                  onChange={handleChange}
                  style={{ display: "none" }}
                  required
                />
                {formData.profileImage && (
                  <img src={URL.createObjectURL(formData.profileImage)} 
                  alt="profile photo"
                  style={{maxWidth:"80px",height:"50px"}}
                  />
                )

                }
                <button type="submit"
                disabled={!passwordMatch}
                 className="registerBtn">
                  Register{" "}
                  <SlArrowRight
                    style={{ fontSize: "11px", fontWeight: "800" }}
                  />
                </button>
                <p>
                  Don't have an account ?
                  <span
                    onClick={() => {
                      navigate(`/login`);
                    }}
                    style={{
                      color: "red",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    {" "}
                    Login
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

export default Register;
