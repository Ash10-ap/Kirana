import React,{useState, useEffect} from 'react'
import Footer from '../HomePage/Footer';
import Loader from '../HomePage/Loader';
import Navbar from '../HomePage/Navbar';

function Layout({children}) {
   const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[])
  return (
    <div>
     {loading ?<Loader/>:(<> <Navbar/>
      <main>{children}</main></>)
     }
      {/* <Footer/> */}
      
    </div>
  )
}

export default Layout;