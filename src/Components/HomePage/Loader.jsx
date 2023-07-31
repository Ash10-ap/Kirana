import React from 'react'
import loader from '../HomePage/loader.gif'
function Loader() {
  return (
    <>
    <div className='text-center d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <img src={loader} alt="" srcset="" style={{width:"150px"}}/>
    </div>
    </>
  )
}

export default Loader