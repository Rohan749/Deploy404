import blurLeft from '../assets/blur2.png'
import blurRight from '../assets/blur.png'
import summarizer from '../assets/Making Assets/summarizer.png'


function Notes() {
  return (
    <div className='p-20 bg-[#000302] relative'>
      <img src={blurLeft} className='absolute left-0 w-[700px] top-0' alt="" />
      <img src={blurRight} className='absolute right-0 w-[700px] h-[100%] bottom-0' alt="" />

      <div className="cards flex flex-col justify-between items-center">
        <img src={summarizer} className='w-[150px]' alt="" />
        <h3 className='text-4xl font-bold inter my-5' style={{
          backgroundImage: 'linear-gradient(to right, #3e3f3f 0%, #ffff 50%, #3e3f3f 100%)', 
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          EDFI Notes
        </h3>
        <h5 className='px-3 py-1 bg-[#2a2b2b] rounded-2xl text-lg font-semibold text-white'>Development</h5>
        <p className='text-[#727272] text-center lg:text-[20px] lg:max-w-[80%] mt-10'>
        Introducing a versatile note-taking and knowledge base tool designed 
        to simplify and enhance your learning journey. This tool offers personalized 
        insights and recommendations, ensuring an enjoyable and rewarding learning 
        experience. With a vast knowledge base supported by an active community and 
        engaging games, it creates a fun and immersive environment for expanding your 
        knowledge. Coming Soon
        </p>
        <button className='bg-[#007458] hover:bg-[#07503f] mt-[3rem] transition-all border-[1px] border-[#07D1A1] font-semibold text-white px-[3rem] py-3 text-lg rounded-2xl inter'>CRYPT SUMMARIZER</button>
      </div>
    </div>
  )
}

export default Notes