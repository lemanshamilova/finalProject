// import axios from "axios";
import React from "react";
// import { useParams } from "react-router-dom";
import "./style.scss";
import { AiFillHome } from "react-icons/ai";
import { FaChevronCircleRight } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  // const { productId } = useParams();
  // const [product, setProduct] = useState([]);

  // const getProduct = async () => {
  //   const res = await axios(`http://localhost:5050/products/${productId}`);
  //   setProduct(res.data);
  //   console.log(res.data);
  // };
  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <section>
      <div className="background">
        <div className="container">
          <div className="center">
            <h1>MAĞAZA TƏFƏRRÜATLARI</h1>
            <div className="flex">
              <div className="home">
                <AiFillHome />
              </div>
              <span>Ev</span>
              <FaChevronCircleRight />
              <span>Mağaza Təfərrüatları</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mountains"></div>

      <div className="container">
        <div className="productDetail">
          {/* <div className="productImg"><img src={product.image} /></div> */}
          <div>
            <div className="stock">Stokda</div>

            {/* <h1>{product.title}</h1> */}
            <div className="starts">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            {/* <h3>${product.price}.00</h3> */}
            <p className="info">
              2014-cü ildən bəri biz hər yaşda olan 500.000-dən çox insana
              həyatlarının ən yaxşı açıq hava təcrübəsindən zövq almağa kömək
              etmişik. İstər bir günlük, istərsə də iki həftəlik tətil, evə
              yaxın və ya xarici ölkəyə.
            </p>
            <hr className='hr'/>
           <div className="counter">
           <button>-</button>
            <span>1</span>
            <button>+</button>
           </div>
           <div className="shopping">
            <button className="basket"><AiOutlineShoppingCart /> Səbətə Əlavə Et </button>
            <button className="wish"> <IoMdHeartEmpty />  İstək siyahısına əlavə edin </button>

           </div>
           <hr className='hr'/>

          </div>
        </div>
        <hr className="hr"/>
      </div>
    </section>
  );
};

export default ProductDetails;
