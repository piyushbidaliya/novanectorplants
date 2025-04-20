import React from 'react'
import { ImPinterest2 } from 'react-icons/im'
import { IoLogoInstagram } from 'react-icons/io'
import { LiaTelegramPlane } from 'react-icons/lia'
import { LuFacebook } from 'react-icons/lu'
import { SlSocialTwitter } from 'react-icons/sl'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full bg-white max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
      {/* Section 1 */}
      <div className="px-4 py-10 sm:p-10 border-b-1 border-r-1 flex flex-col justify-between">
        <div>
          <p className="font-[Gilroy] font-normal text-[16px] leading-[140%] pb-6">
            Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
          </p>
          <input type="email" placeholder="Your Email" className="border p-3 border-[#D2D2D7] mb-4 w-full" />
          <Link to="/contact">
            <p className="bg-black text-white text-center font-[Gilroy] font-medium text-[14px] sm:text-[16px] uppercase py-4 px-6 w-full">
              Rewind
            </p>
          </Link>
        </div>
      </div>

      {/* Section 2 */}
      <div className="px-4 py-10 sm:p-10 border-b-1 border-r-1 flex flex-col justify-between">
        <div>
          <h3 className="font-[Gilroy] font-medium text-[18px] sm:text-[21px] text-[#808080] pb-4">Contact Us</h3>
          <p className="text-sm text-[#808080] pb-4 font-[Gilroy] font-normal text-[14px] sm:text-[16px] leading-[120%]">
            Address <br />
            <span className="text-[#121212] font-medium font-[Gilroy] text-[14px] sm:text-[16px] leading-[120%] tracking-[2.5%]">15/4 Khreshchatyk Street, Kyiv</span>
          </p>
          <p className="text-sm text-[#808080] pb-4 font-[Gilroy] text-[14px] sm:text-[16px] leading-[120%]">
            Phone <br />
            <span className="text-[#121212] font-medium font-[Gilroy] text-[14px] sm:text-[16px] leading-[120%] tracking-[2.5%]">+380980099777</span>
          </p>
          <p className="text-sm text-[#808080] pb-4 font-[Gilroy] text-[14px] sm:text-[16px] leading-[120%]">
            General <br />
            <span className="text-[#121212] font-medium font-[Gilroy] text-[14px] sm:text-[16px] leading-[120%]">Kiev.Florist.Studio@gmail.com</span>
          </p>
          <h3 className="font-[Gilroy] font-medium text-[18px] sm:text-[21px] text-[#808080] pb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <Link to="/insta"><IoLogoInstagram /></Link>
            <Link to="/insta"><ImPinterest2 /></Link>
            <Link to="/insta"><LuFacebook /></Link>
            <Link to="/insta"><SlSocialTwitter /></Link>
            <Link to="/insta"><LiaTelegramPlane /></Link>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="px-4 py-10 sm:p-10 border-b-1 border-r-1 flex flex-col justify-between">
        <div>
          <h3 className="font-[Gilroy] font-medium text-[18px] sm:text-[21px] text-[#808080] pb-4">Shop</h3>
          <ul className="space-y-2 font-[Gilroy] text-[14px] sm:text-[16px] leading-[120%] tracking-[2.5%]">
            <Link to="/product"><li className=''>All Products</li></Link>
            <Link to='/category'><li className=''>Fresh Flowers</li></Link>
            <Link to='/category'><li className=''>Dried Flowers</li></Link>
            <Link to='/category'><li className=''>Live Plants</li></Link>
            <Link to='/category'><li className=''>Designer Vases</li></Link>
            <Link to='/category'><li className=''>Aroma Candles</li></Link>
            <Link to='/category'><li className=''>Freshener Diffuser</li></Link>
          </ul>
          <h3 className="mt-6 font-[Gilroy] font-medium text-[18px] sm:text-[21px] text-[#808080] pb-4">Service</h3>
          <ul className="space-y-2 font-[Gilroy] text-[14px] sm:text-[16px] leading-[120%] tracking-[2.5%]">
            <Link to='/subscription'><li className=''>Flower Subscription</li></Link>
            <Link to='/subscription'><li className=''>Wedding & Event Decor</li></Link>
          </ul>
        </div>
      </div>

      {/* Section 4 */}
      <div className="px-4 py-10 sm:p-10 border-b-1 border-r-1 flex flex-col justify-between">
        <div>
          <h3 className="font-[Gilroy] font-medium text-[21px] text-[#808080] pb-4">About Us</h3>
          <ul className="space-y-2 font-[Gilroy] text-[14px] sm:text-[16px] leading-[120%] tracking-[2.5%]">
            <Link to="/about"><li>Our Story</li></Link>
            <Link to="/about"><li>Blog</li></Link>
            <Link to="/about"><li>Shipping & returns</li></Link>
            <Link to="/about"><li>Terms & conditions</li></Link>
            <Link to="/about"><li>Privacy policy</li></Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
