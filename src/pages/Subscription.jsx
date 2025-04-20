import flowers from '../assets/subscriptionflowers.png'
import image from '../assets/services.png'
import classic from '../assets/classic.png'
import seasonal from '../assets/seasonal.jpg'
import luxe from '../assets/luxe.jpg'
import { useState } from 'react'
import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go'
const ListItems = [
    {
        title: "For Yourself",
        content: "The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!"
    },
    {
        title: "As a Gift",
        content: "Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing."
    },
    {
        title: "For Business",
        content: "Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part."
    },
]

const CardValue = [
    {
        image: classic,
        name: "Classic",
        price: "45",
        budget: "Best for a budget",
        vase: "Glass vase with first delivery",
        save: "Save up to 25%",
    },
    {
        image: seasonal,
        name: "Seasonal",
        price: "65",
        budget: "Best Seasonal selections",
        vase: "Glass vase with first delivery",
        candle: "Luxury candle with your first delivery",
        save: "Save up to 28%",
    },
    {
        image: luxe,
        name: "Luxe",
        price: "95",
        budget: "Premium arrangement",
        vase: "Premium vase with first delivery",
        candle: "Luxury candle with your first delivery",
        save: "Save up to 30%",
    },
]


function SubscriptionCard() {
    return(
        <>
        {CardValue.map((value)=>(
            <div className='border-1 border-gray-300 mb-2 max-w-[688px] mx-auto w-full'>
            <div className='flex flex-col sm:flex-row w-full h-full'>
                <div className='flex-1 w-full'>
                    <img src={value.image} alt="flower vase" className='h-[200px] sm:full object-cover w-full'/>
                </div>
                <div className='flex-1 w-full p-4 font-[Gilroy]'>
                    <p className='font-[500] text-[18px] leading-[140%] pb-4'>Classic</p>
                    <ul className='font-normal text-[16px] leading-[140%] pl-5 list-disc'>
                        <li className=''>Price ${value.price}</li>
                        <li className=''>Free Delivery</li>
                        <li className=''>{value.budget}</li>
                        <li className=''>{value.vase}</li>
                        <li className=''>{value.candle}</li>
                        <li className=''>{value.save}</li>
                    </ul>
                </div>
            </div>
                <button className='bg-black border-1 text-white uppercase w-full py-4 px-6'>select</button>
            </div>
        ))

        }
        </>
    )
}

const SubscriptionFaqList = [
    { id: 1, text: "Can I skip a delivery?" },
    { id: 2, text: "Can I change my subscription?" },
    { id: 3, text: "What if I'm not home for a delivery?" },
  ];
  
function SubscriptionFaq() {
const [activeIndex, setActiveIndex] = useState(null);

const toggleFaq = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
};

return (
    <div className='px-6 py-10 sm:p-10 md:p-20 pt-0 bg-white font-[Gilroy] border-t border-b sm:border-1 max-w-[864px] mx-auto'>
    <h1 className='text-center font-semibold text-[34px] sm:text-[50px] leading-[120%] p-4'>Subscription FAQ</h1>

    {/* Static First Item with Toggle */}
    <div className='border-b-1 py-4'>
        <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleFaq(-1)}>
        <h3 className='font-normal text-[16px] sm:text-[21px] md:text-[28px] leading-[120%]'>How often will I get a new bouquet?</h3>
        <span className='md:hidden block'>
            {activeIndex === -1 ? <GoArrowUpRight /> : <GoArrowDownRight />}
        </span>
        </div>
        <p className={`font-normal text-[14px] sm:text-[16px] leading-[140%] ${activeIndex === -1 ? 'block' : 'hidden'} md:block`}>
        Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!
        </p>
    </div>

    {/* Dynamic List */}
    <ul className='py-4 font-normal text-[16px] sm:text-[21px] md:text-[28px] leading-[120%]'>
        {SubscriptionFaqList.map((list, index) => (
        <li key={list.id} className='border-b-1 py-6 font-[Gilroy]'>
            <div
            className='flex justify-between items-center cursor-pointer'
            onClick={() => toggleFaq(index)}
            >
            {list.text}
            {activeIndex === index ? <GoArrowUpRight /> : <GoArrowDownRight />}
            </div>
            {activeIndex === index && (
            <p className='text-[16px] mt-2 leading-[140%]'>
                This is the answer to: <strong>{list.text}</strong>. Replace with actual content.
            </p>
            )}
        </li>
        ))}
    </ul>
    </div>
);
}

