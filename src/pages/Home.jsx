import React from "react";  // import React to use JSX and component features 
import Banner from "../components/Banner";  // import Banner component
import Content from "../components/Content";  // import Content component  


function Home () {
    return(
        <div>
            <Banner/>
            <Content />

        </div>

    );
}


export default Home;