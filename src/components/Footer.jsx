import React from "react"; // import React to use JSX and component features
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

// add data for this component "Footer"
//similar to the component "Header" adding logo, and nav bar
// apply tailwind css into each section instead using css external 
// add logo calls "Dogz" with specific size and colours
//and navigation bar to navigate on About Us and Contact Us
function Footer () {
    const handleClick = () => {
        window.scrollTo(0, 0);
      };
    return (
        <nav className=" font-bold p-4">
          <div className="flex justify-between items-center align-">
            <div className="text-center text-4xl text-indigo-800 ml-6 cursor-pointer hover:text-indigo-400"> 
              <Link className="" to="/" onClick={handleClick}> DogZ </Link>
            </div>
              <p className="text-indigo-800 text-sm ">&copy; 2024 DogZ Updates. All rights reserved.</p>
              <IonIcon className="text-indigo-800 text-2xl" name="logo-facebook" />
              <IonIcon className="text-indigo-800 text-2xl" name="logo-instagram" />
              <IonIcon className="text-indigo-800 text-2xl" name="logo-youtube" />
          </div>
    </nav>
    );
}

export default Footer;