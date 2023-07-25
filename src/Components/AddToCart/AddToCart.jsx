import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart} from '../../store/slices/CartSlice'
function AddToCart() {
  const dispatch = useDispatch();

  const data = useSelector((state)=>{
    console.log("addTOCart==>",state.carts.length)
      return state.carts;
      
  });

  

  const removeCart = (data) =>{
      console.log('in a remove cart',data);
      dispatch(removeFromCart(data))

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
              <button className='btn btn-success'>clear cart</button>
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
                  <button className='btn btn-danger' onClick = {removeCart(item)}>Remove</button>
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