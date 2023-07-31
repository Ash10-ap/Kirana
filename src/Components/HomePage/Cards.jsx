import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/CartSlice";

const mystyle = {
  height: "100%", // Set a fixed height for the cards
  width: "100%", // Set a fixed width for the cards
  padding: "4px 0"
};

const rowCenter = {
  textAlign: "center"
};

const imgStyle = {
  height: "150px", // Set a fixed height for the images
  width: "40%", // Set the images to fill the entire card width
  // objectFit: "cover", // Preserve aspect ratio of the images while covering the entire space
};

function Cards() {

const [prodData, setProdData] = useState([]);
    const dispatch = useDispatch();

const productDetails = async() =>{
    const response = await axios.get('https://localhost:7272/Products/GetAll');
    const data = await response.data;
setProdData(data);  
}

  //const [prodData, setProdData] = useState([]);
  const dispatch = useDispatch();

  const productDetails = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProdData(response.data);
  }


  const AddProCart = (data) => {
    console.log(data);
    dispatch(addToCart(data));
  }

  console.log(prodData)

  useEffect(() => {
    productDetails();
  }, []);

  return (
    <>
      <div className="container my-5 text-center">
        <div className="row justify-content-center" style={rowCenter}>
          {prodData.map((element) => {
            return (
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4" key={element.id}>
                <div className="card" style={mystyle}>
                  <div className="mx-2">
                    <img src={element.image} className="card-img-top" style={imgStyle} alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-9px">{element.title.slice(0, 25)}</h5>
                    <p className="card-text" style={{ maxHeight: "80px", overflow: "hidden" }}>
                      {element.description.slice(0,50)}
                    </p>
                    <p className="card-text">${element.price}</p>
                    <button className="btn btn-primary btn-sm" onClick={() => AddProCart(element)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
