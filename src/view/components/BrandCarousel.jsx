import React from 'react'
import '../css/BrandCarousel.css'

function BrandCarousel() {

    const data =[
    'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/KitKat_logo.svg/2560px-KitKat_logo.svg.png',
    'https://www.haldirams.com/media/wysiwyg/Contact_Us_Main_Banner_mobile.jpg',
    'https://img.etb2bimg.com/files/retail_files/company/thumb_logo-Mother_Dairy-1432133735.png',
    'https://logotaglines.com/wp-content/uploads/2018/08/Amul-Logo-slogan.jpg',
    'https://i.ytimg.com/vi/6nP2kxxJiKU/maxresdefault.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/d5/Parle_Products_logo.svg'
    ]

  return (
    <div className='div-img'>
        <div className='top-white'></div>
            <div className='img-container'>
                { data.map(data=>(
                        <img src={data} 
                        className='imgclass' alt='img'
                        />
                ))}
        </div>
        <div className='bottom-white'></div>
    </div>
  )
}

export default BrandCarousel