import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';

function SignIn({ onClose }) {
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
          <input type="text" placeholder="+380 XX XXX XX XX" className="p-4 border border-gray-300 w-full" />
        </div>

        <button className="py-4 px-6 bg-black font-[Gilroy] font-medium text-[16px] uppercase text-white w-full mb-6">
          Continue
        </button>

        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <p className="font-[Gilroy] font-medium text-[16px] leading-[120%]">
          Instantly login or sign up via Google
        </p>

        <div className="flex sm:flex-row flex-col gap-2 py-2">
          <p className="border py-4 px-6 font-[Gilroy] font-medium text-[14px] sm:text-[16px] uppercase">
            <span className='inline-flex pr-2'><FcGoogle  size={24}/></span>
          Continue with Google
          </p>
          <p className="border py-4 px-6 font-[Gilroy] font-medium text-[14px] sm:text-[16px] uppercase">
            <span className='inline-flex items-center pr-2'><FaApple  size={24}/></span>
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
