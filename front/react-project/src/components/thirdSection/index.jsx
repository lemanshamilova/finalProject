import React from "react";
import "./style.scss";
import globe from '../../assets/images/globe.svg'
import bag from '../../assets/images/bag.svg'
import location from '../../assets/images/location.svg'
import reserv from '../../assets/images/reserv.svg'
import users from '../../assets/images/users.svg'
import bags from '../../assets/images/bags.svg'
import image from '../../assets/images/why-image-1.svg'



const ThirdSection = () => {
  return (
    <section>
      <div className="container">
        <div className="thirdBox">
          <div className="top">
            <h1>Biz Möhtəşəmik</h1>
            <h2>Niyə Treker Seçirsiniz</h2>
          </div>
          <div className="total">
            <div className="about">
              <div className="box">
              <img src={globe}  />
                <h3>Müxtəlif İstiqamətlər</h3>
                <p>Zəngin müxtəlif mənzərələr, lüks yaşayış yeri Səyahət.</p>
              </div>
              <div className="box">
                <img src={bag}  />
                <h3>Pul üçün dəyər</h3>
                <p>Zəngin müxtəlif mənzərələr, lüks yaşayış yeri Səyahət.</p>
              </div>
              <div className="box">
              <img src={location}  />
                <h3>Gözəl Yerlər</h3>
                <p>Zəngin müxtəlif mənzərələr, lüks yaşayış yeri Səyahət.</p>
              </div>
            </div>
            <div className="img">
                <img src={image}/>
            </div>
            <div className="about">
              <div className="box">
              <img src={reserv}  />
                <h3>Sürətli rezervasiya</h3>
                <p>Zəngin müxtəlif mənzərələr, lüks yaşayış yeri Səyahət.</p>
              </div>
              <div className="box">
                <img src={users}  />
                <h3>Dəstək Qrupu</h3>
                <p>Zəngin müxtəlif mənzərələr, lüks yaşayış yeri Səyahət.</p>
              </div>
              <div className="box">
              <img src={bags}  />
                <h3>Möhtəşəm Səyahət</h3>
                <p>Zəngin müxtəlif mənzərələr, lüks yaşayış yeri Səyahət.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
