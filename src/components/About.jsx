import React from 'react';
import { wrapperClass } from '../styles/containerClass';
import icon from '../assets/images/Icon.png';

const About = () => {

    return(
        <div className={`${wrapperClass} bg-[#007148] text-[#FFFFFF] py-7`}>
            <h1 className={`font-base text-4xl pb-8`}>
                About Us
            </h1>
            <div className={`lg:flex items-center space-y-5`}>
                <div className='lg:pr-7'>
                    <img className='lg:w-75' src={icon} alt="" />
                </div>
                <div className={`lg:pl-7 lg:pt-0 pt-7 border-black lg:border-l lg:border-t-0 border-t border-1px font-base lg:text-xl text-lg`}>
                    <p className='py-2'>At ZenCarWash, we're passionate about making your car shine inside and out. We don't just wash cars, 
                        we bring them back to life. Our team of experts uses top-of-the-line equipment and eco-friendly products 
                        to deliver a fast, efficient, and sparkling clean car every time.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About