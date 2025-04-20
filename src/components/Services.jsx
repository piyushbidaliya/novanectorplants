import img from '../assets/services.png'
import event from '../assets/event.png'
import { Link } from 'react-router-dom'
import logo from '../assets/googlelogo.png'
import CardCarousel from './CardCarousel'
function Services() {
  return (
    <section className='max-w-[1440px] w-full mx-auto'>
        <h1 className='sm:text-center border-1 border-x-0 py-10 sm:py-20 sm:px-0 px-4 font-[Gilroy] font-semibold text-[34px] sm:text-[50px] leading-[120%]'>Our Services</h1>
        <div className='flex md:flex-row flex-col'>
        {/* Left Section */}
        <div className='md:w-1/2 w-full'>
            <img src={img} alt="person and flowers" className='md:w-[720px] md:h-[720px] w-full sm:h-[500px] h-[420px] object-fill' />
        </div>

        {/* Right Section */}
        <div className='md:w-1/2 w-full px-4 sm:px-20 py-10 sm:py-20 border-b-1 border-l-0 md:border-l-1'>
            <div>
                <p className='font-[Gilroy] font-medium text-[12px] sm:text-[14px] leading-[120%] text-center pb-2.5'>Service</p>
                <h3 className='font-[Gilroy] font-semibold text-[34px] sm:text-[50px] leading-[120%] text-center pb-2.5'>Flower Subscription</h3>
                <p className='font-[Gilroy] font-medium text-[16px] sm:text-[18px] leading-[140%] text-center pb-10'>
                    Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.
                </p>
            </div>
            <Link to="/subscription"><p className='uppercase w-1/2 mx-auto border-1 py-4 px-6 text-center font-[Gilroy] font-medium text-[14px] sm:text-[16px] leading-[100%]'>subscribe now</p></Link>
        </div>
        </div>


        <div className='relative '>
            <img src={event} alt="event decor" className='brightness-70 w-full md:h-[720px] sm:h-[500px] h-full'/>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-20 py-10 sm:py-20 w-full'>
                <p className='font-[Gilroy] font-medium leading-[120%] uppercase text-[12px] sm:text-[14px] text-center text-white pb-6'>service</p>
                <h3 className='text-white font-[Gilroy] font-semibold text-[34px] sm:text-[50px] leading-[120%] text-center pb-6'>Wedding & Event Decor</h3>
                <p className='text-white font-[Gilroy] font-medium text-[16px] leading-[140%] text-center pb-10'>Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                <Link to="/contact"><p className='border-1 text-white border-white w-1/2 mx-auto text-center uppercase text-[14px] sm:text-[16px] py-4 px-4 sm:px-6 font-[Gilroy] font-medium leading-[120%] tracking-[3%]'>Inquire Now</p></Link>
            </div>
        </div>

        <div className='p-10 border-b-1'>
            <div className='p-4'>
                <img src={logo} alt="google logo" className='w-fit mx-auto pb-2'/>
                <p className='text-center font-[Gilroy] text-[12px] sm:text-[14px] leading-[120%] uppercase font-medium'>Reviews</p>
                <h3 className='font-[Gilroy] font-semibold text-[34px] sm:text-[50px] leading-[120%] text-center'>Our Clients say</h3>
                <div className='pb-6'>
                    <CardCarousel/>
                </div>
                <p className='uppercase px-6 py-4 border-1 mx-auto text-center font-[Gilroy] font-medium text-[14px] sm:text-[16px] leading-[120%] w-fit'>Read Reviews</p>
                
            </div>
        </div>
    </section>
  )
}

export default Services
