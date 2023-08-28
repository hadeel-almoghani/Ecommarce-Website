import React, { Fragment } from "react";
import TopNavbar from "../../components/Header/TopNavbar";
import AllCategories from "../../components/Categories/AllCategories";
import LatestProducts from "../../components/Product/LatestProducts";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
function Home() {
  return (
    <Fragment>
      <TopNavbar />
      <Hero/>
      <AllCategories />
      <LatestProducts />
      <Footer />
    </Fragment>
  );
}

export default Home;
