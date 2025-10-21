import React from 'react';
import { flex, wrapperClass} from '../styles/containerClass';
import logo from '../assets/images/logo.svg';
import Button from './Button';

const Navbar = ({onHandleLogin, isLoggedIn, onHandleBookService}) => {

    const ulStyles = "hover:text-[#007148] text-[#343434] duration-300 ease-in-out"

    return(
        <nav className={`${flex} ${wrapperClass}`}>
            <div>
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <ul className={`${flex} + gap-5 font-semibold`}>
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
        </nav>
    )
}
export default Navbar;