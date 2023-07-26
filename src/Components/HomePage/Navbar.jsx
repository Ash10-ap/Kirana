import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './NavbarStyle.css'
const Navbar = () => {
  const cartCount = useSelector((state)=>{
      return state.carts.length
  })
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h1>Kirana</h1>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  d-flex justify-content-center flex-fill">
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold text-uppercase" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ps-5">
              <a className="nav-link text-dark fw-bold text-uppercase hover-red" href="/">
                Special
              </a>
            </li>
            <li className="nav-item ps-5">
              <a className="nav-link text-dark fw-bold text-uppercase" href="/">
                Contact
              </a>
            </li>

            <li className="nav-item ps-5">
              <a className="nav-link text-dark fw-bold text-uppercase" href="/">
                Site map
              </a>
            </li>

            <li className="nav-item ps-5">
              <a className="nav-link text-dark fw-bold text-uppercase" href="/">
                Brands
              </a>
            </li>

            <li className="nav-item ps-5">
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

     <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white bg-danger" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-grid-3x3-gap"></i> Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Category 1</a></li>
                <li><a className="dropdown-item" href="/">Category 2</a></li>
                <li><a className="dropdown-item" href="/">Category 3</a></li>
                <li><a className="dropdown-item" href="/">Category 4</a></li>
                <li><a className="dropdown-item" href="/">Category 5</a></li>
                <li><a className="dropdown-item" href="/">Category 6</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
