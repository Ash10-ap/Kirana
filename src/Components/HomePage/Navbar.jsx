import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './NavbarStyle.css';
import kiranalogo from "../HomePage/kiranalogo.avif";

const style={
  container :{
    justifyContent: "center",
    rowGap: "19px"
  },

  imgStyle:{
        height: "10rem",
  },

  toggleBtn:{
    border:"none"
  },

  navUpdate:{
    position:"sticky",
    top:"0",
    zIndex:"22"
  }

}
const Navbar = () => {
  const cartCount = useSelector((state)=>{
      return state.carts.length
  })
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white" style={style.navUpdate}>
      <div className="container" style={style.container}>
        <a className="navbar-brand" href="/">
          <img src={kiranalogo} alt="kirana" srcset="" style={style.imgStyle}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={style.toggleBtn}
          >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  d-flex justify-content-center align-items-center gap-md-3  fs-5 flex-fill">
            <li className="nav-item">
              
               <Link to="/" className="nav-link text-dark fw-bold text-uppercase">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold text-uppercase hover-red" href="/specials">
                Special
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-dark fw-bold text-uppercase" href="/">
                Contact
              </a>
             
            </li>

            <li className="nav-item ">
              <a className="nav-link text-dark fw-bold text-uppercase" href="/">
                Site map
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark fw-bold text-uppercase" href="/">
                Brands
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark fw-bold text-uppercase "  href="/">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="pe-5">
          <div className="cart-icon">
          <Link to="/cart"><i className="bi bi-cart fs-2" ></i></Link>  
            <span className="cart-count">{cartCount}</span>
          </div>
          </div>
          <button className="btn btn-primary ps-3">LOGIN</button>
        </div>
      </div>
    </nav>


    </>
  );
};

export default Navbar;
