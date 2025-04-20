import fresh from '../assets/categoryfresh.png'
import freshflower from '../assets/freshflower.jpg'
import dawndelight from '../assets/dawndelight.png'
import pinkelegance from '../assets/pinkelegance.png'
import rusticcharm from '../assets/rusticcharm.png'
import autumnsymphony from '../assets/autumnsymphony.png'
import rosydelight from '../assets/rosydelight.png'
import serenity from '../assets/serenity.png'
import blueharmony from '../assets/blueharmony.png'
import mysticalmajesty from '../assets/mysticalmajesty.png'
import blazingblossoms from '../assets/blazingblossoms.png'
const Flowers = [
    {
        image: freshflower,
        title: "Snowfall",
        price: "70"
    },
    {
        image: dawndelight,
        title: "Dawn Delight",
        price: "70"
    },
    {
        image: pinkelegance,
        title: "Pink Elegance",
        price: "70"
    },
    {
        image: rusticcharm,
        title: "Rustic Charm",
        price: "70"
    },
    {
        image: autumnsymphony,
        title: "Autumn Symphony",
        price: "70"
    },
    {
        image: rosydelight,
        title: "Rosy Delight",
        price: "70"
    },
    {
        image: serenity,
        title: "Serenity",
        price: "89"
    },
    {
        image: blueharmony,
        title: "Blue Harmony",
        price: "55"
    },
    {
        image: mysticalmajesty,
        title: "Mystical Majesty",
        price: "80"
    },
    {
        image: blazingblossoms,
        title: "Blazing Blossoms",
        price: "70"
    },
]

function Category() {
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
            {Flowers.map((flowers)=>(
            <div className='relative border-b-1 border-l-1 '>
                <img src={flowers.image} alt="" className='sm:h-[360px] md:w-[360px] w-full h-full'/>
                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <p className='font-[Gilroy] font-medium text-[16px] leading-[120%] text-center'>{flowers.title}</p>
                    <p className='font-[Gilroy] font-medium text-[14px] text-center'>price {flowers.price}$</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Category
