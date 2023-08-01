import React from 'react';
import '../css/product.css'; // Import the CSS file for custom styles
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/CartSlice';

const Product = ({id,img,price,title,product}) => {
  const dispatch = useDispatch();

  return (
    <div className="product" key={id} >
        <div className="product-card">
            <div className="product-image">
              <Link to={`/product/${id}`}>
                <img src={img} alt="Product" />
              </Link>
            </div>
            <div className="product-info">
                <h3 className="product-name">{title}</h3>
                <small className="product-price">Rs. {price}</small>
            </div>
            <button className="btn-addcart btn btn-primary btn-sm rounded-0" onClick = {()=>dispatch(addToCart(product))}>
              Add To Cart
            </button>
        </div>
    </div>
  );
};

export default Product;
