import React, { useState, useEffect } from "react" // Import React, useState, and useEffect hooks
import { Link } from "react-router-dom" // Import Link  for routing
import IonIcon from "@reacticons/ionicons" // Import the icon from IonIcons

// Define the Search component
// const [dog, setDogs] Initialize state to store dog data from API
// const [text, setText] State to store the search text input
// const [favs, setFavs] State to store the list of favorite dogs, loaded from localStorage

// const fetchDogData Fetch dog data from the API on initial render
// const searchForDog Function to search for dogs based on input text

// const toofgleFav // Toggle a dog in/out of the favorite list


function Search() {
  const [dogs, setDogs] = useState([])
  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)
  const [favs, setFavs] = useState(() => {
  const savedFavs = localStorage.getItem("favs");
  return savedFavs ? JSON.parse(savedFavs) : [];
  });

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await res.json()
        setDogs(data)
        } catch (error) {
        console.error(error)
      }
    }

  setSearched(false)
  fetchDogData()
  
  }, [])

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      )
      const data = await res.json()
      setDogs(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchForDog()
    setSearched(true)
  }

  const toggleFav = (dogID) => {
    let updatedFavs;
    if (favs.includes(dogID)) {
      updatedFavs = favs.filter((favId) => favId !== dogID);
    } else {
      updatedFavs = [...favs, dogID];
    }
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    setFavs(updatedFavs);
  };

  return (
    <>
        <>
          <section className="p-8 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="flex items-center justify-center text-center px-5 text-3xl font-bold lg:text-5xl text-indigo-800">
                Search Your Favourite DogZ
              </h1>
              
              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto mt-7"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for a dog / breed"
                  className="py-2 px-6 text-white rounded shadow w-full bg-indigo-400 placeholder-slate-300"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3 my-10 lg:my-20">
          {dogs.map((dog) => (
            <div
              key={dog.name}
              className="bg-indigo-500 border-2 p-4 rounded hover:bg-indigo-800 transition-all duration-200 hover:scale-110"
            >
              <article>
                <img
                  src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                  alt={dog.name}
                  loading="lazy"
                  className="rounded md:h-72 w-full object-cover"
                />
                <h3 className="text-white text-xl font-bold mt-4">{dog.name}</h3>
                <p className="text-gray-300"> <span className="font-bold text-white">Temperament: </span> {dog.temperament}</p>

                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/${dog.name}`}
                    className="text-white text-sm hover:bg-white hover:text-indigo-800 border-2 p-2 rounded"
                  >
                    Read More
                  </Link>

                  <button
                    onClick={() => toggleFav(dog.name)}
                    className="border-white border-2 text-white text-2xl text-center flex p-2 rounded "
                  >
                    
                    {favs.includes(dog.name) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline"/>}

                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
          </section>
        </>
      )
    </>
  )
}

export default Search;