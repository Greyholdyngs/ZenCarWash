import React, { useState } from 'react';
import Navbar from './Navbar.jsx';

const Homepage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleBookService = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn}
            onHandleLogin={handleLogin}
            onHandleBookService={handleBookService}/>
        </div>
    )
}
export default Homepage;