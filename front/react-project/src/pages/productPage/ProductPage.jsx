import React from "react";
import "./style.scss";
import { AiFillHome } from "react-icons/ai";
import { FaChevronCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <section>
      <div className="background">
        <div className="container">
          <div className="center">
            <h1>MAĞAZA </h1>
            <div className="flex">
              <div className="home">
                <AiFillHome />
              </div>
              <span>Ev</span>
              <FaChevronCircleRight />
              <span>Mağaza </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mountains"></div>
    </section>
  );
};

export default ProductPage;
