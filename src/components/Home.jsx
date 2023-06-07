import React from 'react'
import { Link } from 'react-router-dom'

import menu from "../assets/home/menu.png"
import user from "../assets/home/user.png"
import search from "../assets/home/search.png"
import filtter from "../assets/home/filtter.png"
import feature1 from "../assets/home/image.png"
import love from "../assets/home/love.png"
import product1 from "../assets/home/product1.png"
import product2 from "../assets/home/product2.png"
import HomeIcon from "../assets/home/home.png"
import cart from "../assets/home/cart.png"
import notification from "../assets/home/notification.png"
import profile from "../assets/home/profile.png"



function Home() {
  return (
    <>
    <div className='pt-[45px] min-[480px]:hidden w-full font-poppins overflow-auto scrollbar-hide h-[90vh] md:hidden'>
       <div className='px-[25px]'>
          <nav className='flex justify-between items-center'>
              <img src={menu} className='w-[35px] h-[35px]' alt="menu"/>
              <img src={user} className='w-[50px] h-[50px]' alt="user"/>
          </nav>
          <div className='mt-[23px] '>
              <h1 className='text-[25px] font-bold '>Welcome,</h1>
              <p className='text-[20px] text-[#666666] font-bold'>Our Fashions App</p>
          </div>
          <div className='flex justify-between items-center mt-[20px]'>
            <div className='bg-[#f3f4f5] p-[0px] w-[260px] h-[50px] rounded-[30px] px-[26px] flex justify-between items-center '>
              <div>
                <img src={search} alt="search" className='w-[15px]'/>
              </div>
            <input type="text" placeholder='Search...' className='bg-[#f3f4f5] w-[88%] placeholder:text-[13px] outline-none'/>
            </div>
            <img src={filtter} className='w-[44px]' alt="filtter"/>
          </div>
      </div>  


      <div className='px-[25px] mt-[25px] h-[175px] flex overflow-auto scrollbar-hide gap-4  '>
        <div>
            <div className='relative w-[260px] h-[160px] mr-[8px]'>
                <img src={feature1} className='rounded-2xl w-full h-full  cursor-pointer mr-[20px]' alt="feature" />
                    <div className='absolute top-5 left-3 cursor-pointer'>
                        <p className='font-bold text-[20px]'>50% Off</p>
                        <p className='text-[16px] font-[500]'>On everything today</p>
                        <p className='text-[11px] mt-2 font-semibold text-[#666666]'>With code: FSCREATION</p>
                        <p className='text-[10px] mt-4 font-semibold bg-black text-white w-16 text-center rounded-full p-[2px] py-[3px]'>Get Now</p>
                    </div>
            </div>
        </div>
        <div>
            <div className='relative w-[260px] h-[160px]'>
                <img src={feature1} className='rounded-2xl cursor-pointer' alt="feature" />
                    <div className='absolute top-5 left-3 cursor-pointer'>
                        <p className='font-bold text-[20px]'>70% Off</p>
                        <p className='text-[16px] font-[500]'>On everything today</p>
                        <p className='text-[11px] mt-2 font-semibold text-[#666666]'>With code: FSCREATION</p>
                        <p className='text-[10px] mt-4 font-semibold bg-black text-white w-16 text-center rounded-full p-[2px] py-[3px]'>Get Now</p>
                    </div>
            </div>
        </div>
       </div>
        
        <div className='mt-[10px] '> 
            <div className='flex justify-between items-center px-[25px] '>
                <h1 className='font-bold text-[18px]'>New Arrivals</h1>
                <p className='text-[#666666] text-[11px] cursor-pointer '>View All</p>
            </div>
            <div className='flex pl-[25px]  mt-[11px] overflow-scroll  scrollbar-hide  gap-5'>
              <div className='flex flex-col items-center '>
                <Link to="/product">
                <div style={{ backgroundImage: `url(${product1})`}} className='w-[155px] h-[170px] flex justify-end items-start '>
                    <img src={love} className='mt-[10px] mr-[12px] w-5' alt="love"  />
                </div>
                <div className='leading-[23px] mt-[5px] text-center'>
                  <p className='font-bold text-[14px] '>The Marc Jacobs</p>
                  <p className='text-[#666666] text-[11px]'>Traveler Tote</p>
                  <p className='font-bold text-[14px]'>$195.00</p>
                </div>
                </Link>
              </div>  

              <div className='flex flex-col items-center gap-5 '>
                <Link to="/product">
                <div style={{ backgroundImage: `url(${product2})`}} className='w-[155px] h-[170px] flex justify-end items-start '>
                    <img src={love} className='mt-[10px] mr-[12px] w-5' alt="love"  />
                </div>
                <div className='leading-[23px] mt-[5px] text-center'>
                  <p className='font-bold text-[14px] '>Axel Arigoto</p>
                  <p className='text-[#666666] text-[11px]'>Clean 90 Triple Sneakers</p>
                  <p className='font-bold text-[14px]'>$245.00</p>
                </div>
                </Link>
              </div>  
            </div>    
            </div>
        
        </div> 

        
        <div className='fixed shadow-2xl shadow-slate-900 bg-white w-full h-[65px] py-[15px] px-[50px] rounded-tl-[30px] rounded-tr-[30px] flex flex-row justify-between items-center bottom-0 min-[480px]:hidden'>
            <div className='bg-[#eeeeee] w-[83px] pr-[10px] h-[30px] flex justify-between items-center rounded-[30px]'>
                <img src={HomeIcon} alt="home"/>
                <p className='font-bold text-[13px]'>Home</p>
            </div>
            <img src={cart} alt="cart"/>
            <img src={notification} alt="notification"/>
            <img src={profile} alt="profile"/>
        </div>

        <div className='hidden min-[480px]:flex  flex-col justify-center h-[100vh] items-center  '>
         <h1 className='text-red-500 text-[25px]'>This prototype only for mobile design</h1>
      </div>
        </>
  )
}

export default Home