function Subscription() {
    const [counter, setCounter] = useState(1)

  return (
    <main className='max-w-[1440px] w-full'>
        <div className='flex flex-col md:flex-row border-b-1'>
            {/* Left Side (Image) */}
            <div className='flex-1 max-h-[720px] w-full border-r-0 md:border-r-1'>
                <img src={flowers} alt="person with flowers" className='w-[720px] h-[420px] sm:h-[500px] md:h-[720px]' />
            </div>

            {/* Right Side (Text) */}
            <div className='flex-1 font-[Gilroy] py-10 sm:py-20'>
            <h1 className='font-semibold text-[34px] sm:text-[50px] leading-[120%] px-4 sm:px-20 pb-6'>Flower Subscription</h1>
            {ListItems.map((list, index) => (
                <div key={index} className='text-[16px] px-4 sm:px-20'>
                <ul>
                    <li>{list.title}
                    <ul className='list-disc pb-6 pl-6'>
                        <li>{list.content}</li>
                    </ul>
                    </li>
                </ul>
                </div>
            ))}
            <div className='px-4 sm:px-20'>
                <button className='uppercase border py-4 px-6 font-[Gilroy] font-medium text-[14px] leading-[140%] tracking-[2.5%]'>Explore Plans</button>
            </div>
            </div>
        </div>

        {/* section 2 starts*/}
      <div className='flex flex-col md:flex-row'>
        <div className='max-w-[720px] w-full py-10 sm:py-20  border-b-1'>
            <h3 className='font-[Gilroy] font-semibold text-[34px] sm:text-[50px] leading-[120%] px-4 sm:px-20 py-10'>How does it work?</h3>
        </div>
        
        <div className='max-w-[720px] w-full'>
            <div className='py-10 px-4 sm:p-20 border-b-1 border-l-1 font-[Gilroy]'>
                <h3 className='font-medium text-[26px] sm:text-[38px] leading-[120%]'>Choose a plan</h3>
                <p className='font-normal text-[16px] leading-[140%] text-[#121212E5]-500'>Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
            </div>

            <div className='py-10 px-4 sm:p-20 border-b-1 border-l-1 font-[Gilroy]'>
                <h3 className='font-medium text-[26px] sm:text-[38px] leading-[120%]'>Choose a plan</h3>
                <p className='font-normal text-[16px] leading-[140%] text-[#121212E5]-500'>Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
            </div>

            <div className='py-10 px-4 sm:p-20 border-b-1 border-l-1 font-[Gilroy]'>
                <h3 className='font-medium text-[26px] sm:text-[38px] leading-[120%]'>Choose a plan</h3>
                <p className='font-normal text-[16px] leading-[140%] text-[#121212E5]-500'>Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
            </div>

        </div>
         
      </div>
        {/* section 3 starts */}
      <div className='flex md:flex-row-reverse flex-col'>
        <div className='flex-1 max-h-[720px] w-full'>
            <img src={image} alt="" className='w-[720px] h-[500px] md:h-[720px]' />
        </div>
        <div className='flex-1 py-10 sm:py-20 border-r-1'>
            <div className='font-[Gilroy] px-4 sm:px-10'>
                <p className='font-medium text-[12px] sm:text-[14px] leading-[120%] uppercase pb-6'>Build Your Subscription</p>
                <div className='font-[Gilroy]'>
                    <h3 className='font-medium text-[26px] sm:text-[38px] leading-[120%] pb-4'>Selecting a Plan</h3>
                    <p className='font-normal text-[16px] leading-[140%] pb-4'>Enjoy free shipping on every order and save up to 30%. 
                    Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You're in complete control of your flower delivery experience.</p>
                </div>
            </div>
            <div className='px-4 sm:px-10'>
                <SubscriptionCard/>
                <div className='font-[Gilroy]'>
                    <h3 className='font-normal text-[22px] sm:text-[28px] leading-[120%] py-4'>How often do you want flowers delivered ?</h3>
                    <p className='font-normal text-[16px] leading-[140%] pb-4'>Select the delivery frequency</p>
                    <div className='flex uppercase justify-between pb-4 sm:flex-row flex-col gap-2' >
                        <p className='border-1 py-4 px-6  text-[14px] sm:text-[16px] leading-[100%] tracking-[2.5%] uppercase text-center'>Monthly</p>
                        <p className='border-1 py-4 px-6 text-[14px] sm:text-[16px] leading-[100%] tracking-[2.5%] uppercase text-center'>Bi-weekly</p>
                        <p className='border-1 py-4 px-6 text-[14px] sm:text-[16px] leading-[100%] tracking-[2.5%] uppercase text-center'>weekly</p>
                    </div>
                    <div>
                        <h3 className='font-[Gilroy] font-normal text-[22px] sm:text-[28px] leading-[120%] py-4'>How many deliveries would you like ?</h3>
                        <p className='font-[Gilroy] font-normal text-[16px] leading-[140%] pb-4'>Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </p>
                        <span className='px-2 border-1 cursor-pointer' onClick={()=>setCounter(counter > 0 ? counter - 1 : counter )}>-</span><span className='border-1 px-2'>{counter}</span><span className='px-2 border-1 cursor-pointer' onClick={()=>setCounter(counter+1)}>+</span>
                    </div>
                    <button className='bg-black text-white w-full uppercase py-4 px-6 font-medium text-[14px] sm:text-[16px] leading-[120%] tracking-[3%] font-[Gilroy] my-6'>checkout</button>
                </div>
            </div>
        </div>
      </div> 
      {/* section 4 starts  */}
      <div className='py-20 px-0 sm:px-10 bg-[#F5F5F7] border-y-1'>
        <SubscriptionFaq/>
      </div>
    </main>
  )
}

export default Subscription
