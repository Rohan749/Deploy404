import blurLeft from "../assets/blur2.png";
import blurRight from "../assets/blur.png";
import ai from "../assets/Making Assets/educryptAI.png";
import summarizer from "../assets/Making Assets/summarizer.png";
import logo from "../assets/logo.png";
import Tilt from "react-parallax-tilt";
import wallet from "../assets/wallet.png"
import info from "../assets/info.png"
import settings from "../assets/settings.png"
import blockchain from "../assets/blockchain.png"

function Making() {
  return (
    <div className="lg:p-20 p-10 bg-[#000302] relative">
      <img src={blurLeft} className="absolute left-0 w-[700px] top-0" alt="" />
      <img
        src={blurRight}
        className="absolute right-0 w-[700px] h-[100%] bottom-0"
        alt=""
      />
      <div className="head text-center py-10 lg:pb-16">
        <h3
          className="lg:text-4xl text-[24px] font-bold inter lg:pb-10 pb-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, #3e3f3f 30%, #ffff 50%, #3e3f3f 70%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          HOW DEPLOY404 DEPLOYER WORKS
        </h3>
        {/* <p className="text-[#ABABAB] text-[18px]">To help you learn better</p> */}
      </div>

      <div className="flex justify-center flex-wrap gap-10 items-center my-5">
        <Tilt className="cards lg:w-[25%] w-[100%] lg:h-[20rem] flex flex-col justify-between items-center">
          <h5 className="px-3 py-2 bg-[#2a2b2b] rounded-2xl text-lg font-semibold text-white">
            STEP 1
          </h5>
          <div className="mt-[1rem] flex flex-col justify-center items-center">
            <img src={wallet} style={{height: '7rem', width: '100%'}} alt="Wallet"/>
          </div>
          <button className="hover:bg-[#007458] mt-[1rem] transition-all border-[1px] border-[#07D1A1] font-semibold text-white px-[10px]  lg:py-3 py-2 text-lg rounded-2xl inter">
            CONNECT THE WALLET
          </button>
        </Tilt>

        <Tilt className="cards lg:w-[25%] w-[100%] lg:h-[20rem] flex flex-col justify-between items-center">
          <h5 className="px-3 py-2 bg-[#1d1e1e] rounded-2xl text-lg font-semibold text-white">
            STEP 2
          </h5>
          <div className="mt-[1rem] flex flex-col justify-center items-center">
            <img src={info} style={{height: '7rem', width: '100%'}} alt="Wallet"/>
          </div>
          <button className="hover:bg-[#007458] mt-[1rem] transition-all border-[1px] border-[#07D1A1] font-semibold text-white  px-[10px]  lg:py-3 py-2 text-lg rounded-2xl inter">
            FILL OUT TOKEN INFO
          </button>
        </Tilt>

        <Tilt className="cards lg:w-[25%] w-[100%] lg:h-[20rem] flex flex-col justify-between items-center">
          <h5 className="px-3 py-2 bg-[#1d1e1e] rounded-2xl text-lg font-semibold text-white">
            STEP 3
          </h5>
          <div className="mt-[1rem] flex flex-col justify-center items-center">
            <img src={settings} style={{height: '7rem', width: '100%'}} alt="Wallet"/>
          </div>
          <button className="hover:bg-[#007458] mt-[1rem] transition-all border-[1px] border-[#07D1A1] font-semibold text-white  px-[10px]  lg:py-3 py-2 text-lg rounded-2xl inter">
            GENERATE METADATA URI
          </button>
        </Tilt>

        <Tilt className="cards lg:w-[25%] w-[100%] lg:h-[20rem] flex flex-col justify-between items-center">
          <h5 className="px-3 py-2 bg-[#1d1e1e] rounded-2xl text-lg font-semibold text-white">
            STEP 4
          </h5>
          <div className="mt-[1rem] flex flex-col justify-center items-center">
            <img src={blockchain} style={{height: '7rem', width: '100%'}} alt="Wallet"/>
          </div>
          <button className="hover:bg-[#007458] mt-[1rem] transition-all border-[1px] border-[#07D1A1] font-semibold text-white  px-[10px]  lg:py-3 py-2 text-lg rounded-2xl inter">
            DEPLOY TOKEN
          </button>
        </Tilt>
      </div>
    </div>
  );
}

export default Making;
