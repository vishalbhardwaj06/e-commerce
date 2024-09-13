import React, { useState,useEffect } from "react";

function Search() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [searchResult, setsearchResult] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const productList = await response.json(); 
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    
  }

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmit = () => {
    if (products.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setsearchResult(filteredProducts);
      console.log(searchResult);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
  <>
    <form>   
        <label htmlFor ="default-search" className ="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className ="relative">
            <div className ="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className ="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" className ="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here...." value={searchValue} onChange={handleSearch} required/>
            
            <button onClick={handleSubmit} type="button" className ="text-white absolute end-2.5 bottom-2.5 bg-[#9c6d3a] hover:bg-[#7f490f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form>

    <div>
        <div iv className="search_products flex flex-wrap items-center ">
            {searchResult.map(product => (
                 <div key={product.id} className="basket-product w-[18%] m-4 border overflow-hidden relative rounded hover:shadow-lg">
                 <img src={product.images} alt="" className="opacity-[0.8] hover:opacity-[1]" />  
                 <p className="text-gray-900 font-normal text-[20px] my-5 capitalize text-center"> {product.title} </p> 
                 <p className="bg-gray-300 py-5 px-12 inline rounded-lg absolute bottom-[50px] right-[50px] hidden">Add To Cart</p>   
               </div>
              ))}
          </div>
    </div>
  </>  
  )
}

export default Search