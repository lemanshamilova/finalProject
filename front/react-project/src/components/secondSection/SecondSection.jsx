import React from "react";
import "./style.scss";
import backImg from "../../assets/images/about-vector-1.png";
import frontImg from "../../assets/images/about-image-2.svg";

const SecondSection = () => {
  return (
    <section>
      <div className="container">
        <div className="secondBox">
          <div className="leftBox">
           <div className="total">
           <div className="backImg">
              <img src={backImg} />
            </div>
            <div className="frontImg">
              <img src={frontImg} />
            </div>
           </div>
          </div>
          <div className="rightBox">
            <h1>Treker Haqqında</h1>
            <h2>Dünyanın Ən Yaxşı Səyahət Agentliyi</h2>
            <p>
              2014-cü ildən bəri biz hər yaşda olan 500.000-dən çox insana
              həyatlarının ən yaxşı açıq hava təcrübəsindən zövq almağa kömək
              etmişik. İstər bir günlük, istərsə də iki həftəlik tətil, evə
              yaxın və ya xarici ölkəyə.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
