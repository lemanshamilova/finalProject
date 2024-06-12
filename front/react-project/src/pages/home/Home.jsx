import React from "react";
import Main from "../../components/main/Main";
import SecondSection from "../../components/secondSection/SecondSection";
import Trekkings from "../../components/trekkings";
import ThirdSection from "../../components/thirdSection";
import Products from "../../components/products";

const Home = () => {
  return (
    <>
      <>
        <Main />
        <SecondSection />
        <Trekkings />
        <ThirdSection/>
        <Products/>
      </>
    </>
  );
};

export default Home;
