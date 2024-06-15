import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaChevronCircleRight } from "react-icons/fa";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../redux/slices/TrekkingSlice";
import { CiStar } from "react-icons/ci";
import mountains from "../../assets/images/logo-icon.svg";





const TrekkingPage = () => {



  const trekkings = useSelector((state) => state.trekkings.trekkings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  useEffect(() => {
    dispatch(getAllData());
  }, []);
  return (
    <section>
      <div className="background">
        <div className="container">
          <div className="center">
            <h1>TREKKING</h1>
            <div className="flex">
              <div className="home">
                <AiFillHome />
              </div>
              <span>Ev</span>
              <FaChevronCircleRight />
              <span>Trekking</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mountains"></div>
      <div className="container">
        <section>
          <div className="head-Trekking">
            <h1>Trekker ilə sizin üçün ən yaxşı treklər</h1>
            <p>
              2014-cü ildən bəri biz hər yaşda olan 500.000-dən çox insana
              həyatlarının ən yaxşı açıq hava təcrübəsindən zövq almağa kömək
              etmişik. İstər bir günlük, istərsə də iki həftəlik tətil, evə
              yaxın və ya xarici ölkəyə.
            </p>
            <div className="forFilter">
              <button>Bütün Növlər</button>
              <button>Asan Orta</button>
              <button>Orta</button>
              <button>Orta Çətin</button>
              <button>Çətin</button>
            </div>
          </div>
        </section>
        <div className="trekkingsPage">
          {trekkings.map((p) => (
            <div className="trekkingsPageCart" key={p._id}>
              <p className="price">${p.price}</p>
              <img src={p.image} />
              <p className="title">{p.title}</p>
              <div className="starts">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <div>
                <p className="desc">{p.description}</p>
              </div>
              <hr className="hr" />

              <p
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/trekkings/${p._id}`);
                }}
                className="details"
              >
                Təfərrüatlara baxın{" "}
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={mountains}
                />
              </p>
            </div>
          ))}
        </div>
        <div className="aboutTrekking">
       
          
        </div>
      </div>
    </section>
  );
};

export default TrekkingPage;
