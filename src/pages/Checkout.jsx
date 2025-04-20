import { MdLockOutline } from 'react-icons/md'
import flowers from '../assets/freshflower.jpg'
import { BsCart3 } from 'react-icons/bs'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useState } from 'react';
function Checkout() {
    const [showSummary, setShowSummary] = useState(false);
  return (
    <main className='max-w-[1440px] mx-auto w-full'>
        <div className='flex flex-col-reverse md:flex-row border-b-1'>
            {/* left section */}
            <div className='py-10 px-4 sm:px-20 max-w-[720px] w-full'>
                <p className='font-[Gilroy] font-medium text-[12px] sm:text-[14px] leading-[120%] uppercase pr-2 my-6'><span>information &gt;</span><span >shipping &gt;</span><span >payment &gt;</span></p>
                <p className='bg-[#D2D2D7] p-10 font-[Gilroy] font-normal text-[16px] leading-[140%]'>Already have an account? Log in for faster checkout</p>
                <div className='w-full'>
                    <p className='font-[Gilroy] font-medium text-[18px] leading-[140%] my-4'>1.Contact information</p>
                    <div className='mb-4'>
                        <input type="text" placeholder='Your Name' className='border-1 p-4 border-[#D2D2D7] w-full'/>  
                    </div>
                    <div className='mb-4'>
                        <input type="text" placeholder='Your Email' className='border-1 p-4 border-[#D2D2D7] w-full'/>  
                    </div>
                    <div className='mb-4'>
                        <input type="text" placeholder='Your Phone number*' className='border-1 p-4 border-[#D2D2D7] w-full'/>
                    </div>
                    <button className='bg-black text-white uppercase font-[Gilroy] font-medium py-4 px-6 w-full text-[16px]'>Continue to shipping</button>
                </div> 
                {/* shipping details */}
                <div className='w-full'>
                    <p className='font-[Gilroy] font-medium text-[18px] leading-[140%] my-4 border-y-1 py-6 text-[#D2D2D7]'>2.Shipping Details</p>
                    <form action="" className='w-full'>
                        <div className='pb-3'>
                            <input type="text" placeholder='Recipients Name' className='p-4 border-1 border-[#D2D2D7] w-full'/>
                        </div>
                        <div className='pb-3'>
                            <input type="text" placeholder='Recipients Phone number*' className='p-4 border-1 border-[#D2D2D7] w-full'/>
                        </div>
                        <div className='pb-3'>
                            <input type="text" placeholder='Data of Delivery' className='p-4 border-1 border-[#D2D2D7] w-full'/>
                        </div>
                        <div className='pb-3'>
                            <input type="text" placeholder='Delivery Time' className='p-4 border-1 border-[#D2D2D7] w-full'/>
                        </div>
                        <div className='pb-3'>
                            <input type="text" placeholder='Street' className='p-4 border-1 border-[#D2D2D7] w-full'/>
                        </div>
                        <div className='pb-3 font-[Gilroy] font-medium text-[14px] leading-[120%]'>
                            <input type="checkbox" name="" id="" /> I don't know the address, please call the recipient.
                        </div>
                    </form>
                </div>
                {/* payment details */}
                <div className=''>
                    <p className='font-[Gilroy] font-medium text-[18px] leading-[140%] my-4 border-b-1 pb-6 text-[#D2D2D7]'>3.Payment</p>
                    <p className='pb-3'>Pay by card. Your payment is secure.</p>
                    <form action="">
                        <div className='pb-3'>
                            <input type="number" placeholder='Card Number' className='border-1 border-[#D2D2D7] w-full p-4'/>
                        </div>
                        <div className='pb-3 flex gap-2'>
                            <input type="date" placeholder='MM/YY' className='border-1 border-[#D2D2D7] w-full p-4'/>
                            <input type="number" placeholder='CVV' className='border-1 border-[#D2D2D7] w-full p-4'/>
                        </div>
                        <button className='text-white bg-black uppercase w-full p-4 font-[Gilroy] font-medium text-[16px] leading-[120%]'>Make A Purchase</button>
                    </form>
                </div>
            </div>


        {/* Right Section */}
            <div className='max-w-[720px] w-full bg-[#F5F5F7] py-10 px-4 sm:px-20'>
            {/* Toggle Summary Button (only for small screens) */}
            <div
                className='flex items-center justify-between md:hidden border-b-1 pb-4 cursor-pointer'
                onClick={() => setShowSummary(prev => !prev)}
            >
                <div className='flex items-center gap-2'>
                <BsCart3 />
                <p className='font-[Gilroy] text-[14px] font-medium'>Show order summary</p>
                </div>
                {showSummary ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div
                className={`transition-all duration-500 overflow-hidden md:block ${
                showSummary ? 'max-h-[2000px] pt-4' : 'max-h-0 md:max-h-full'
                }`}
            >
                <p className='font-[Gilroy] text-[14px] leading-[120%] uppercase pb-10 hidden md:block'>order summary</p>

                {/* Product Info */}
                <div className='flex gap-3 pb-6 border-b-1 border-b-[#D2D2D7]'>
                <div className='max-w-[160px] max-h-[160px] w-full border-1 '>
                    <img src={flowers} alt="flowers" className='w-[160px] h-[160px] border-1'/>
                </div>
                <div className='flex justify-between w-full items-center'>
                    <p className='font-[Gilroy] font-medium text-[18px] leading-[140%]'>
                    Snowfall <br />
                    <span className='font-[Gilroy] font-normal text-[16px] leading-[140%]'>Quantity (1)</span>
                    </p>
                    <p className='font-[Gilroy] font-medium text-[18px] leading-[140%]'>$100</p>
                </div>
                </div>

                {/* Gift Card Input */}
                <div className='border-b-1 border-[#D2D2D7]'>
                <p className='pt-6 font-[Gilroy] font-normal text-[16px] leading-[140%]'>If you have our gift card, enter the code to get discounts</p>
                <div className='flex justify-between my-4 gap-4 flex-col md:flex-row'>
                    <input type="text" placeholder='Gift card' className='border-1 border-[#D2D2D7] bg-white p-4 w-full md:w-[272px]'/>
                    <button className='bg-black uppercase text-white p-4 w-full md:w-[272px] font-[Gilroy] font-medium text-[16px] leading-[120%] tracking-[3%]'>apply</button>
                </div>
                </div>

                {/* Totals */}
                <div className='py-6 border-b-1 border-[#D2D2D7]'>
                <div className='flex justify-between pb-4'>
                    <p className='font-[Gilroy] font-normal leading-[140%] text-[16px]'>Subtotal</p>
                    <p className='font-[Gilroy] font-normal leading-[140%] text-[16px]'>$100.00</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-[Gilroy] font-normal leading-[140%] text-[16px]'>Shipping</p>
                    <p className='font-[Gilroy] font-normal leading-[140%] text-[16px]'>Calculated at next step</p>
                </div>
                </div>

                <div className='py-6'>
                <div className='flex justify-between pb-20'>
                    <p className='font-[Gilroy] font-medium leading-[140%] text-[18px]'>Total</p>
                    <p className='font-[Gilroy] font-medium leading-[140%] text-[18px]'>$100.00</p>
                </div>
                <p className='text-center font-[Gilroy] font-normal text-[14px] leading-[120%]'>Secure Checkout <MdLockOutline className='inline-flex'/></p>
                </div>
            </div>
            </div>
        </div>
    </main>
  )
}

export default Checkout
