import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoLogoInstagram } from 'react-icons/io';
import office from '../assets/office.png';
import { ImPinterest2 } from 'react-icons/im';
import { LuFacebook } from 'react-icons/lu';
import { SlSocialTwitter } from 'react-icons/sl';
import { LiaTelegramPlane } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { MdOutlineLocalPhone, MdOutlineLocationOn } from 'react-icons/md';

function Contact() {
  const form = useRef();
  const [number, setNumber] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3au1vis',
        'template_gk43klg',
        form.current,
        'f6RLRC3Sy6x578M86'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent');
          setNumber('');
        },
        (error) => {
          console.log(error.text);
          alert('Error sending message');
        }
      );
  };

  return (
    <section className='max-w-[1440px] w-full mx-auto flex md:flex-row flex-col-reverse' id='contact'>
      <div className='flex justify-between flex-col flex-1'>
        {/* Top Block */}
        <div className='w-full border-b-1 py-10 sm:py-20 px-4 sm:px-20'>
          <h3 className='font-[Gilroy] font-semibold text-[34px] sm:text-[50px] leading-[120%] w-full'>To Contact Us</h3>
          <p className='font-[Gilroy] font-medium text-[18px] leading-[140%]'>We will call you back</p>

          {/* contact form */}
          <form ref={form} onSubmit={sendEmail} className='flex sm:flex-row flex-col gap-4 mt-6'>
            <input
              type='tel'
              name='user_number'
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='+380 XX XXX XX XX'
              className='border-1 border-[#D2D2D7] p-4 w-full'
            />
            <button
              type='submit'
              className='cursor-pointer bg-black px-6 py-4 w-full uppercase text-[#FFFFFF] font-[Gilroy] text-[14px] sm:text-[16px] leading-[100%] tracking-[2.5%]'
            >
              Book A Call
            </button>
          </form>
        </div>

        {/* Bottom block */}
        <div className='flex justify-between flex-col sm:flex-row border-b-0 md:border-t-1 w-full'>
          <div className='md:w-1/2 w-full'>
            <div className='border-b-1 p-4 sm:p-0'>
              <h3 className='font-[Gilroy] font-medium sm:text-[38px] text-[26px] leading-[120%] sm:text-center'>Phone</h3>
            </div>
            <div className='p-4 sm:p-6 font-[Gilroy]'>
              <p className='p-2.5 sm:text-center text-[16px] leading-[120%] tracking-[2.5%]'><MdOutlineLocalPhone className='inline-block' /> +380980099777</p>
              <p className='p-2.5 sm:text-center text-[16px] leading-[120%] tracking-[2.5%]'><MdOutlineLocalPhone className='inline-block' /> +380980099111</p>
            </div>
          </div>
          <div className='border-r-1'></div>
          <div className='flex sm:items-center justify-center flex-col w-full md:w-1/2 h-full'>
            <div className='border-b-1 w-full p-4 sm:p-0 border-t sm:border-t-0'>
              <h3 className='font-[Gilroy] font-medium sm:text-[38px] text-[26px] leading-[120%] sm:text-center'>Address</h3>
            </div>
            <div className='p-4 sm:p-6 font-[Gilroy]'>
              <p className='p-2.5 sm:text-center text-[16px] leading-[120%] tracking-[2.5%]'>opening hours: 8 to 11 p.m.</p>
              <p className='p-2.5 sm:text-center text-[16px] leading-[120%] tracking-[2.5%]'><MdOutlineLocationOn className='inline-block' />15/4 Khreshchatyk Street, Kyiv</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Image + Social */}
      <div className='flex-1 flex flex-col'>
        <img src={office} alt='office' className='w-full h-full object-cover' />
        <div className='border-t md:border-t-0 px-6 sm:px-10 py-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-l-0 md:border-l-1 border-b md:border-b-0'>
          <p className='font-[Gilroy] font-medium text-[26px] sm:text-[38px] leading-[120%]'>Follow us:</p>
          <ul className='flex gap-6 text-[22px] sm:text-[26px]'>
            <li><Link to='/insta'><IoLogoInstagram /></Link></li>
            <li><Link to='/pinterest'><ImPinterest2 /></Link></li>
            <li><Link to='/facebook'><LuFacebook /></Link></li>
            <li><Link to='/twitter'><SlSocialTwitter /></Link></li>
            <li><Link to='/telegram'><LiaTelegramPlane /></Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
