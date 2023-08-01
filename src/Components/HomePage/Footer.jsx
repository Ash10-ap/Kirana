import React from 'react';
import { FaShoppingCart, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 fs-3 top-0" >
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 ">
            <h5>Contact Us</h5>
            <p><FaPhone className="me-2" /> +1 123 456 7890</p>
            <p><FaMapMarkerAlt className="me-2" /> 123 Grocery Street, City</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h5>Follow Us</h5>
            <div className="social-icons d-flex justify-content-around ">
              {/* Replace the links with your social media profiles */}
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
