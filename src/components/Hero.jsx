import hero from '../assets/hero.jpg'
import Card from './Card'
import OddCard from './OddCard'
import dryflower from '../assets/flower.png'
import flower from '../assets/freshflower.jpg'
import live from '../assets/live.png'
import aroma from '../assets/aroma.png'
import freshners from '../assets/freshners.png'

function Hero() {
  return (
    <main className='max-w-[1440px] w-full mx-auto'>
      <div className='flex flex-col md:flex-row w-full'>

        {/* Right Section */}
        <div className='flex-1 py-10 border-b border-r'>
          <h1 className='font-[Gilroy] font-semibold text-[40px] sm:text-[67px] leading-[120%] px-4 sm:px-20'>
            Kyiv LuxeBouquets
            <span className='font-[Gilroy] font-medium text-[40px] relative bottom-5'>®</span>
          </h1>
          <p className='font-[Gilroy] font-normal text-[14px] sm:text-[18px] leading-[140%] mt-4 px-4 sm:px-20'>
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
          </p>

          <div className='mt-6 flex flex-row pt-6 border-t max-w-full mx-4 sm:mx-20'>
            <div className='flex-1 border-r pr-4'>
              <img src={hero} alt="flowers" className='w-full max-w-[155.5px] sm:max-w-[256px] h-[180px] sm:h-[256px] object-cover' />
            </div>
            <div className='flex-1 pl-4 sm:pl-6 flex justify-end flex-col'>
              <p className='font-[Gilroy] text-[14px] leading-[120%]'>
                Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
              </p>
            </div>
          </div>
        </div>

        {/* Left Section */}
        <div className='flex-1 flex flex-col'>

          {/* First Row */}
          <div className='flex flex-col'>
            <Card title="Fresh Flower" img={flower} />
            <OddCard title="Dried Flower" img={dryflower} />
          </div>

          {/* Second Row */}
          <div className='flex flex-col'>
            <Card title="Live Plants" img={live} />
            <OddCard title="Aroma Candles" img={aroma} />
          </div>

          {/* Third Row */}
          <div className='flex flex-col'>
            <Card title="Fresheners" img={freshners} />
          </div>
        </div>

      </div>
    </main>
  )
}

export default Hero
