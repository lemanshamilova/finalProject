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
            <h3>Bizim Haqqımızda</h3>
            <div style={{width:"90px",height:"2px",backgroundColor:"#1dc5ce"}}></div>
            <Link to={"/"}>Bizim Haqqımızda</Link>
            <Link to={"/"}>İcma Bloqu</Link>
            <Link to={"/"}>Mükafatlar</Link>
            <Link to={"/"}>Bizimlə Işləyin</Link>
            <Link to={"/"}>Əlaqə</Link>
          </div>
          <div className="footerBoxes">
            <h3>Trekeri Kəşf Edin</h3>
            <div style={{width:"90px",height:"2px",backgroundColor:"#1dc5ce"}}></div>
            <Link to={"/"}>Hesab</Link>
            <Link to={"/"}>Gizlilik Siyasəti</Link>
            <Link to={"/"}>Tərəfdaş</Link>
            <Link to={"/"}>Proqram</Link>
            <Link to={"/"}>Partnyorumuz</Link>
          </div>
          <div className="footerBoxes">
            <h3>Sürətli Bağlantılar</h3>
            <div style={{width:"90px",height:"2px",backgroundColor:"#1dc5ce"}}></div>
            <Link to={"/"}>Bizim Haqqımızda</Link>
            <Link to={"/"}>Xəbərlər Və Mətbuat</Link>
            <Link to={"/"}>Bloq</Link>
            <Link to={"/"}>Tez-Tez Verilən Suallar</Link>
            <Link to={"/"}>Karyera</Link>
          </div>
          <div className="footerBoxes" >
          <h3>Qalereya</h3>
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
            <p>Copyright © 2022 Treker. Bütün hüquqlar qorunur. ThemeIM tərəfindən hazırlanmışdır</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
