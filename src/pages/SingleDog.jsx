import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect hooks
import { Link, useParams } from "react-router-dom"; // Import Link and useParams for routing

// Define the SingleDog component
// const [dog,dogs] Initialize state to store dog data

// const {name} Retrieve the 'name' parameter from the URL
// Fetch dog data from the API when the component mounts or 'name' changes
// API call with the dog name as a query parameter

// {dog.map((item) iterate over the dog data and render details 
// {item.name} "name" it will display with dog info
// like {item.temperament} temperament is data of info of API , so it need to place the correct data and replace it with detail needs

// Link 'to=/search' will link to SearchPage.

function SingleDog () {
  const [dog, setDog] = useState([]); 
  const { name } = useParams();

  useEffect(() => {
    
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}` 
        );
        const data = await res.json(); 
        setDog(data); 
        console.log(data); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleDogData(); 
  }, [name]); 

  return (
    <>
     
      <section className="max-w-7xl bg-indigo-800 mx-auto flex items-center justify-center h-screen">
       
        {dog.map((item) => (
          <div
            key={item.id} 
            className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center"
          >
           
            <article>
              <img
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt={item.name} // Use the dog's name for alt text
              />
            </article>

            
            <article>
              <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
                {item.name} 
              </h1>

              <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
                <li className="mb-2">
                  <span className="font-bold text-slate-200">Temperament:</span>{" "}
                  {item.temperament}
                </li>
                <li className="mb-2">
                  <span className="font-bold text-slate-200">Bred For:</span>{" "}
                  {item.bred_for}
                </li>
                <li className="mb-2">
                  <span className="font-bold text-slate-200">Height:</span>{" "}
                  {item.height.metric} cm
                </li>
                <li className="mb-2">
                  <span className="font-bold text-slate-200">Weight:</span>{" "}
                  {item.weight.metric} kgs
                </li>
                <li className="mb-2">
                  <span className="font-bold text-slate-200">Lifespan:</span>{" "}
                  {item.life_span}
                </li>
              </ul>

              <Link
                to="/Search"
                className="inline-block border-2 border-white py-2 px-6 rounded mt-8 text-white hover:bg-white hover:text-indigo-800 transition-all duration-200"
              >
                Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}

export default SingleDog; 