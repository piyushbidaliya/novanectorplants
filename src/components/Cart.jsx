import { MdClose } from 'react-icons/md';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function Cart({ onClose }) {
  const { all_products, cartItems, removeFromCart } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = all_products.reduce((total, product) => {
    const quantity = cartItems[product.id] || 0;
    return total + quantity * product.price;
  }, 0);

  return (
    <div className='relative max-w-[720px] w-full mx-auto md:border-1'>
      {/* Header with Close Button */}
      <div className='flex justify-between items-center px-10 py-8 border-b-1'>
        <p className='text-[16px] font-[Gilroy] font-medium leading-[120%]'>Shopping Cart</p>
        <button onClick={onClose} className="cursor-pointer">
          <MdClose size={24} />
        </button>
      </div>

      {/* Cart Items */}
      {all_products.map((product) => {
        const quantity = cartItems[product.id];
        if (quantity > 0) {
          return (
            <div key={product.id} className='flex gap-4 p-10 border-b-1'>
              <div className='border-1'>
                <img src={product.image} alt={product.name} className='max-w-[160px] max-h-[160px]' />
              </div>

              <div className='flex justify-between sm:flex-row flex-col w-full items-center'>
                <div className='font-[Gilroy] leading-[140%]'>
                  <p className='font-medium text-[18px]'>{product.name}</p>
                  <p className='font-normal text-[16px]'>Quantity ({quantity})</p>
                  <p className='font-medium text-[18px]'>${product.price * quantity}</p>
                </div>

                <div
                  onClick={() => removeFromCart(product.id)}
                  className='cursor-pointer font-[Gilroy] font-semibold text-[16px] leading-[120%] tracking-[2.5%] text-[#808080]'
                >
                  Remove
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Subtotal */}
      <div className='p-10 flex justify-between border-b-1'>
        <p className='font-[Gilroy] font-medium text-[18px] leading-[140%]'>Subtotal</p>
        <p className='font-[Gilroy] font-medium text-[21px] leading-[120%]'>${subtotal}</p>
      </div>

      {/* Gift Message */}
      <div className='p-10 border-b-1'>
        <textarea
          name="message"
          placeholder='Gift Message'
          className='w-full h-[120px] placeholder:text-[#808080] placeholder:text-[16px] placeholder:font-[Gilroy] placeholder:font-normal border p-2'
        />
      </div>

      {/* Info + Checkout Button */}
      <div className='p-10 border-b-1'>
        <p className='font-[Gilroy] font-normal text-[14px] leading-[120%] text-center'>
          Shipping & taxes calculated at checkout <br />
          Free standard shipping within Kyiv
        </p>
      </div>
      <button className='uppercase text-white font-[Gilroy] font-medium text-[14px] leading-[100%] tracking-[2.5%] bg-black py-4 px-6 w-full'>
        Check Out
      </button>
    </div>
  );
}

export default Cart;
