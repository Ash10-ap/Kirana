import React, { useEffect, useState } from 'react';
import './css/productDescrioption.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDescription() {
  const { id } = useParams();

  // fetch data form api
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const api = "http://localhost:3030/products";
      try {
        const product = await axios.get(api);
        const data = product.data;

        // fetch data by id 
        const filterId = data.filter(pid => pid.id == id);
        setProductData(filterId[0]); // Assuming the filterId will have only one matching product
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [id]);

  // Function to handle the "Add to Cart" click
  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart here
    console.log('Product added to cart:');
  };

  // Conditional rendering: Render the product information only when it is available
  return (
    <div className="product-container">
      {productData && productData.img && (
        <div className="product-img">
          <img src={productData.img} alt={productData.title} />
          <button className="add-to-cart-btn bg-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      )}
      {productData && productData.title && (
        <div className="product-info">
          <h2>{productData.title}</h2>
          <p className="price">RS. {productData.price}</p>
          <p>{productData.discription}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
