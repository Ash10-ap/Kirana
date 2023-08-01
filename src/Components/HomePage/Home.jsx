import React, { lazy, Suspense } from "react";
// import Cards from './Cards'
import Carousel from "./Carousel";
import Footer from "./Footer";
import loaderImg from "../HomePage/kiranalogo.avif";
import { useEffect } from "react";
import Cards from "./Cards";


function Home() {
  return (
    <>
      <Carousel />

      <Cards />

      <Footer />
    </>
  );
}

export default Home;
