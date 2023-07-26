import React from 'react';
import image1 from '../HomePage/download (1).jpeg'
import image2 from '../HomePage/img2.jpeg'
import image3 from '../HomePage/img3.jpeg'
const Carousel = () => {
  const imageHeight = '200px'; 
  const imageWidth = '300px';
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{ height: imageHeight }}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="" style={{ height: imageHeight, width: imageWidth }}/>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="Image 2" style={{ height: imageHeight, width: imageWidth }}/>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="Image 3" style={{ height: imageHeight, width: imageWidth }}/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
