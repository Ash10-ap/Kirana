import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptycartImg from'../AddToCart/emptycartImg.webp'
import {
  removeFromCart,
  deleteFromcart,
  increaseTheQuantity,
  decreaseTheQuantity,
} from "../../store/slices/CartSlice";

const style = {
  clearBtnStyle: {
    width: "112px",
    borderRadius: "none",
  },
};
function AddToCart() {
  // const [subtotle, setSubtotle] = useState();
  // let totle = 0;
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.carts;
  });

  let pricingData = data
    .map((ele) => ele.price * ele.quantity)
    .reduce((acc, ele) => {
      return acc + ele;  
    },0);
  // console.log(pricingData);

  const clearCart = (data) => {
    dispatch(deleteFromcart(data));
  };

  const removeCart = (i) => {
    console.log("in a remove cart", i);
    dispatch(removeFromCart(i));
  };

  const increaseQuantity = (i) => {
    dispatch(increaseTheQuantity({ i }));
  };

  const decreaseQuantity = (i) => {
    dispatch(decreaseTheQuantity({ i }));
  };

  // const subtotleHandler = () =>{

  // }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex justify-content-between">
            <h2>Your Cart</h2>
            <button
              className="btn btn-success rounded-0"
              onClick={() => {
                clearCart(data);
              }}
              style={style.clearBtnStyle}>
              Clear Cart
            </button>
          </div>
          {data.length === 0 ? (
            <div className="text-center">
            <img className="w-100" src={emptycartImg} alt="empty" srcset="" />
            </div> 
          ) : (
            <div className="table-responsive mt-3">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                    <th>Subtotle</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          className="img-fluid rounded-start"
                          alt={item.title}
                          style={{ maxWidth: "100px" }} // Adjust the max width of the image
                        />
                      </td>
                      <td className="fs-4">{item.title}</td>
                      <td className="fs-4">${item.price}</td>
                      <td>
                        <div className="d-flex">
                          <button
                            type="button"
                            className="btn btn-secondary rounded-0"
                            onClick={() => decreaseQuantity(item.id)}>
                            -
                          </button>
                          <h2 className="mx-3">{item.quantity}</h2>
                          <button
                            className="btn btn-secondary rounded-0"
                            onClick={() => increaseQuantity(item.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger rounded-0"
                          onClick={() => removeCart(item.id)}>
                          Remove
                        </button>
                      </td>

                      <td className="fs-4">${item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="card">
                <h5 className="card-header fs-4 text-uppercase">Total Pay</h5>
                <div className="card-body">
                  <h5 className="card-title ">TOTAL</h5>
                  <p className="card-text fs-4 text-bold">${pricingData}</p>
                  <a href="#" className="btn btn-info rounded-0 fs-4">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
