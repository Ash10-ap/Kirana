import React from 'react';
import '../css/product.css'; // Import the CSS file for custom styles

const Product = ({id,img,price,title}) => {
  return (
    <div className="product" key={id} >
        <div className="product-card">
            <div className="product-image">
                    <img src={img} alt="Product" />
                </div>
            <div className="product-info">
                <h3 className="product-name">{title}</h3>
                <p className="product-price">Rs. {price}</p>
            </div>
        </div>
    </div>
  );
};

export default Product;
