import React from 'react'
import './css/productDescrioption.css';

function ProductDescription() {

    const product = {
        id: 1,
        img: 'https://placekitten.com/400/400', // Replace with your product image URL
        name: 'Sample Product',
        price: 19.99,
        description: 'This is a sample product description.',
      };
    
      // Function to handle the "Add to Cart" click
      const handleAddToCart = () => {
        // Implement your logic to add the product to the cart here
        console.log('Product added to cart:', product);
      };

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={product.img} alt={product.name} />
        <button className="add-to-cart-btn bg-success" onClick={handleAddToCart}>
            Add to Cart
        </button>
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDescription