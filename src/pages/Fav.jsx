import { useState, useEffect } from "react"; // Import React, useState, and useEffect hooks
import { Link } from "react-router-dom"; // Import Link for routing

// Define the Fav component
// const [savedDogs, setSaveDogs] Initialize state to hold saved favorite dogs, loaded from localStorage
// Save the updated list to localStorage

// useEffect Fetch all dog breeds and filter out the ones that are in the saved favorites list

function Fav() {
  
  const [savedDogs, setSavedDogs] = useState(() => {
    const savedFavs = localStorage.getItem("favs");
   
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((response) => response.json()) 
      .then((dogs) => {
        
        const favDogs = dogs.filter((allDogs) => savedDogs.includes(allDogs.name));
        setSavedDogs(favDogs);
      });
  }, []);
  return (
    <section className="p-8 max-w-7xl mx-auto">
     
      <h1 className="flex items-center justify-center text-center px-5 text-2xl font-bold lg:text-4xl text-indigo-800 m-10">
        These are my Favourite DogZ!
      </h1>
      <p className="text-center text-sm text-gray-500">
        Your favourite list will be updated every Sunday after 12:00 AM PST.
      </p>

      
      {savedDogs.length === 0 ? (
        <p className="text-center text-lg text-gray-500 my-20 mx-20">
          No favorite dogs yet! Go to Search and add some.
        </p>
      ) : (
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3 my-10 lg:my-20">
          {savedDogs.map((dog) => (
            <div key={dog.name} className="bg-indigo-400 p-4 rounded">
              <article className="grid">
                
                <img
                  src={
                    dog.reference_image_id
                      ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
                      : "https://via.placeholder.com/150" 
                  }
                  alt={dog.name} 
                  loading="lazy"
                  className="rounded p-2 h-56 md:h-72 w-full object-cover"
                />
               
                <h3 className="text-white text-center text-md font-bold mt-2">{dog.name}</h3>
               
                <button
                  onClick={() => {
                    
                    const updatedFavs = savedDogs.filter((fav) => fav.name !== dog.name);
                    setSavedDogs(updatedFavs); 
                    
                    localStorage.setItem("favs", JSON.stringify(updatedFavs.map((d) => d.name)));
                  }}
                  className="text-xs text-indigo-800 bg-white hover:bg-indigo-800 hover:text-white p-1 rounded mt-2"
                >
                  Remove
                </button>
              </article>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center">
        <Link
          to="/Search"
          className="inline-block border-2 border-indigo-800 py-2 px-6 rounded mt-8 text-indigo-800 hover:bg-indigo-400 hover:text-white hover:border-indigo-400 transition-all duration-200"
        >
          Back to list
        </Link>
      </div>

      <div className="mb-40">
      
      </div>
    </section>
  );
}

export default Fav;

  