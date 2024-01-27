import React from 'react'
import logo from '../assets/logo.png'
import Navbar from './Navbar'
import blurLeft from '../assets/blur2.png'
import blurRight from '../assets/blur.png'

function Hero() {
  return (
    <div className="hero ">
        <Navbar/>
        <div className='flex items-center flex-col justify-center gap-20 h-[100vh] relative'>
            <img src={blurLeft} className='absolute left-0 w-[700px] h-[700px] top-0' alt="" />
            <img src={blurRight} className='absolute right-0 w-[700px] h-[700px] top-0' alt="" />
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="hero-header text-center flex flex-col justify-center items-center">
                <h2
                    className='inter lg:text-[60px] text-[28px] font-bold text-white text-center'
                    style={{
                        backgroundImage: 'linear-gradient(to right, #3e3f3f 0%, #ffff 30%, #3e3f3f 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}
                    >
                    AN EDUCATIONAL HUB <br />
                    FOR CRYPTO INVESTORS
                </h2>
                <p className='text-[#09B161] inter lg:text-[24px] text-[18px] lg:w-full w-[300px] font-semibold my-5 text-center'>Providing you the tools you need for Web3 Education.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero