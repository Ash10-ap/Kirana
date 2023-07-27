import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart, deleteFromcart} from '../../store/slices/CartSlice'
function AddToCart() {
 
  const dispatch = useDispatch();

  //localStorage.setItem(Math.random,'cartData')

  const data = useSelector((state)=>{
      return state.carts;      
  });

  
  const clearCart = (data) =>{
    dispatch(deleteFromcart(data));
  }
  

  const removeCart = (i) =>{
      console.log('in a remove cart',i);
      dispatch(removeFromCart(i))
    
  }

  console.log("in cart page" + data.length);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h2>Your Cart</h2>
          {data.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <button className='btn btn-success' onClick={()=>{clearCart(data)}}>clear cart</button>
              {data.map((item) => (
                <div className="card mb-3" key={item.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Price: ${item.price}</p>
                        {/* Add other details as needed */}
                      </div>
                    </div>
                  </div>
                  <button className='btn btn-danger' onClick = {()=>removeCart(item.id)}>Remove</button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default AddToCart