import React, { useEffect, useState } from 'react'
import './css/filter.css'
import Product from './components/Product'
import axios from 'axios';

function Filter() {

  // search
  const [search,setSearch]=useState('');

  // products
const [proList,setProList]=useState([]);

const api="http://localhost:3030/products";


  // update the productbased on chategory
const [product,setProduct] = useState("");
// toggle data
const [toggleValue,setToggleValue] = useState('');

const handleProdectChange =(e)=>{
  setProduct(e.target.value);
  setToggleValue('product');
  
}
// update the search fild
const handleSearch=(e)=>{
 if(e.key==="Enter"){
  setSearch(e.target.value);
  setToggleValue("search");
 }
 
}

useEffect(()=>{
  const fetchData = async () => {
    try {
      const res= await axios.get(api);
      const data= await res.data;
      console.log(proList);
      console.log(search,"..>",toggleValue);
      // fillter for data by catergory
      console.log(toggleValue === 'search');
      const proFilter = toggleValue === 'search'
      ?data.filter(pro=>pro.title.includes(search))
      :toggleValue === 'product'
      ?data.filter(pro=>pro.category.toLowerCase() === product.toLowerCase())
      :data;

      console.log(proFilter);

      setProList(product.toLowerCase()=== "all categories"?data:proFilter);      
    } catch (err) {
      setProList("");
      console.log(err);
    }
  }
  fetchData();
},[product,search])


  return (
    <div>
      <div className="horizontal-bar">
        <div className='component'>
        <div className="category-section">
          {/* Add "All Categories" dropdown */}
          <select className="category-dropdown" onChange={handleProdectChange}>
            <option>All Categories</option>
            <option>Dairy Product</option>
            <option>Snacks</option>
            <option>Fruits</option>
            <option>Cannins</option>
            <option>Spices</option>
          </select>
        </div>
        <div className="search-section">
          {/* Update search input to be transparent */}
          <input type="text" className="search-input" 
          placeholder="Search..." 
          onKeyDown={handleSearch}
          />
        </div>
        </div>
      </div>
      <div className='showCategories'>        
        {proList.map((product)=>{
          return (
            <Product 
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          )
        })}

      </div>
    </div>
  )
}

export default Filter