import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// useEffect Ensure the slider initializes correctly

function Content() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    
    setInitialized(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000, 
    autoplaySpeed: 2000,
    cssEase: "linear", 
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      
      <div className="bg-indigo-800 text-white text-center my-2 p-10">
        <h2 className="text-4xl mb-2">Muffin Our Weekly Winner</h2>
        <h3 className="text-2xl">Muffin is an adorable bulldog with a personality as big as his paws! 
            He is cute and funny where shows off his goofy side—whether.  
            His playful antics and charming expressions will steal your heart!</h3>
      </div>

      
      <div className="mb-8">
        {initialized && (
          <Slider {...settings}>
            <div className="p-2">
              <img src="https://i.imgur.com/IiXIqhp.jpeg" alt="pink-dress" />
            </div>
            <div className="p-2">
              <img src="https://i.imgur.com/ITyIHNx.jpeg" alt="christma" />
            </div>
            <div className="p-2 ">
              <img src="https://i.imgur.com/VWPurEu.jpeg" alt="lay down" />
            </div>
            <div className="p-2 " >
              <img src="https://i.imgur.com/uBvV1GY.jpeg" alt="dreaming" />
            </div>
            <div className="p-2">
              <img src="https://i.imgur.com/9QpKPds.jpeg" alt="puppy" />
            </div>
            <div className="p-2 ">
              <img src="https://i.imgur.com/V7TNzGS.jpeg" alt="solo" />
            </div>
          </Slider>
        )}
      </div>

        <div className="bg-indigo-800 py-24 p-4 ">
          <h2 className="text-white text-center text-4xl mb-6">Vote For Your Favourite DogZ</h2>
          <div className="flex flex-wrap justify-center lg:flex-nowrap items-center">
           
            <img
              className="w-full sm:w-8/12 lg:w-80 mb-4 lg:mb-0"
              src="https://i.imgur.com/jQIQEqh.jpeg"
              alt="golden"
            />

            <div className="text-center px-4">
              <h3 className="text-white px-5 text-center my-2 mb-8">
                Our contest kicks off every Sunday at 12:00 PST! Join the fun and vote
                for your favorite dogs from the latest batch of adorable pups. Whether
                they’re playful, goofy, or just plain cute, you won’t want to miss the
                chance to support your top picks. Click here to cast your vote and make
                a pup’s day!
              </h3>
              <Link
                className="text-white border-2 border-white rounded-md py-2 px-4 hover:bg-white hover:text-black"
                to="/Search"
                onClick={handleClick}
              >
                Vote Now
              </Link>
            </div>
           
            <img
              className="w-full sm:w-8/12 lg:w-80 mt-4 lg:mt-0"
              src="https://i.imgur.com/f2AjHOt.jpeg"
              alt="havanese"
            />
          </div>
        </div>

    </div>
    
  );
}

export default Content;
