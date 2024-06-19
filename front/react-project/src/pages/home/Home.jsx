import React, { useEffect } from "react";
import BannerImage from "../../assets/images/banner-image-1.svg";
import Treker from "../../assets/images/banner-bg-text.svg";
import mountains from "../../assets/images/logo-icon.svg";
import backImg from "../../assets/images/about-vector-1.png";
import frontImg from "../../assets/images/about-image-2.svg";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../../redux/slices/TrekkingSlice";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import globe from '../../assets/images/globe.svg'
import bag from '../../assets/images/bag.svg'
import location from '../../assets/images/location.svg'
import reserv from '../../assets/images/reserv.svg'
import users from '../../assets/images/users.svg'
import bags from '../../assets/images/bags.svg'
import image from '../../assets/images/why-image-1.svg'
import { getAllProducts } from '../../redux/slices/ProductSlice'
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Home.scss";

const Home = () => {
  const products = useSelector((state) => state.products.products)
  const trekkings = useSelector((state) => state.trekkings.trekkings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllData());
    dispatch(getAllProducts());
  }, []);
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
                    <h1>Heç Vaxt Dayanma</h1>
                  </div>
                  <div className="margin">
                    <h2>Kəşf Et</h2>
                  </div>
                  <div className="bottom">
                    <p>
                      Onların evi insanların onları görməyə gəldiyi bir
                      muzeydir. Onlar həqiqətən Addams Ailəsinin fəryadıdırlar.
                      Bu günlərin hamısı Xoşbəxt və Azaddır. Bu günlərin
                      hamısını mənimlə paylaş
                    </p>
                  </div>
                  <div className="btn">
                    <button>
                      Bütün Turlara Baxın <img src={mountains} />
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
                <h1>Treker Haqqında</h1>
                <h2>Dünyanın Ən Yaxşı Səyahət Agentliyi</h2>
                <p>
                  2014-cü ildən bəri biz hər yaşda olan 500.000-dən çox insana
                  həyatlarının ən yaxşı açıq hava təcrübəsindən zövq almağa
                  kömək etmişik. İstər bir günlük, istərsə də iki həftəlik
                  tətil, evə yaxın və ya xarici ölkəyə.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="trekking">
          <div className="container">
            <div className="trekkingWrap">
              <div className="text">
                <h1>Müasir Və Gözəl</h1>
                <h2>Ən Populyar Trekkingimiz</h2>
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
                {trekkings.map((p) => (
                  <SwiperSlide className="trekkingsCart" key={p._id}>
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
    <section>
        <div className="container">
            <div className="productsBox">
                <div className="top">
                    <h1>İndi Alış-Veriş Edin</h1>
                    <h2>Seçilmiş Trekking Məhsulları</h2>
                    <div className="products">
                        {products.slice(0,8).map((p)=>(
                            <div className='product' key={p._id}>

                                <img src={p.image}/>
                                <p className='title'>{p.title}</p>
                                <p className='productPrice'>${p.price}.00</p>
                                <div className='icon'>
                                <MdFavoriteBorder />
                                <AiOutlineShoppingCart />


                                </div>
                                <button className='detail'onClick={()=>{
                                    
                                    navigate(`/products/${p._id}`)

                                }}>
                                    View Detail
                                </button>
                               


                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
      
    </section>
      </>
    </>
  );
};

export default Home;
