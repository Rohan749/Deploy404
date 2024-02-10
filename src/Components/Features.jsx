import React from 'react'
import logo from '../assets/logo.png'
import stake from '../assets/Features Assets/stake.png'
import learn from '../assets/Features Assets/learn.png'
import test from '../assets/Features Assets/test.png'
import com from '../assets/Features Assets/com.png'

function Features() {
  const featuresList = [
    {icon: stake, name: 'DEPLOYER DAPP', info: 'Effortlessly launch ERC404 tokens using our dapp or Telegram bot. Just enter token details and deploy effortlessly.'},
    {icon: test, name: 'LAUNCHPAD FOR ERC404', info: 'Provides comprehensive token launch services, covering public minting, presale, and liquidity management—a unified solution for ERC404 token issuance.'},
    {icon: learn, name: 'ERC404 MARKETPLACE', info: 'Trade ERC404 tokens and NFTs in a user-friendly marketplace, improving liquidity and accessibility.'},
    {icon: com, name: 'ERC404 EXTENSIONS', info: 'Personalize your ERC404 tokens with advanced features such as transaction tax, transaction limits, and rarity types. z'},
  ]
  return (
    <div className='features flex items-center pt-20 justify-center flex-col py-10'>
      <div className="flex items-center justify-center flex-col gap-10 pb-10 z-10">
        {/* <img src={logo} alt="" /> */}
        <div className='inter font-bold text-center text-[#ABABAB] text-[30px]'>DEPLOY404</div>
        <p className='text-[18px] inter font-bold text-center text-[#ABABAB] mb-10'>End to end solution for ERC404 ecosystem</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-[80px] gap-y-10 lg:gap-x-[300px]">
        {featuresList.map((item, index) => (
          <div className="text-white flex flex-col justify-center items-center text-center z-10" key={index}>
            <img src={item.icon} className='my-4' alt="" />
            <h4 className='inter text-[1.3rem] font-bold my-1' 
              style={{ backgroundImage: 'linear-gradient(to right, #3e3f3f 0%, #ffff 30%, #3e3f3f 100%)', /* Adjust the colors and stops as needed */
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
              {item.name}
            </h4>


            <p className='inter w-[250px] lg:text-[#cfcfcf] text-[#727272] text-justify'>{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features