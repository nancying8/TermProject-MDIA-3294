import React, { useState } from "react";  // Import React, useState
import { Link } from "react-router-dom"; // Import Link for navigation
import IonIcon from "@reacticons/ionicons"; // Import IonIcon for the hamburger menu icons

// Header component
// [isMenuOpen] state to track whether the menu is open or closed
// [closeMenu] closes the menu when a link is clicked 

// IonIcon - Hamburger menu icon visible on small to medium screens

// Link to ='/'= will navigate to determinate page name when is place after '/'

function Header() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        
        <nav className="font-bold p-4">
         
            <div className="flex justify-between items-center">
            
                <div className="text-center text-4xl cursor-pointer">
                    <Link to="/" className="text-indigo-800 hover:text-indigo-400">DogZ</Link>
                </div>
              
                <div className="flex items-center space-x-4">
                  
                    <div className="md:hidden text-indigo-800" onClick={toggleMenu}>
                        <IonIcon
                            name={isMenuOpen ? "close-outline" : "menu-outline"} 
                            className="text-indigo-800 text-3xl cursor-pointer"
                        />
                    </div>

                    <ul
                        className={`${
                            isMenuOpen ? "block" : "hidden" 
                        } absolute md:static top-16 left-0 w-full md:w-auto text-center bg-white shadow-md md:shadow-none md:flex space-x-4 md:space-x-0 p-2 md:p-0`}
                    >
                        
                        <li className="list-none mb-2 md:mb-0 md:space-x-0">
                            <Link
                                to="/"
                                className="block md:inline-block rounded-md px-4 py-2 text-indigo-800 bg-white hover:bg-indigo-400 hover:text-white"
                                onClick={closeMenu} 
                            >
                                Home
                            </Link>
                        </li>

                        
                        <li className="list-none mb-2 md:mb-0 md:space-x-0">
                            <Link
                                to="/search"
                                className="block md:inline-block rounded-md px-4 py-2 text-indigo-800 bg-white hover:bg-indigo-400 hover:text-white"
                                onClick={closeMenu} 
                            >
                                Search
                            </Link>
                        </li>

                        
                        <li className="list-none mb-2 md:mb-0 md:space-x-0">
                            <Link
                                to="/fav"
                                className="block md:inline-block rounded-md px-4 py-2 text-indigo-800 bg-white hover:bg-indigo-400 hover:text-white"
                                onClick={closeMenu} 
                            >
                                My Favourite
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// Export the Header component 

export default Header;

