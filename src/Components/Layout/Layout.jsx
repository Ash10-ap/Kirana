import React from 'react'
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar'
function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout;