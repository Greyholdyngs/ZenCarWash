import React, { useState } from 'react';
import { flex, wrapperClass} from '../styles/containerClass';
import {motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/images/logo.svg';
import menu from '../assets/images/menu.png';
import closeButton from '../assets/images/close.png';
import Button from './Button';

const Navbar = ({onHandleLogin, isLoggedIn, onHandleBookService}) => {

    const [phoneMenu, setPhoneMenu] = useState(false)

    const ulStyles = "hover:text-[#007148] text-[#343434] duration-300 ease-in-out"

    return(
        <nav>
          <div className={`${flex} ${wrapperClass}`}>
            <div>
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <ul className={`${flex} + lg:flex hidden gap-5 font-semibold`}>
              <li className={ulStyles}>
                <a href="#">Home</a>
              </li>
              <li className={ulStyles}>
                <a href="#">About Us</a>
              </li>
              <li className={ulStyles}>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">
                  {
                    isLoggedIn ? (
                      <Button buttonType='primary' onClick={onHandleBookService}>Book Service</Button> 
                        ) : (
                      <Button buttonType='secondary' onClick={onHandleLogin}>Login</Button>
                        )
                  }
                </a>
              </li>
            </ul>
            <div className='lg:hidden'>
                <button onClick={() => setPhoneMenu(true)}>
                    <img src={menu} alt="menu" />
                </button>
            </div>
        </div>
                {
                    phoneMenu && (
                        <div onClick={() => setPhoneMenu(false)} 
                        className={`fixed max-h-screen inset-0 bg-black/50 backdrop-blur-lg -z-40`}></div>
                    )
                }
                <AnimatePresence>
                    {
                        phoneMenu && (
                            <motion.div
                                initial={{ x: 200, opacity: 0}}
                                animate={{ x: 0, opacity: 1}}
                                exit={{ x: 200, opacity: 0}}
                                transition={{ duration: 0.5, ease: "easeOut"}}
                                className='pt-2 px-5 flex flex-col gap-5 bg-white min-h-screen absolute top-0 
                                        right-0 w-3/4 '
                            >
                                <div className='flex justify-end my-3'>
                                    <button onClick={() => setPhoneMenu(false)}>
                                        <img className='w-8' src={closeButton} alt="close button" />
                                    </button>
                                </div>
                                <div>
                                    <a href="#">Home.</a>
                                </div>
                                <div>
                                    <a href="#">Our services.</a>
                                </div>
                                <div>
                                    <a href="#">Testimonials.</a>
                                </div>
                                <div>
                                    <a href="#">About us.</a>
                                </div>
                                <div>
                                    <a href="#">Get in touch.</a>
                                </div>
                                <div>
                                    <a href="#">
                                        {
                                            isLoggedIn ? (
                                                <Button buttonType='primary' onClick={onHandleBookService}>Book Service</Button> 
                                                    ) : (
                                                <Button buttonType='secondary' onClick={onHandleLogin}>Login</Button>
                                                )
                                        }
                                    </a>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                
        </nav>
    )
}
export default Navbar;