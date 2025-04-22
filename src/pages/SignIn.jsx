import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from '../firebase/setup.js'

function SignIn({ onClose }) {
  const [showOtp, setShowOtp] = useState(false)
  const [phone, setPhone] = useState('')
  const sendOtp = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
          size: 'invisible',
          callback: (response) => {
            console.log('reCAPTCHA solved');
          },
        },);
      }
  
      const appVerifier = window.recaptchaVerifier;
  
      const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
      console.log(confirmation);
      setShowOtp(true);
    } catch (error) {
      console.error("OTP Error:", error.message);
    }
  };
  
  
  return (
    <div className="bg-white w-full max-w-[720px] max-h-[720px] px-4 py-10 sm:p-10 relative z-50 mx-auto">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black hidden md:block"
      >
        <MdClose />
      </button>

      <div className="pb-10">
        <h1 className="font-[Gilroy] font-semibold text-[32px] md:text-[50px] leading-[120%]">
          Greetings! Welcome to <br /> luxury gift shop.
        </h1>

        <div className="pb-2 pt-4">
          <p className="font-[Gilroy] font-medium text-[16px] leading-[120%] pb-2">
            Use your mobile number to sign up or log in
          </p>
          <PhoneInput
            country={'us'}
            inputProps={{ className: 'w-full p-4 border border-gray-300 pl-10'}}
            buttonStyle={{ className: 'p-4 bg-[#fff]'}}
            //value={this.state.phone}
            onChange={(phone) => setPhone("+" + phone)}
          />
        </div>
        <div id="recaptcha"></div>


        <div className={`pb-2 pt-4 ${
             showOtp ? 'block' : 'hidden'
        }`}>
          <p className="font-[Gilroy] font-medium text-[16px] leading-[120%] pb-2">
            Enter code from SMS
          </p>
          <input type='text' placeholder='xx xx xx' className='w-full p-4 border border-gray-300'/>
          <p className='font-[Gilroy] font-medium text-[12px] leading-[120%] text-[#808080]'>Please check your phone for a message containing a code to enter</p>
        </div>

        <button className="py-4 px-6 bg-black font-[Gilroy] font-medium text-[16px] uppercase text-white w-full mb-6"
                onClick={sendOtp}
        >
          Continue
        </button>

        <p className={`font-Gilroy font-medium text-[16px] leading-[120%] tracking-[2.5%] text-[#808080] ${
          showOtp ? 'block' : 'hidden'
          }`}>Didn't receive a code?<span className='text-[#121212]'>Resend code</span></p>

        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <p className="font-[Gilroy] font-medium text-[16px] leading-[120%]">
          Instantly login or sign up via Google
        </p>

        <div className="flex sm:flex-row flex-col gap-2 py-2">
          <p className="flex items-center border py-4 px-6 font-[Gilroy] font-medium text-[14px] sm:text-[16px] uppercase">
            <span className='pr-2'><FcGoogle size={24} /></span>
            Continue with Google
          </p>
          <p className="flex items-center border py-4 px-6 font-[Gilroy] font-medium text-[14px] sm:text-[16px] uppercase">
            <span className='pr-2'><FaApple size={24} /></span>
            Continue with Apple
          </p>
        </div>

      </div>

      <div className="flex gap-3 font-[Gilroy] font-medium text-[14px] items-center justify-center">
        <p className="underline">Privacy Policy</p>
        <div className="border-r h-4"></div>
        <p className="underline">Terms and Conditions</p>
      </div>
    </div>
  );
}

export default SignIn;
