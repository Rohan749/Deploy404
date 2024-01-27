import React from 'react'
import edu from '../assets/education.png'
import blur from '../assets/introBg.png'
function Intro() {
  return (
    <div className='flex justify-center items-center gap-10 relative flex-wrap lg:p-[60px] p-[40px] bg-[#000302] pb-10'>
      <img src={blur} className='absolute right-0' alt="" />
      <div className="img w-[500px]">
        <img src={edu} alt="" />
      </div>
      <div className="text text-center">
      <h3 className='text-[23px] font-bold inter text-white lg:leading-[60px] mb-5 lg:mb-0' style={{
        backgroundImage: 'linear-gradient(to right, #373737, #ffff)', /* Adjust the color stops as needed */
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}>
        EDU CRYPT STANDS FOR <br /> CRYPTO EDUCATION
      </h3>

        <p className='inter text-white lg:w-[600px]'>
          EdFi aims to become an educational ecosystem for all things crypto based. EdFi aims to provide the necessary tools for Web3 Education and become a leader in this category.
        </p>
      </div>
    </div>
  )
}

export default Intro