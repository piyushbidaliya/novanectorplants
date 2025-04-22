import flowers from '../assets/rosydelight.png';
import { MdClose } from 'react-icons/md';

function Cart({ onClose }) {
  return (
    <div className='relative max-w-[720px] w-full mx-auto md:border-1'>
      {/* Close button inside cart */}
      <div className='flex justify-between items-center px-10 py-8 border-b-1'>
        <p className='text-[16px] font-[Gilroy] font-medium leading-[120%]'>Shopping Cart</p>
      <div>
      <button
        onClick={onClose}
        className="cursor-pointer"
      >
        <MdClose size={24} />
      </button>
      </div>
      </div>

      <div className='flex gap-4 p-10 border-b-1'>
        <div className='border-1'>
          <img src={flowers} alt="flower" className='max-w-[160px] max-h-[160px]' />
        </div>

        <div className='flex justify-between w-full items-center'>
          <div className='font-[Gilroy] leading-[140%]'>
            <p className='font-medium text-[18px]'>Rosy Delight</p>
            <p className='font-normal text-[16px]'>Quantity (1)</p>
            <p className='font-medium text-[18px]'>$100</p>
          </div>

          <div className='font-[Gilroy] font-semibold text-[16px] leading-[120%] tracking-[2.5%] text-[#808080]'>
            Remove
          </div>
        </div>
      </div>

      <div className='p-10 flex justify-between border-b-1'>
        <p className='font-[Gilroy] font-medium text-[18px] leading-[140%]'>Subtotal</p>
        <p className='font-[Gilroy] font-medium text-[21px] leading-[120%]'>$100.00</p>
      </div>

      <div className='p-10 border-b-1'>
        <textarea
          name="message"
          placeholder='Gift Message'
          className='w-full h-[120px] placeholder:text-[#808080] placeholder:text-[16px] placeholder:font-[Gilroy] placeholder:font-normal border p-2'
        />
      </div>

      <div className='p-10 border-b-1'>
        <p className='font-[Gilroy] font-normal text-[14px] leading-[120%] text-center'>
          Shipping & taxes calculated at checkout <br />
          Free standard shipping within Kyiv
        </p>
      </div>
      <button className='uppercase text-white font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[2.5%] bg-black py-4 px-6 w-full'>Check Out</button>
    </div>
  );
}

export default Cart;
