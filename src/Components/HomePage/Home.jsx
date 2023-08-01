import React, { lazy, Suspense } from "react";
// import Cards from './Cards'
import Carousel from "./Carousel";
import Footer from "./Footer";
import loaderImg from "../HomePage/kiranalogo.avif";
import { useEffect } from "react";
import BrandCarousel from "../../view/components/BrandCarousel";

const Cards = lazy(() => import("./Cards"));
function Home() {
  return (
    <>
      <Carousel />
      <BrandCarousel/>
      <Suspense
        fallback={
          <div className="text-center">
            <h1 className="fs-2 text-green">Loading......</h1>
          </div>
        }>
        <Cards />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
