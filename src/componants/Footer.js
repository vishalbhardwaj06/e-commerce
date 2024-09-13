import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer w-full bg-[#222]">
        <div className="container mx-auto flex flex-wrap py-10 ">
            <div className="w-full md:w-2/4 lg:w-[20%] mt-3 lg:m-0 md:px-2"> 
                <p className="text-[16px] text-white font-bold mb-5">CONTACT INFO</p> 
                <div className="flex sm:hidden mt-3 items-baseline">
                    <p className="text-white text-[15px] font-normal">ADDRESS:</p>
                    <p className="text-[13px] text-gray-400 ml-1 ">123 Street Name, City, England</p>
                </div>
                <div className="flex sm:hidden md:flex xl:hidden mt-3 items-baseline">
                    <p className="text-white text-[15px] font-normal">PHONE:</p>
                    <p className="text-[13px] text-gray-400 ml-1 cursor-pointer hover:text-[#9c6d3a]">(123) 456-7890</p>
                </div>
                <div className="flex sm:hidden md:flex xl:hidden mt-3 items-baseline">
                    <p className="text-white text-[15px] font-normal">EMAIL:</p>
                    <p className="text-[13px] text-gray-400 ml-1 cursor-pointer hover:text-[#9c6d3a]">mail@example.com</p>
                </div>
                <div className="flex sm:hidden md:flex xl:hidden mt-3 items-baseline">
                    <p className="text-white text-[15px] font-normal">WORKING:</p>
                    <p className="text-[13px] text-gray-400 ml-1 ">Mon - Sun / 9:00 AM - 8:00 PM</p>
                </div>
    
                <div className=" flex items-center justify-between hidden sm:flex md:hidden ">
                    <div>
                        <div className="flex  mt-3 items-baseline">
                            <p className="text-white text-[15px] font-normal">ADDRESS:</p>
                            <p className="text-[13px] text-gray-400 ml-1 ">123 Street Name, City, England</p>
                        </div>
                        <div className="flex  mt-3 items-baseline">
                            <p className="text-white text-[15px] font-normal">PHONE:</p>
                            <p className="text-[13px] text-gray-400 ml-1 cursor-pointer hover:text-[#9c6d3a]">(123) 456-7890</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex  mt-3 items-baseline">
                            <p className="text-white text-[15px] font-normal">EMAIL:</p>
                            <p className="text-[13px] text-gray-400 ml-1 cursor-pointer hover:text-[#9c6d3a]">mail@example.com</p>
                        </div>
                        <div className="flex  mt-3 items-baseline">
                            <p className="text-white text-[15px] font-normal">WORKING:</p>
                            <p className="text-[13px] text-gray-400 ml-1 ">Mon - Sun / 9:00 AM - 8:00 PM</p>
                        </div>
                    </div>
                </div>
    
                <p className="text-white text-[15px] font-normal hidden xl:block">ADDRESS:</p>
                <p className="text-[13px] text-gray-400 hidden xl:block">123 Street Name, City, England</p>
                <p className="text-white text-[15px] font-normal hidden xl:block">PHONE:</p>
                <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] hidden xl:block">(123) 456-7890</p>
                <p className="text-white text-[15px] font-normal hidden xl:block">EMAIL:</p>
                <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] hidden xl:block">mail@example.com</p>
                <p className="text-white text-[15px] font-normal hidden xl:block">WORKING:</p>
                <p className="text-[13px] text-gray-400 hidden xl:block">Mon - Sun/9:00AM - 8:00PM</p>
    
                <div className=" space-x-2 text-[16px] mt-5 text-gray-300">
                    <i className="fa-brands fa-facebook rounded-full border border-gray-600 hover:text-white hover:bg-[#3b5a9a] p-3 cursor-pointer"></i>
                    <i className="fa-brands fa-instagram rounded-full border border-gray-600 hover:text-white hover:bg-[#1aa9e1] p-3 cursor-pointer"></i>
                    <i className="fa-brands fa-twitter rounded-full border border-gray-600 hover:text-white hover:bg-[#7c4a3a] p-3 cursor-pointer"></i>
                </div>
            </div>
    
            <div className="w-full md:w-2/4 lg:w-[20%] mt-3 lg:m-0 md:px-2"> 
                <p className="text-[16px] text-white font-bold mb-5">CUSTOMER SERVICE</p> 
                <div className="flex lg:block justify-between">
                    <div>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">Help & FAQs</p>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">Order Tracking</p>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">Shipping & Delivery</p>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">Orders History</p>
                      
                    </div>
                    <div>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">Advanced Search</p>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">My Account</p>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">Careers</p>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">About Us</p>
                    </div>
                    <div>                  
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">Corporate Sales</p>
                        <p className="text-[13px] text-gray-400 cursor-pointer hover:text-[#9c6d3a] mb-1">Privacy</p>
                    </div>                   
                </div>
            </div>
    
            <div className="w-full md:w-2/4 lg:w-[30%] mt-3 lg:m-0 md:px-2"> 
                <p className="text-[16px] text-white font-bold mb-5">POPULAR TAGS</p> 
                <div className="grid grid-rows-3 sm:grid-rows-3 grid-flow-col ">
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Bag</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Black</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Blue</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Clothes</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Fashion</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Hub</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Shirt</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Shoes</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Skirt  </span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Sports</span>
                <span className="text-[12px] text-gray-400 cursor-pointer text-center border-gray-600 border py-1 px-2 hover:text-white hover:border-white mr-1 mb-1">Sweater</span>
                </div>
            </div>
       
            <div className="w-full md:w-2/4 lg:w-[30%]  md:px-2 mt-3 lg:m-0"> 
                <p className="text-[16px] text-white font-bold mb-5">SUBSCRIBE NEWSLETTER</p> 
                <p className="text-[13px] text-gray-400">Get all the latest information on events, sales and offers. Sign up for newsletter:</p>
                <div className="sm:flex md:block">
                    <input type="text" placeholder="Enter your email" className="px-9 lg:px-3 xl:px-8 w-full py-3 mt-5 bg-[#292c30] text-[15px] text-[#777] border border-solid border-gray-600 
                        rounded-full shadow" /> <br />
                      <button type="submit" className=" text-white bg-[#9c6d3a] px-8 py-3 mt-5 rounded-full w-full sm:w-auto md:w-full sm:ml-3 md:ml-0 font-normal shadow  hover:bg-[#9c6d3a]">Subscribe</button>
                </div>
                
            </div>
    </div>
        <div className="container mx-auto">
            <hr />
            <div className="flex flex-wrap items-center justify-between py-5" > 
                <div className="mx-auto sm:m-0"> 
                    <p className="text-[13px] text-gray-500 "> &copy; UMINO eCommerce. 2021. All Rights Reserved</p>
                </div>
            </div>
        </div>   
        </div>
  )
}

export default Footer