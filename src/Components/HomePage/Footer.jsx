import React from 'react'


const footerStyle = {
  
      minHeight: "100px",
     marginTop:"0",
      backgroundColor: "grey",
      color:"white",
      padding: "20px 0"
   
}

function Footer() {
  return (
     <footer className="footer" style={footerStyle}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="col-md-4">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
        <div className="col-md-4">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non eleifend est. Nulla facilisi. In in velit vel sapien pharetra semper.</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer