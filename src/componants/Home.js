import React, { useState,useEffect,Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'

function Home() {
  const [products, setProducts] = useState([]);
  const [productsCat, setProductsCat] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(null)
  const [showPopup, setShowPopup] = useState(false);
  const [popupProductTitle, setPopupProductTitle] = useState('');



  async function getProductsCat() {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const categoryList = await response.json(); 
      setProductsCat(categoryList);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  async function getProducts() {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const productList = await response.json(); 
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const handleCart = (productId, product) => {
    const isProductInCart = cartItems.some(item => item.id === productId);
    let updatedCartItems = [];

    if (!isProductInCart) {
      updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    } else {
      updatedCartItems = cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    const totalPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setCartItems(updatedCartItems);
    setCartTotal(totalPrice);
    
    // Set the product title for the popup
    setPopupProductTitle(product.title);

    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };


  const handleWishlist = (product) => {
    // setAddedProduct(productName);
    // setShowAlert(true);

    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 3000);

    // console.log(product)

  };

  
  useEffect(() => {
    getProducts();
    getProductsCat();
    
  },[cartItems,cartTotal]);

  return (
    <div>
    <div  style={{backgroundImage: "url(images/bg-img.webp)" }}class=" bg-center bg-no-repeat bg-cover tx_bg_img ">
      <div className='container mx-auto py-5 flex items-center justify-between h-[90vh]'>
        <div className='hero_sec_content'>
            <p className='text-gray-900 font-bold text-[16px]'>BIG SALE 50% OFF</p>
            <p className='text-gray-900 font-medium text-[86px]'>Outset</p>
            <p className='text-gray-900 font-normal text-[20px] mb-16'>Upgrade your home with our amazing assortment of decor.</p>
            <Link to="categories" className='text-white font-bold text-[16px] rounded-full py-4 px-10 bg-[#111] hover:bg-white hover:text-[#111] hover:border-1 '>
                    EXPLORE NOW
            </Link>
        </div>
      </div>
    </div>

    <div className="container mx-auto text-center px-24 pt-24">
      <p className='text-gray-900 font-normal text-[46px]'>You Might Like</p>
      <p className='text-gray-900 font-normal text-[16px] capitalize'>Our products are designed for everyone, environmentally friendly.</p>
          <div iv className="products flex flex-wrap items-center justify-between mt-16">
          {productsCat.slice(0, 5).map(cat => (
        <Link to={`/categories/${cat.id}`} key={cat.id} className="basket-product w-[19%]" >
          <div>
            <img src={cat.image} alt="" className="w-[180px] hover:scale-[1.2] ease-in-out mx-auto h-[180px] rounded-full border border-gray-600" />
            <p className="text-gray-900 font-normal text-[20px] mt-5 capitalize"> {cat.name} </p>
          </div>
        </Link>
      ))}
          </div>
    </div>

    <div className="container mx-auto text-center pt-16">
      <p className='text-gray-900 font-normal text-[46px]'>Top Trending</p>
      <p className='text-gray-900 font-normal text-[16px] capitalize'>Here’s some of our most popular products people are in love with.</p>
          <div className="products flex flex-wrap items-top justify-between mt-16 relative">
      {products.slice(2, 7).map((product) => (
        <div key={product.id} className="basket-product w-[19%] border overflow-hidden relative rounded hover:shadow-lg group">
          <img src={product.images} alt="" className="group-hover:hidden" />  
          <img src={product.images[2]} alt="" className="group-hover:block hidden" />  
          <Link to={`/product/${product.id}`} className="text-gray-900 font-medium text-[20px] my-5 capitalize group-hover:text-[#9c6d3a]">
            <p className="my-5"> {product.title} </p>
          </Link> 
          <p className="my-5 font-bold inline px-5 py-1 bg-red-600 absolute top-[0px] left-[20px] text-white rounded-full hidden group-hover:block">$ {product.price} </p>
          <p className="absolute bottom-[70px] right-[10px] hidden group-hover:block">
          <i className="fa-solid fa-heart text-gray-900 font-bold text-[22px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded focus:ring-4 shadow-lg transform active:scale-75 transition-transform animate-heartBeat"
              onClick={() => handleWishlist(product.title)}
            ></i>
            <i
              className="fa-brands fa-opencart text-gray-900 font-bold text-[20px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded focus:ring-4 shadow-lg transform active:scale-75 transition-transform" 
              onClick={() => handleCart(product.id, product)}
            ></i>
            <Link to={`/product/${product.id}`}>
              <i className="fa-solid fa-eye text-gray-900 font-bold text-[18px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded focus:ring-4 shadow-lg transform active:scale-75 transition-transform"></i>
            </Link>
          </p>   
        </div>
      ))} 
        {showPopup && (
       <div className="popup absolute top-[-30px] left-[40%] text-green-500">
       Product added to cart: {popupProductTitle}
     </div>
      )}
    </div>
    </div>

    <div className="container mx-auto text-center ">
    <div iv className="products flex flex-wrap items-center justify-between mt-16">
          {productsCat.slice(0, 2).map(cat => (
        <Link to={`/categories/${cat.id}`} key={cat.id} className="basket-product bg-gray-100 rounded-lg w-[48%]" >
          <div className="flex justify-between">
            <div className="w-[50%] p-5">
             <p className="text-gray-900 font-normal text-[32px] mt-5 text-center capitalize"> {cat.name} </p>
             <p className="text-gray-900 font-normal text-[18px] mt-5 text-center capitalize mb-6"> The Slim & Simple Maple Gaming Keyboard From Dev Byte Comes With A Sleek Body And 7- Color RGB LED Back-Lighting For Smart Functionality.Here’s some of our most popular products people are in love with. </p>
             <Link to="categories" className='text-white font-medium text-[14px]  rounded-full py-3 px-8 bg-[#111] hover:bg-white hover:text-[#111] hover:border-1 '>
                    EXPLORE NOW
            </Link>
            </div>
            <img src={cat.image} alt="" className="w-[50%] rounded-lg" />
          </div>
        </Link>
      ))}
          </div>
    </div>

    <div className="container mx-auto text-center pt-16">
      <p className='text-gray-900 font-normal text-[46px]'>Top Trending</p>
      <p className='text-gray-900 font-normal text-[16px] capitalize'>Here’s some of our most popular products people are in love with.</p>
      <div className="products flex flex-wrap items-top justify-between mt-16 relative">
            {products.slice(8,13).map(product => (
                <div key={product.id} className="basket-product w-[19%] border overflow-hidden relative rounded hover:shadow-lg group">
                  <img src={product.images} alt="" className="group-hover:hidden" />  
                  <img src={product.images[2]} alt="" className="group-hover:block hidden" />  
                  <Link to={`/product/${product.id}`} className="text-gray-900 font-medium text-[20px] my-5 capitalize group-hover:text-[#9c6d3a]">
                    <p className="my-5"> {product.title} </p></Link> 
                    <p className="my-5 font-bold inline px-5 py-1 bg-red-600 absolute top-[0px] left-[20px] text-white rounded-full hidden group-hover:block">$ {product.price} </p>
                  <p className=" absolute bottom-[70px] right-[10px] hidden group-hover:block">
                    <i class="fa-solid fa-heart text-gray-900 font-bold text-[22px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={() => handleWishlist(product)}></i>
                    <i class="fa-brands fa-opencart text-gray-900 font-bold text-[20px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded focus:ring-4 shadow-lg transform active:scale-75 transition-transform" 
                    onClick={() => handleCart(product.id, product)} ></i>
                    <Link to={`/product/${product.id}`} >
                      <i class="fa-solid fa-eye text-gray-900 font-bold text-[18px] block hover:text-[#9c6d3a] my-3 bg-white p-2 rounded focus:ring-4 shadow-lg transform active:scale-75 transition-transform"></i>
                    </Link>
                  </p>   
                </div>
              ))}
          </div>
          {showPopup && (
       <div className="popup absolute top-[-30px] left-[40%] text-green-500">
       Product added to cart: {popupProductTitle}
     </div>
      )}
    </div>




    <div  style={{backgroundImage: "url(images/3_d1.webp)" }}class=" bg-center bg-no-repeat bg-cover tx_bg_img mt-16">
              <div className="flex justify-end container px-24 py-44  mx-auto ">
                <div className="max-w-[550px] bg-white text-center px-10 py-14 rounded-lg">
                  <p className='text-gray-900 font-medium text-[14px]'>LIMITED EDITION</p>
                  <p className='text-gray-900 font-normal text-[36px] mb-6'>Unique Style</p>
                  <p className='text-gray-900 font-normal text-[16px] mb-12'>The watch is carefully designed with quality materials, such as the domed sapphire crystal, and the meticulous level of detail - from the dial to the delicate gold hour markers.</p>
                  <Link to="categories" className='text-white font-bold text-[16px] rounded-full py-3 px-8 bg-[#111] hover:bg-white hover:text-[#111] hover:border-1 '>
                      Shop Now
              </Link>
                </div>
                
              </div>
    </div>

    <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <figure class="mt-10">
          <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
          </blockquote>
          <figcaption class="mt-10">
            <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
              <div class="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
<div className="open font-medium rounded-full bg-[#9c6d3a] hover:scale-[1.1] inline px-5 py-4  text-2xl text-white fixed bottom-[50px] right-[35px]" onClick={() => setOpen(true)}>
  <span><i class="fa-solid fa-bag-shopping"></i></span>
</div>

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          ><i class="fa-solid fa-xmark text-gray-900 hover:scale-[1.2] font-bold text-[22px] hover:text-[#9c6d3a] mx-3"></i>
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.images}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="">
                                    <Link to={`/product/${product.id}`} className="text-gray-900 font-medium text-[20px] my-5 capitalize group-hover:text-[#9c6d3a]">
                                     <p className="mb-5"> {product.title} </p></Link> 
                                     <p className=" font-bold text-[16px] mt-4  capitalize"> $ {product.price} </p> 
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-[14px] text-[#9c6d3a]"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{cartTotal}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link to={`/checkout/${cartTotal}`} 
                          className="flex items-center justify-center text-white font-bold text-[16px] rounded-full py-3 px-8 bg-[#111] hover:bg-white hover:text-[#111] hover:border-1 "
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p> 
                          <button
                            type="button"
                            className="font-medium text-[14px] hover:text-[#9c6d3a]"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}

export default Home