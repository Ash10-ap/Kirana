import React, { useEffect, useState } from "react";
import axios from "axios";
import cartSlice from "../../store/slices/CartSlice";
import { useDispatch } from "react-redux";
import {addToCart} from "../../store/slices/CartSlice"
import AddToCart from "../AddToCart/AddToCart";

const mystyle = {
     height:"450px",
     width:"19rem",
     padding:"4px 0"
    };

  const rowCenter = {
    textAlign:" -webkit-center"
  }  

  const imgStyle={
    height:"200px",
     width:"14rem"
  } 

  // console.log(CartSlice);
  
function Cards() {
const [prodData, setProdData] = useState([]);
const dispatch = useDispatch();

const productDetails = async() =>{
const  response  = await axios.get('https://fakestoreapi.com/products');
setProdData(response.data);  
}

const AddProCart = (data) =>{
console.log(data);
dispatch(addToCart(data))
}

console.log(prodData)

useEffect(()=>{
  productDetails();
},[])

  
  return (
    <>
      <div className="container-fluid my-5 text-center mx-sm-auto d-flex justify-content-center" >
  <div className="row " style={rowCenter}>
    {prodData.map((element) => {
      return (
        <div className="col-md-auto col-lg-auto col-sm-auto mb-4 " key={element.id}>
          <div className="card" style={mystyle}>
            <div className="mx-2">
            <img src={element.image} className="card-img-top" style={imgStyle} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title fs-9px">{element.title.slice(0,25)}</h5>
              <p className="card-text">
                {element.description.slice(0,50)}
              </p>
              <p className="card-text">${element.price}</p>
              <a href="#" className="btn btn-primary" onClick={()=>AddProCart(element)}>
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

{/* 
<hr/> */}

{/* <AddToCart/> */}

    </>
  );
}

export default Cards;
