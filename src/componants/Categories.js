import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [productsCat, setProductsCat] = useState([]);

  async function getProductsCat() {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const categoryList = await response.json(); 
       setProductsCat(categoryList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    getProductsCat();
  }, []);
  return (
       <div className="container mx-auto text-center p-24">
          <p className='text-gray-900 font-normal text-[46px]'>You Might Like</p>
          <p className='text-gray-900 font-normal text-[16px] capitalize'>Our products are designed for everyone, environmentally friendly.</p>
          <div className="products flex flex-wrap items-center justify-between mt-16">
            {productsCat.map(cat => (
                       <Link to={`/categories/${cat.id}`} key={cat.id} className="basket-product w-[15%]" >
                       <div>
                         <img src={cat.image} alt="" className="w-[150px] hover:scale-[1.2] ease-in-out mx-auto h-[150px] rounded-full border border-gray-600" />
                         <p className="text-gray-900 font-normal text-[20px] mt-5 capitalize"> {cat.name} </p>
                       </div>
                     </Link>
              ))}
          </div>
        </div> 
  )
}

export default Categories