import { FiPlus } from 'react-icons/fi'
import product from '../assets/productflowers.jpg'
import { GoDash } from 'react-icons/go'
import { useState } from 'react'
import img from '../assets/glassvase.jpg'
import img2 from '../assets/hammershoi.jpg'
import img3 from '../assets/ceramicvase.jpg'
import img4 from '../assets/steelvase.jpg'
import img5 from '../assets/bamboo.png'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import liked from '../assets/rattan.png'
import liked2 from '../assets/lime.png'
import liked3 from '../assets/cedar.png'
import liked4 from '../assets/ocean.png'

const Vase = [
  {
    image: img,
    alt: "glass vase",
    name: "Glass Vase",
    price: "15"
  },
  {
    image: img2,
    alt: "hammershoi",
    name: "Hammershoi",
    price: "45"
  },
  {
    image: img3,
    alt: "ceramic vase",
    name: "Ceramic Vase",
    price: "35"
  },
  {
    image: img4,
    alt: "steel vase",
    name: "Steel Vase",
    price: "25"
  },
  {
    image: img5,
    alt: "bamboo vase",
    name: "Bamboo",
    price: "15"
  },
]

const SuggestedProducts = [
  {
    image: liked,
    alt: "rattan grapefruit",
    name: "Rattan Grapefruit",
    price: "48"
  },
  {
    image: liked2,
    alt: "Lime & Matcha",
    name: "Lime & Matcha",
    price: "46"
  },
  {
    image: liked3,
    alt: "Cedar & Lavender",
    name: "Cedar & Lavender",
    price: "64"
  },

  {
    image: liked4,
    alt: "Ocean mist",
    name: "Ocean Mist",
    price: "58"
  },
]

function Product() {
  const [counter, setCounter] = useState(1)


  return (
    <main className='max-w-[1440px] mx-auto w-full '>
      <div className='flex md:flex-row flex-col border-b-1 border-r-1'>
        <div className='flex-1 max-h-[753px] w-full'>
          <img src={product} alt="flowers" className='w-[720px] h-[420px] sm:h-[670px] md:h-[720px]'/>
        </div>
        
        <div className='flex-1 h-auto py-10'>
          <p className='font-[Gilroy] font-medium text-[12px] sm:text-[14px] leading-[120%] uppercase pb-4 px-4 sm:px-10'>Fresh Flowers <span className=''>/ Rosy Delight</span></p>
          <div className='pb-4 px-4 sm:px-10'>
            <h3 className='font-[Gilroy] font-medium text-[26px] sm:text-[38px] leading-[120%]'>Rosy Delight - $100</h3>
            <p className='font-[Gilroy] font-normal text-[14px] sm:text-[16px] leading-[140%]'>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p>
          </div>

          <p className='font-[Gilroy] font-medium text-[18px] leading-[140%] px-4 sm:px-10'>Quantity <span className='border-1 ml-2 inline-flex gap-2 items-center px-2'><GoDash
           onClick={()=>setCounter(counter > 0 ? counter - 1 : counter)} className='border-r-1'/>
           {counter}
           <FiPlus onClick={()=>setCounter(counter + 1)} className='border-l-1'/></span></p>

           <div className='max-w-[688px] h-[187px] py-4 px-4 sm:px-10'>
              <p className='font-[Gilroy] font-medium text-[18px] leading-[140%] pb-4'>Excellent Combination with:</p>
              <div className='flex items-center justify-evenly'>
              <FaAngleLeft className='relative bottom-8 'size={25}/>
              {Vase.map((vase, index)=>(
                <div className='w-[100px] h-[146px] px-4' key={index}>
                    <img src={vase.image} alt={vase.alt} className='border-1 border-[#D2D2D7] mb-1 w-[100px] h-[100px]'/>
                    <p className='font-[Gilroy] font-normal text-[14px] leading-[120%] mb-1'>{vase.name}</p>
                    <p className='font-[Gilroy] font-normal text-[14px] leading-[120%] text-[#808080] mb-1'>${vase.price}</p>
                </div>
              ))}
              <FaAngleRight className='relative bottom-8' size={25}/>
              </div>
           </div>

           <div className='font-[Gilroy] leading-[140%] pb-4 pt-10 px-4 sm:px-10'>
              <p className='text-[18px] font-medium'>Price options</p>
              <div className='font-normal text-[16px] pt-4'>
                <input type="checkbox" className=''/> <label htmlFor="">One time purchase. Price $100</label>
              </div>

              <div className='font-normal text-[16px] pt-2'>
                <input type="checkbox" className=''/> <label htmlFor="">Subscribe now, and save 25% on this order. </label>
              </div>
           </div>

            <div className='px-4 sm:px-10'>
              <button className='bg-black text-center uppercase w-full text-white py-4 px-6 font-[Gilroy] font-medium text-[14px] sm:text-[16px] leading-[120%] tracking-[3%]'>Add to basket</button>
           </div>
        </div>
      </div>

      <div className='py-10 sm:py-20 px-2.5 border-b-1'>
        <h1 className='font-[Gilroy] font-medium text-[26px] sm:text-[38px] leading-[120%] text-center'> You may also like…</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 '>
        {SuggestedProducts.map((liked, index)=>(
        <div className='border-b-1 border-r-1 font-[Gilroy]' key={index}>
          <img src={liked.image} alt={liked.alt} className='w-full h-[375px] object-cover' />
          <p className='font-medium text-[16px] leading-[120%] text-center'>{liked.name}</p>
          <p className='font-medium text-[120%] text-center text-[#808080] pb-4'>price {liked.price}$</p>
        </div>
        ))}
      </div>
    </main>
  )
}

export default Product
