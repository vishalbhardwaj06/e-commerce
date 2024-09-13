import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Search from "./Search";
import Register from "./Register";

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch); 
};
  return (
    <>
    <div className="bg-[#111]  py-3 text-center">
        <p className='text-gray-600 text-white font-medium text-[12px] capitalize'> <span onClick={openModal} className="cursor-pointer">Sign</span> up for 10% off your first order</p>
    </div>
    <div className=" border-b-2 border-[#9c6d3a]">
    <div className=" p-5 ">
            <div className="flex items-center justify-between ">
                <Link to="/" className='w-[25%]'>
                    <img src="images\lgh_f6.webp" alt="" />
                </Link>
                <div className='w-[50%]'>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex justify-center flex-col  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 
                        md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" class="block capitalize  text-gray-900 font-medium text-[14px] hover:text-[#9c6d3a] border-t-4 border-white py-4 cursor-pointer 
                                " aria-current="page">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about" class="block capitalize text-gray-900 font-medium text-[14px] hover:text-[#9c6d3a] border-t-4 border-white pt-4 cursor-pointer 
                                ">ABOUT
                                US</Link>
                        </li>
                        <li>
                            <Link to="/categories" class="capitalize block text-gray-900 font-medium text-[14px] hover:text-[#9c6d3a] border-t-4 border-white pt-4 cursor-pointer 
                                ">CATEGORIES</Link>
                        </li>
                        <li>
                            <Link to="/products" class="block capitalize text-gray-900 font-medium text-[14px] hover:text-[#9c6d3a] border-t-4 border-white pt-4 cursor-pointer 
                                ">PRODUCT</Link>
                        </li>
                        <li>
                            <Link to="/contact" class="block capitalize text-gray-900 font-medium text-[14px] hover:text-[#9c6d3a] border-t-4 border-white pt-4 cursor-pointer 
                                ">CONTACT
                                US</Link>
                        </li>
                    </ul>
                </div>
                </div>
                <div className='w-[25%] text-end'>                    
                    <p>
                    <i class="fa-solid fa-magnifying-glass text-gray-900 hover:scale-[1.2] font-bold text-[22px] hover:text-[#9c6d3a] mx-3"onClick={toggleSearch}></i>
                    
                    <i class="fa-solid fa-user text-gray-900 font-bold text-[22px] hover:scale-[1.2] hover:text-[#9c6d3a] mx-3"onClick={openModal}></i>
                    <Modal isOpen={isModalOpen}>
                        <div onClick={closeModal} className="flex justify-end">
                            <i class="fa-solid fa-xmark text-gray-900 hover:scale-[1.2] font-bold text-[22px] hover:text-[#9c6d3a] mx-3"></i>
                        </div>
                        {/* <Login/> */}
                        <Register />
                    </Modal>
                    <i class="fa-solid fa-heart text-gray-900 font-bold text-[22px] hover:scale-[1.2] hover:text-[#9c6d3a] mx-3"></i>
                    <i class="fa-brands fa-opencart text-gray-900 font-bold text-[22px] hover:scale-[1.2] hover:text-[#9c6d3a] mx-3"></i>
                    </p>
                </div>
            </div>
       </div>
    </div>
    {showSearch && <Search />}    
    </>
  )
}

export default Header