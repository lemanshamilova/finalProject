import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.scss";
import { gallery } from "../../../data/data";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="footer_bg">
      <div className="container">
        <div className="footerBox">
          <div className="footerBoxes">
            <h3>About Us</h3>
            <div style={{width:"90px",height:"2px",backgroundColor:"#1dc5ce"}}></div>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Community Blog </Link>
            <Link to={"/"}>Rewards</Link>
            <Link to={"/"}>Work With Us </Link>
            <Link to={"/"}>Contact</Link>
          </div>
          <div className="footerBoxes">
            <h3>Exlopre Treker</h3>
            <div style={{width:"90px",height:"2px",backgroundColor:"#1dc5ce"}}></div>
            <Link to={"/"}>Account</Link>
            <Link to={"/"}>Privacy Policy </Link>
            <Link to={"/"}>Affilitate</Link>
            <Link to={"/"}>Program</Link>
            <Link to={"/"}>Our Partner</Link>
          </div>
          <div className="footerBoxes">
            <h3>Quick LInks</h3>
            <div style={{width:"90px",height:"2px",backgroundColor:"#1dc5ce"}}></div>
            <Link to={"/"}>About Us </Link>
            <Link to={"/"}>News & Press</Link>
            <Link to={"/"}>Blog</Link>
            <Link to={"/"}>FAQs</Link>
            <Link to={"/"}>Careers</Link>
          </div>
          <div className="footerBoxes" >
          <h3>Gallery</h3>
          <div style={{width:"90px",height:"2px",backgroundColor:"#1dc5ce"}}></div>

         
            <div className="footerBoxes-Img">
              
              {gallery?.slice(0, 6).map((item, index) => (
                <div className="footerImg" key={index}>
                  <img src={item?.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="inner_clearfix">
          <div className="footer_icon">
            <div><FaFacebookF style={{border:"1.5px solid",borderRadius:"50%",padding:"5px",cursor: "pointer"}} /></div>
            <div><FaTwitter style={{border:"1.5px solid",borderRadius:"50%",padding:"5px",cursor: "pointer"}}/></div>
            <div><FaYoutube style={{border:"1.5px solid",borderRadius:"50%",padding:"5px",cursor: "pointer"}}/></div>
            <div><FaInstagram style={{border:"1.5px solid",borderRadius:"50%",padding:"5px",cursor: "pointer"}}/></div>
          </div>
          <div className="footer_text">
            <p>Copyright © 2022 Treker. All Rights Reserved. Designed by ThemeIM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
