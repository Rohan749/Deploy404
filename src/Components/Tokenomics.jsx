import blurLeft from '../assets/blur2.png'
import blurRight from '../assets/blur.png'
import chart from '../assets/pichart.png'

function Tokenomics() {
  return (
    <div className='p-20 bg-[#000302] relative'>
      <img src={blurLeft} className='absolute left-0 w-[700px] top-0' alt="" />
      <img src={blurRight} className='absolute right-0 w-[700px] h-[100%] bottom-0' alt="" />

      <div className="head text-center py-10 pb-16">
        <h3 className='text-4xl font-bold inter pb-10' style={{
          backgroundImage: 'linear-gradient(to right, #3e3f3f 30%, #ffff 50%, #3e3f3f 70%)', 
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          Tokenomics
        </h3>
        <p className='text-[#ABABAB]'>How the token supply is allocated</p>
      </div>

      <div className="toks grid grid-cols-2 place-items-center p-[4rem] gap-36">
        <div className="flex flex-col gap-10">
          <img src={chart} className='lg:w-[400px] w-[300px]' alt="" />
          <div className="flex justify-center gap-10">
            <div className="inter">
              <h5 className='text-[#ABABAB] text-lg font-bold'>Total Supply</h5>
              <p className='text-xl text-white font-bold'>1.000.000.000</p>
              <p className='text-[#ABABAB]'>1 Billion tokens</p>
            </div>
            <div className="inter">
              <h5 className='text-[#ABABAB] text-lg font-bold'>Tax</h5>
              <p className='text-xl text-white font-bold'>2%</p>
              <p className='text-[#ABABAB]'>1% will get added to liquidity, and 1% will be going to treasury to help fund the project.</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="liquidity inter">
            <p className='text-xl text-white font-bold'>Liquidity</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#3FFFE2] w-[70%] h-[100%]"></span> 
              <p className='text-lg text-white absolute right-[7.3rem] font-bold'>70%</p>
            </div>
            <p className='text-[#ABABAB] w-[400px]'>To maximize the liquidity of $EdFi and ensure a healthy market.</p>
          </div>
          <div className="staking inter">
            <p className='text-xl text-white font-bold'>Staking</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#FAF467] w-[10%] h-[100%]"></span> 
              <p className='text-lg text-white absolute left-[5rem] font-bold'>10%</p>
            </div>
            <p className='text-[#ABABAB] w-[400px]'>Total of 10% of the supply will be allocated for Staking.</p>
          </div>
          <div className="treasury inter">
            <p className='text-xl text-white font-bold'>Treasury</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#FA67A0] w-[10%] h-[100%]"></span> 
              <p className='text-lg text-white absolute left-[5rem]  font-bold'>10%</p>
            </div>
            <p className='text-[#ABABAB] w-[400px]'>To fund the project and ensure longevity.</p>
          </div>
          <div className="liquidity inter">
            <p className='text-xl text-white font-bold'>Airdrop</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#D5FA67] w-[5%] h-[100%]"></span> 
              <p className='text-lg text-white absolute left-[3rem] font-bold'>5%</p>
            </div>
            <p className='text-[#ABABAB] w-[400px]'>Check Claim Portal for Airdrop Eligibility.</p>
          </div>
          <div className="marketing inter">
            <p className='text-xl text-white font-bold'>Marketing</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#A067FA] w-[5%] h-[100%]"></span> 
              <p className='text-lg text-white absolute left-[3rem] font-bold'>5%</p>
            </div>
            <p className='text-[#ABABAB] w-[400px]'>To further create awareness of the EdFi ecosystem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
