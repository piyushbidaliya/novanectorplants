import { useContext } from 'react'
import fresh from '../assets/categoryfresh.png'
import { CartContext } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'


function Category() {
    const { all_products } = useContext(CartContext)
  
    return (
      <div className='max-w-[1440px] mx-auto flex md:flex-row flex-col md:border-b-1 border-b-0'>
        <div className="relative flex-1 w-full mx-auto max-h-[720px]">
          <img src={fresh} alt="Fresh Flowers" className="w-[720px] h-[500px] md:h-[720px] brightness-75" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="font-[Gilroy] font-semibold text-[67px] leading-[120%] text-center text-white">
              Fresh Flowers
            </h3>
          </div>
        </div>
  
        <div className='grid grid-cols-1 sm:grid-cols-2 flex-1'>
          {all_products.map((flowers, i) => (
            <Link to={`/product/${flowers.id}`}>
            <div className='relative border-b-1 border-l-1 ' key={i}>
                <img src={flowers.image} alt="" className='sm:h-[360px] md:w-[360px] w-full h-full' />
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <p className='font-[Gilroy] font-medium text-[16px] leading-[120%] text-center'>{flowers.name}</p>
                <p className='font-[Gilroy] font-medium text-[14px] text-center'>price {flowers.price}$</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
  
export default Category
