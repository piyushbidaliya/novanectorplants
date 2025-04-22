import { Link, NavLink } from "react-router-dom"
import { IoLogoInstagram } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";


function Navbar({ containerStyles, onSignInClick, onCartClick, showCart, onLinkClick }) {
  return (
    <nav className={`${containerStyles}`}>
      <div className="flex flex-col md:flex-row md:items-center items-start">
        <NavLink 
          to="/" 
          className="p-6 border-b-1 w-full md:w-fit md:border-r-1 md:border-b-0 border-[#121212] text-[#121212] font-[Gilroy] font-medium text-[16px]"
          onClick={onLinkClick}
        >
          Shop
        </NavLink>
        <a 
          href="#contact" 
          className="p-6 border-b-1 w-full md:w-fit md:border-r-1 md:border-b-0 border-[#121212] text-[#121212] font-[Gilroy] font-medium text-[16px]"
          onClick={onLinkClick}
        >
          Contact
        </a>
      </div>

      <div className="flex flex-col md:flex-row md:items-center items-start">
        <button 
          onClick={() => {
            onSignInClick();
            onLinkClick?.(); // closes mobile menu if defined
          }} 
          className="cursor-pointer p-6 md:border-r-1 md:border-b-0 border-l-0 md:border-l-1 border-[#121212] text-[#121212] font-[Gilroy] font-medium text-[16px] w-fit"
        >
          Sign In
        </button>

        <div className="border-b-1 md:border-b-0 w-full md:w-0"></div>

        <button 
          onClick={() => {
            onCartClick();
            onLinkClick?.();
          }} 
          className="cursor-pointer p-6 md:border-r-1 md:border-b-0 border-[#121212] text-[#121212] font-[Gilroy] font-medium text-[16px] w-fit"
        >
          Cart
        </button>

        <div className="border-b-1 md:border-0 w-full md:w-0"></div>
      </div>

      <div className="flex md:hidden flex-col p-6 gap-4 border-b-1">
        <p className="font-[Gilroy] font-medium text-[16px] text-[#121212]">Shipping & returns</p>
        <p className="font-[Gilroy] font-medium text-[16px] text-[#121212]">Terms & conditions</p>
        <p className="font-[Gilroy] font-medium text-[16px] text-[#121212]">Privacy policy</p>
      </div>

      <div className="flex md:hidden gap-2 p-6 border-b-1 border-[#121212]">
        <Link to="/insta" onClick={onLinkClick}><IoLogoInstagram /></Link>
        <Link to="/insta" onClick={onLinkClick}><ImPinterest2 /></Link>
        <Link to="/insta" onClick={onLinkClick}><LuFacebook /></Link>
        <Link to="/insta" onClick={onLinkClick}><SlSocialTwitter /></Link>
      </div>
    </nav>
  );
}

export default Navbar;
