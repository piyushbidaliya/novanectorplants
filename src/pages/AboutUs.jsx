import React from 'react'
import { ImPinterest2 } from 'react-icons/im'
import { IoLogoInstagram } from 'react-icons/io'
import { LiaTelegramPlane } from 'react-icons/lia'
import { LuFacebook } from 'react-icons/lu'
import { SlSocialTwitter } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import hero from '../assets/abouthero.jpg'
import aboutcard from '../assets/aboutcard1.png'
import aboutcard2 from '../assets/aboutcard2.png'
import aboutcard3 from '../assets/aboutcard3.png'


function AboutUs() {
  return (
    <main className='max-w-[1440px] mx-auto w-full'>
        {/* section 1 starts */}
        <div className='flex flex-col md:flex-row items-center border-b-1'>
            <div className='py-10 sm:py-20 flex-1 w-full mx-auto'>
                <h1 className='text-center font-[Gilroy] font-semibold sm:text-[50px] text-[34px] leading-[120%] pb-2 px-4 sm:px-20'>Our Story</h1>
                <p className='text-center font-[Zapfino] font-normal italic text-[20px] sm:text-[28px] leading-[100%] pb-2 px-4 sm:px-20'>About</p>
                <p className='font-[Gilroy] font-semibold text-[34px] sm:text-[50px] leading-[120%] text-center pb-2 px-4 sm:px-20'>Kyiv LuxeBouquets</p>
                <p className='font-[Gilroy] text-normal text-[18px] text-center px-4 sm:px-20'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                <ul className='flex items-center justify-center p-8 gap-6 px-4 sm:px-20'>
                    <li className='border-1 rounded-full p-1'><Link to="/insta"><IoLogoInstagram /></Link></li>
                    <li className='border-1 rounded-full p-1'><Link to="/insta"><ImPinterest2 /></Link></li>
                    <li className='border-1 rounded-full p-1'><Link to="/insta"><LuFacebook /></Link></li>
                    <li className='border-1 rounded-full p-1'><Link to="/insta"><SlSocialTwitter /></Link></li>
                    <li className='border-1 rounded-full p-1'><Link to="/insta"><LiaTelegramPlane /></Link></li>
                </ul>
            </div>
            <div className='flex-1 w-full border-l-0 md:border-l-1'>
                <img src={hero} alt="" className='w-[720px] max-h-[420px] sm:max-h-[500px] md:max-h-[720px] object-cover'/>
            </div>
        </div>
        {/* section 1 ends here */}
        <div className='px-4 py-10 sm:p-20 border-b-1'>
            <p className='font-[Gilroy] font-medium text-[12px] sm:text-[14px] leading-[120%] text-center uppercase pb-4'>our story</p>
            <h1 className='font-[Gilroy] font-medium text-[26px] sm:text-[38px] leading-[120%] text-center pb-4'>Our Founder's Passion</h1>
            <p className='font-[Gilroy] font-normal text-[16px] leading-[140%] text-center'>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
        </div>
        {/* section 2 starts here */}
        <div className='flex flex-col md:flex-row border-b-1 '>
            <div className='flex-1 w-full max-h-[720px]'>
                <img src={aboutcard} alt="flowers cutting" className='max-w-720px max-h-[420px] sm:max-h-[500px] md:max-h-[720px] h-full object-cover w-full'/>
            </div>
            <div className='flex-1 w-full py-10 sm:py-20 border-l-0 md:border-l-1 items-center'>
                <h3 className='font-[Gilroy] font-medium text-[26px] sm:text-[38px] leading-[120%] pb-4 px-4 sm:px-20'>Expertly Crafted Bouquets</h3>
                <p className='font-[Gilroy] font-normal text-[16px] leading-[140%] px-4 sm:px-20'>At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row-reverse border-b-1'>
            <div className='flex-1 w-full md:border-l-1 border-l-0'>
                <img src={aboutcard2} alt="flowers cutting" className='w-[720px] max-h-[420px] sm:max-h-[500px] md:max-h-[720px] object-cover'/>
            </div>
            <div className='flex-1 w-full py-10 sm:py-20'>
                <h3 className='font-[Gilroy] font-medium text-[26px] sm:text-[38px] leading-[120%] pb-4 px-4 sm:px-20'>Bouquets, Gifts & Ambiance</h3>
                <p className='font-[Gilroy] font-normal text-[16px] leading-[140%] px-4 sm:px-20'>In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.</p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row border-b-1'>
            <div className='flex-1 w-full'>
                <img src={aboutcard3} alt="flowers cutting" className='w-[720px] max-h-[420px] sm:max-h-[500px] md:max-h-[720px] object-cover'/>
            </div>
            <div className='flex-1 w-full py-10 sm:py-20 border-l-0 md:border-l-1'>
                <h3 className='font-[Gilroy] font-medium text-[26px] sm:text-[38px] leading-[120%] pb-4 px-4 sm:px-20'>Making Every Day Special</h3>
                <p className='font-[Gilroy] font-normal text-[16px] leading-[140%] px-4 sm:px-20'>Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.</p>
            </div>
        </div>
        {/* section 2 ends here */}
        <div className='px-4 py-10 sm:p-20 border-b-1 flex items-center flex-col gap-3'>
            <h1 className='font-[Gilroy] font-medium text-[26px ]sm:text-[38px] leading-[120%] text-center'>Discover Our Beautiful Bouquets</h1>
            <p className='font-[Gilroy] font-normal text-[18px] leading-[140%] text-center pb-4'>Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
            <button className='bg-black text-white py-4 px-6 uppercase font-[Gilroy] font-medium tex-[14px] sm:text-[16px] leading-[120%] tracking-[3%]'>shop now</button>
        </div>
    </main>
  )
}

export default AboutUs
