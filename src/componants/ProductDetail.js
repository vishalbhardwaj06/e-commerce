import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import Modal from "react-modal";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
function ProductDetail() {
    let { productId } = useParams();
     const [product, setProduct] = useState([]);
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [value, setValue] = useState(0); 
     const [totalPrice, setTotalPrice] = useState(0);
     const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const handleInputChange = (e) => {
        let inputValue = parseInt(e.target.value);
        if (inputValue < e.target.min) {
          inputValue = parseInt(e.target.min);
        } else if (inputValue > e.target.max) {
          inputValue = parseInt(e.target.max);
        }
        setValue(inputValue);
       
      };
    
      
      async function getProduct() {
        try {
          const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
          const products = await response.json(); 
          console.log(products);
          setProduct(products);
          if(value === 0){
            setTotalPrice(products.price); 
          }else{
            setTotalPrice(products.price * value); 
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
      
      const decreaseValue = () => {
        setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
      };
      
      const increaseValue = () => {
        setValue((prevValue) => (prevValue < 100 ? prevValue + 1 : prevValue));
      };


      useEffect(() => {
        getProduct();setTotalPrice(product.price * value); 
      }, [product.price, value]);
  return (
    <>
    <div className="text-center my-12">
      <p className='text-gray-900 font-normal text-[46px] capitalize'>{product.title}</p>
      <p className='text-gray-900 font-normal text-[16px] capitalize'>Here’s some of our most popular products people are in love with.</p>
    </div>
    
        <div key={product.id} className="basket-product container mx-auto soverflow-hidden relative rounded my-5 flex">
            <div className="w-[50%] image px-10 group scroll-smooth	">
                <img src={product.images} alt="" className="opacity-[1] hover:opacity-[0.9] rounded" /> 
                <div className="flex ">
                {product.images && product.images.map(cat => (
                  <div className=" mt-4 m-1 w-[20%]" key={cat.id}>
                          <img src={cat} alt="" className="opacity-[1] hover:opacity-[0.9] rounded " />
                  </div>  
              ))}
                </div>
            </div>
            <div className="w-[50%] content">
                <div className="information">
                <p className="text-gray-900 font-semibold text-[36px] hover:text-[#9c6d3a] capitalize"> {product.title} </p>  
                <p className=" font-bold text-[36px] mt-4  capitalize"> $ {product.price} </p>  
                <p className="text-gray-900 font-normal text-[16px] mt-4 capitalize"> {product.description}. </p>  
                <div className="flex mt-4">
                    <p className="text-gray-900 font-semibold text-[14px] capitalize">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i> <span className="text-[16px] font-normal text-gray-900">2 reviews</span>  </p>
                    <p className="text-[14px] font-normal text-[#9c6d3a] ms-10">
                        <i class="fa-solid fa-fire-flame-simple" style={{color: "#ff0a0a",}}></i> <span className="capitalize">8 sold in last 24 hours</span>
                    </p>
                </div>
                <p className="text-gray-900 font-normal text-[16px] mt-4 capitalize"><span><i class="fa-solid fa-eye"></i></span>  17 people are viewing this right now. </p>  
                <p onClick={openModal} className="text-gray-900 font-normal text-[16px] mt-4 capitalize cursor-pointer"><span><i class="fa-regular fa-circle-question "></i></span>  Ask a Question</p>  
                <Modal isOpen={isModalOpen}>
                        <div onClick={closeModal} className="flex justify-end">
                            <i class="fa-solid fa-xmark text-gray-900 hover:scale-[1.2] font-bold text-[22px] hover:text-[#9c6d3a] mx-3"></i>
                        </div>
                        <ContactForm />
                    </Modal>
                <hr className="mt-4" />
                </div>

                <div className="additional_info">
                <p className="text-gray-900 font-bold text-[24px] mt-6 capitalize"> Add your personalization</p>  
                <p className="text-gray-900 font-normal text-[16px] mt-6 capitalize"> Add your name, note or upload your customized idea image to personalise your item. Custom items cannot be returned or exchanged.</p>  

                <div class="my-6">
                    <label for="default-input" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Personalization</label>
                    <input type="text" id="default-input" placeholder="Customize note" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 block w-full py-4 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>

                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 

                <p className="text-gray-900 font-medium text-[15px] mt-6 capitalize"> Hurry Up! Only <span className="text-[#9c6d3a]"> 87 </span>left in stock!</p>  
                <hr className="mt-4 border-b-2 border-[#9c6d3a]" />
                </div>

                <div className="add-to-cart mt-4 flex">
                <div className="flex items-center w-56 me-10">
                    <button
                    className="px-3 py-2 mr-2 bg-gray-200 rounded-md"
                    onClick={decreaseValue}
                    aria-label="Decrease value"
                    >
                   <i class="fa-solid fa-minus"></i>
                    </button>
                    <input
                    className="w-full h-10 rounded-md px-4 border border-gray-300"
                    type="number"
                    id="rangeInput"
                    name="rangeInput"
                    min={0} 
                    max={100}
                    value={value}
                    onChange={handleInputChange}
                    />
                    <button
                    className="px-3 py-2 ml-2 bg-gray-200 rounded-md"
                    onClick={increaseValue}
                    aria-label="Increase value"
                    >
                   
                   <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                </div>
                <div className="w-full mt-8">
                  <Link to={`/checkout/${totalPrice}`} type="submit" className="w-full bg-gray-900 text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Checkout</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail


