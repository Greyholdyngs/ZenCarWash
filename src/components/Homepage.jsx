import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Services from './Services.jsx';

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
            <Header />
            <About />
            <Services />
        </div>
    )
}
export default Homepage;