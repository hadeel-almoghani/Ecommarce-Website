import React, { Fragment } from "react";
import TopNavbar from "../../components/Header/TopNavbar";
import AllCategories from "../../components/Categories/AllCategories";
import LatestProducts from "../../components/Product/LatestProducts";
import LatestSaling from "../../components/Product/LatestSaling";
import Testemonial from "../../components/Testemonial/Testemonial";
import LatestOffer from "../../components/LatestOffer/LatestOffer";

import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <Hero/>
      <LatestProducts />
      <LatestSaling />
      <AllCategories/>
      <Testemonial />
      <LatestOffer />
 
      <Footer />
    </Fragment>
  );
}

export default Home;
