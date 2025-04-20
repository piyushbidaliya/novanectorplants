import { Link } from 'react-router-dom'

function About() {
  return (
      <section className='flex flex-col md:flex-row max-w-[1440px] mx-auto w-full'>

      {/* Left Section */}
      <div className='flex-1 w-full border-b-1 border-r-1 border-t-0 py-10 sm:py-20'>
        <h1 className='font-semibold text-[36px] md:text-[50px] leading-[120%] px-4 sm:px-20'>
          About us
        </h1>
      </div>

      {/* Right Section */}
      <div className='flex-1 w-full md:w-1/2 py-10 md:py-20  border-b-1 md:border-r-1 border-t-0 md:border-l-0'>
        <p className='font-[Gilroy] text-[12px] md:text-[14px] uppercase pb-4 px-4 sm:px-20'>Our story</p>
        <h3 className='font-[Gilroy] text-[28px] md:text-[38px] leading-[120%] pb-4 px-4 sm:px-20'>Kyiv LuxeBouquets</h3>
        <p className='font-[Gilroy] text-[14px] md:text-[16px] leading-[140%] pb-10 px-4 sm:px-20'>
          We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. ...
        </p>
        <div className='px-4 sm:px-20'>
          <Link to="/about" className='border-1 py-3 px-5 md:py-4 md:px-6 uppercase'>Learn More</Link>
        </div>
      </div>

      </section>
  ) 
}

export default About
