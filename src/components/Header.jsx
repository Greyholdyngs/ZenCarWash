import React from 'react';
import { flex, wrapperClass} from '../styles/containerClass.js'
import Button from './Button.jsx'
import firstCar from '../assets/images/leftCar.png';
import secondCar from '../assets/images/topCar.png';
import thirdCar from '../assets/images/downCar.png';


const Header = ({onHandleLogin, isLoggedIn, onHandleBookService}) => {

    const carStyle = " w-full h-full  "
    const carSectionStyle = " grid grid-cols-2 gap-4 grid-rows-2 h-80 max-w-2xl "

    return(
        <div className={`${wrapperClass} lg:flex space-y-10 py-7 justify-between items-center`}>
            <section className='lg:max-w-2/4'>
               <h1 className={`font-semibold text-[#007148] md:text-6xl text-4xl`}>Washing your car has never <span className='text-black'>been</span> easier</h1>
               <p className={`text-2xl py-5`}>We provide high-quality car wash services</p>
               <div className='flex gap-5'>
                <Button onClick={onHandleBookService}>Book Service</Button>
                <a href="#">
                    {
                        isLoggedIn ? (
                            <Button buttonType='secondary' onClick={onHandleBookService}>Login</Button> 
                                ) : (
                            <Button buttonType='secondary' onClick={onHandleLogin}>Log Out</Button>
                        )
                    }
                </a>
               </div>
            </section>
            <div>
                <section className={`${carSectionStyle} m-auto`}>
                <div className={`py-7 col-span-1 row-span-2`}>
                    <img className={`${carStyle} `} src={firstCar} alt="" />
                </div>
                <div className={` col-span-1`}>
                    <img className={`${carStyle} `}  src={secondCar} alt="" />
                </div>
                <div className={` col-span-1`}>
                    <img className={`${carStyle} `} src={thirdCar} alt="" />
                </div>
            </section> 
            </div>
        </div>
    )
}
export default Header