import React from "react"; // import React to use JSX and component features 
import bannerImg from "/public/assets/banner.jpeg" // import banner image from assests to display in this component 


// add data for this component "Banner" 
// apply tailwind css into each section instead using css external 
// on <img scr={bannerImg}/>, the variable is calling on "import banner from the import assets banner.jpeg"
function Banner () {
    return (
        <div className=" text-indigo-800  text-center ">
            <img className="w-full relative -z-10 bottom-14 left-12" src={bannerImg} />
            <div className="absolute z-[-4] left-4 top-24 w-full">
            <h1 className="font-bold text-4xl mb-6">Hi !!! I am Muffin</h1>
            <p className="font-semibold text-2xl mt-2">This is one of my favourite position.</p>
            </div>
        </ div>
        
    );
}

// export Banner components to used on App.jsx
export default Banner;