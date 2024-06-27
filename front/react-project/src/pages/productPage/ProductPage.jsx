import React from "react";
import "./style.scss";
import { AiFillHome } from "react-icons/ai";
import { FaChevronCircleRight } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../redux/slices/ProductSlice";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import { products } from "../../../data/data";
const ProductPage = () => {
  // const products = useSelector((state) => state.products.products);
  // const dispatch = useDispatch();
  // const navigate=useNavigate()



  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, []);
  return (
    <section>
      <div className="background">
        <div className="container">
          <div className="center">
            <h1>SHOP </h1>
            <div className="flex">
              <div className="home">
                <AiFillHome />
              </div>
              <span>Home</span>
              <FaChevronCircleRight />
              <span>Shop </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mountains"></div>
      <div className="container">
      <div className="products">
                        {products.map((p,index)=>(
                            <div className='product' key={index}>

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
    </section>
  );
};

export default ProductPage;
