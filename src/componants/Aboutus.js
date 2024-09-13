import React from 'react'

function Aboutus() {
  return (
    <>
        <div  style={{backgroundImage: "url(images/about-us.webp)" }}class=" bg-center bg-no-repeat bg-cover tx_bg_img ">
      <div className='container mx-auto py-28 flex items-center justify-between h-[60vh]'>
        <div className='hero_sec_content text-center mx-auto max-w-[45%]'>
            <p className='text-white font-medium text-[16px]'>WELCOME TO UMINO</p>
            <p className='text-white font-medium text-[56px]'>Our Perfect Store</p>
            <p className='text-white font-normal text-[18px] '>Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect.</p>
        </div>
      </div>
    </div>

    <div className=" bg-gray-100 py-16">
        <div className="flex container mx-auto items-center justify-between">
            <div className="text w-[48%]">
            <p className='text-[#555555] font-medium text-[14px]'>OUR MISSION</p>
            <p className='text-gray-900 font-medium text-[40px]'>Story About Us</p>
            <p className='text-[#555555] font-normal text-[17px] mb-3'>We have crafted thousands of manufacturing processes, strategy that allows us to understand our customers like never before. We are present up to this point due to the trust and appreciation of our customers.</p>
            <p className='text-[#555555] font-normal text-[17px] '>To help stem the flow of plastic into the ocean, we have committed to eliminating single-use plastic from th product range and food outlets by 2023.</p>
            </div>
            <div className="img w-[48%]">
                <img src="images/about-banner.webp" className='w-[100%]' alt="" />
            </div>
        </div>
    </div>

    <div className='container mx-auto py-16 '>
        <div className='flex items-center justify-between'>
            <div className='boxes w-[31%]'>
                <img src="images/banner-about (1).webp" alt="" />
                <p className='text-gray-900 font-medium text-[20px] mt-6 mb-3'>Unique for Women’s</p>
                <p className='text-[#555555] font-normal text-[17px] '>Our collections dress a unique and feminine woman. The pieces showcase a timeless style while keeping in mind fashion aesthetics and trends.</p>
            </div>
            <div className='boxes w-[31%]'>
                <img src="images/banner-about-2.webp" alt="" />
                <p className='text-gray-900 font-medium text-[20px] mt-6 mb-3'>Elegant for Men’s</p>
                <p className='text-[#555555] font-normal text-[17px] '>From traditional tailoring to the most informal pieces. Our Umino Man collections feature the latest trends with the maximum comfort.</p>                
            </div>
            <div className='boxes w-[31%]'>
                <img src="images/banner-about (1).webp" alt="" />
                <p className='text-gray-900 font-medium text-[20px] mt-6 mb-3'>Freedom for Everyone</p>
                <p className='text-[#555555] font-normal text-[17px] '>The designs have been created adopting the current trends, while leaving room for personal expression among young people designs have been created adopting.</p>  
            </div>
        </div>        
    </div>

   <div className='bg-[#303e39]'>
        <div className='container mx-auto py-16 '>
            <div className="max-w-[800px] mx-auto text-center ">
                <p className=' font-normal text-[20px] text-[#FFDB77]'>“ Umino will become an example of the responsible business model by doing business
                    with kindness, profit and bringing practical and long-term values to customers, employees, partners, the community for the environment and for shareholders ”
                </p>  
                <p className='text-white font-normal text-[14px] mt-5'>Michael Anthony, CEO & Founder Umino</p>  
            </div>
        </div>
   </div>

   <div className="py-16">
        <div className="flex container mx-auto items-center justify-between">
        <div className="img w-[48%]">
                <img src="images/about-1.webp" className='w-[100%]' alt="" />
            </div>
            <div className="text w-[48%] text-center">
            <p className='text-[#555555] font-medium text-[14px]'>OUR FACTORIES</p>
            <p className='text-gray-900 font-medium text-[40px]'>The Best Product</p>
            <p className='text-[#555555] font-normal text-[17px] mb-8'>We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages.</p>
       <div className='text-white inline font-bold text-[14px]  rounded-full py-3 px-8 bg-[#111] hover:bg-white hover:text-[#111] hover:border-1 '>
       LEARN MORE 
            </div>
            </div>
            
        </div> 
    </div>
   <div className="pb-16">
   <div className="flex container mx-auto items-center justify-between">
       
       <div className="text w-[48%] text-center">
       <p className='text-[#555555] font-medium text-[14px]'>OUR QUALITY</p>
       <p className='text-gray-900 font-medium text-[40px]'>Timeless Products</p>
       <p className='text-[#555555] font-normal text-[17px] mb-8'>At Umino, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.</p>
       <div className='text-white inline font-bold text-[14px]  rounded-full py-3 px-8 bg-[#111] hover:bg-white hover:text-[#111] hover:border-1 '>
       LEARN MORE
            </div>
       </div>
       <div className="img w-[48%]">
           <img src="images/about-2.webp" className='w-[100%]' alt="" />
       </div>
   </div>
    </div>
    </>
  )
}

export default Aboutus