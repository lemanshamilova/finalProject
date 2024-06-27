import React from "react";
import BannerImage from "../../assets/images/banner-image-1.svg";
import Treker from "../../assets/images/banner-bg-text.svg";
import mountains from "../../assets/images/logo-icon.svg";
import backImg from "../../assets/images/about-vector-1.png";
import frontImg from "../../assets/images/about-image-2.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllData } from "../../redux/slices/TrekkingSlice";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import globe from "../../assets/images/globe.svg";
import bag from "../../assets/images/bag.svg";
import location from "../../assets/images/location.svg";
import reserv from "../../assets/images/reserv.svg";
import users from "../../assets/images/users.svg";
import bags from "../../assets/images/bags.svg";
import image from "../../assets/images/why-image-1.svg";
// import { getAllProducts } from '../../redux/slices/ProductSlice'
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Home.scss";
import { News } from "../../../data/data";
import { trekkings } from "../../../data/data";
import { products } from "../../../data/data";

const Home = () => {
  // const products = useSelector((state) => state.products.products)
  // const trekkings = useSelector((state) => state.trekkings.trekkings);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getAllData());
  //   dispatch(getAllProducts());
  // }, []);
  return (
    <>
      <>
        <section>
          <div className="container">
            <div className="main">
              <div className="content-home">
                <div className="trekerImage">
                  <img src={Treker} />
                </div>
                <div className="innerText">
                  <div className="top">
                    <h1>Never Stop </h1>
                  </div>
                  <div className="margin">
                    <h2>Exploring</h2>
                  </div>
                  <div className="bottom">
                    <p>
                      Their house is a museum where people come to see ‘em. They
                      really are a scream the Addams Family. These days are all
                      Happy and Free. These days are all share them with me oh
                      baby.
                    </p>
                  </div>
                  <div className="btn">
                    <button>
                      View All Tours <img src={mountains} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="banner-image">
                <div className="image">
                  <img src={BannerImage} />
                </div>
              </div>
            </div>
          </div>
        </section>
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
                <h1>About Treker</h1>
                <h2>World Best Travel Agency</h2>
                <p>
                  Since 2014, we’ve helped more than 500,000 people of all ages
                  enjoy the best outdoor experience of their lives. Whether it’s
                  for one day or a two-week vacation, close to home or a foreign
                  land.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="trekking">
          <div className="container">
            <div className="trekkingWrap">
              <div className="text">
                <h1>Modern & Beautiful</h1>
                <h2>Our Most Popular Trekking</h2>
              </div>
              <Swiper
                breakpoints={{
                  400: { slidesPerView: 1 },
                  700: { slidesPerView: 2 },
                  1100: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                modules={[Navigation, Autoplay]}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                speed={4000}
                className=" trekkings"
              >
                {trekkings.map((p, i) => (
                  <SwiperSlide className="trekkingsCart" key={i}>
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
                      View Details{" "}
                      <img
                        style={{ width: "30px", height: "30px" }}
                        src={mountains}
                      />
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="thirdBox">
              <div className="top">
                <h1>We Are Awesome</h1>
                <h2>Why Choose Treker</h2>
              </div>
              <div className="total">
                <div className="about">
                  <div className="box">
                    <img src={globe} />
                    <h3>Diverse Destinations</h3>
                    <p>
                    Richly varied landscapes, luxury accommodation Travel.
                    </p>
                  </div>
                  <div className="box">
                    <img src={bag} />
                    <h3>Value for Money</h3>
                    <p>
                    Richly varied landscapes, luxury accommodation Travel.
                    </p>
                  </div>
                  <div className="box">
                    <img src={location} />
                    <h3>Beautiful Places</h3>
                    <p>
                    Richly varied landscapes, luxury accommodation Travel.
                    </p>
                  </div>
                </div>
                <div className="img">
                  <img src={image} />
                </div>
                <div className="about">
                  <div className="box">
                    <img src={reserv} />
                    <h3>Fast Booking</h3>
                    <p>
                    Richly varied landscapes, luxury accommodation Travel.                    </p>
                  </div>
                  <div className="box">
                    <img src={users} />
                    <h3>Support Team</h3>
                    <p>
                    Richly varied landscapes, luxury accommodation Travel.                    </p>
                  </div>
                  <div className="box">
                    <img src={bags} />
                    <h3>Passionate Travel</h3>
                    <p>
                    Richly varied landscapes, luxury accommodation Travel.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="productsBox">
              <div className="top">
                <h1>Shop Now</h1>
                <h2>Featured Trekking Products</h2>
                <div className="products">
                  {products.slice(0, 8).map((p, i) => (
                    <div className="product" key={i}>
                      <img src={p.image} />
                      <p className="title">{p.title}</p>
                      <p className="productPrice">${p.price}.00</p>
                      <div className="icon">
                        <MdFavoriteBorder />
                        <AiOutlineShoppingCart />
                      </div>
                      <button
                        className="detail"
                        onClick={() => {
                          navigate(`/products/${p._id}`);
                        }}
                      >
                        View Detail
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trekerNews_bg">
          <div className="container">
            <div className="trekerNews">
              <div className="trekerNews_text">
                <h1>Treker Top News</h1>
                <h2>Treker Latest News</h2>
              </div>
              <div className="trekerNews_box">
                {News?.slice(0,6).map((item, index) => (
                  <div className="trekerNews_boxes" key={index}>
                    <p style={{ color: "gray" }}>By : {item?.author}</p>
                    <h3>{item?.name}</h3>
                    <p>{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
