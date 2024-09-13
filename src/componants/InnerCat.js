import React, { useState,useEffect} from "react";
import { useParams,Link } from 'react-router-dom';

const InnerCat = () => {
  let { categoryId } = useParams();
  const [CatProduct, setCatProduct] = useState([]);

  async function getProductsByCat() {
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/
products/?categoryId=${categoryId}`);
      const categoryProduct = await response.json(); 
      setCatProduct(categoryProduct);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    getProductsByCat();
  },[CatProduct]);

  return (
    <>
    <div className="container mx-auto text-center py-16">
      <p className='text-gray-900 font-normal text-[46px]'>Top Trending</p>
      <p className='text-gray-900 font-normal text-[16px] capitalize'>Here’s some of our most popular products people are in love with.</p>
      <div className="products flex flex-wrap items-top justify-between mt-16 relative">
            {CatProduct.map(productByCat => (
                <Link to={`/product/${productByCat.id}`} key={productByCat.id} className="basket-product w-[19%] border overflow-hidden relative rounded hover:shadow-lg group">
                  <img src={productByCat.images} alt="" className="group-hover:hidden" />  
                  <img src={productByCat.images[1]} alt="" className="group-hover:block hidden" />  
                  <p className="text-gray-900 font-normal text-[20px] my-5 capitalize"> {productByCat.title} </p> 
                  <p className="bg-gray-300 py-5 px-12 inline rounded-lg absolute bottom-[50px] right-[50px] hidden">Add To Cart</p> 

                    <p className=" absolute bottom-[70px] right-[10px] hidden group-hover:block">
                    <i class="fa-solid fa-heart text-gray-900 font-bold text-[22px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded"></i>
                    <i class="fa-brands fa-opencart text-gray-900 font-bold text-[20px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded"></i>
                    <Link to={`/product/${productByCat.id}`} >
                      <i class="fa-solid fa-eye text-gray-900 font-bold text-[18px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded"></i>
                    </Link>
                  </p>     
                </Link>
                
              ))}
          </div>
    </div>
    </>
  );
};

export default InnerCat;