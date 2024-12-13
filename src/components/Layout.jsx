import React from "react"; // Import React to use JSX
import { Outlet } from "react-router-dom"; // Import Outlet to render child routes
import Header from "../components/Header"; // Import Header component for the navigation bar
import Footer from "../components/Footer"; // Import Footer component for the page footer

function Layout() {
    
    //this is where the child routes of <Layout> will be rendered when the page change, the child routes (pages like Home, Projects, About
    return(
        <section>
            <Header />
            <main>
            <Outlet />
            </main>
            <Footer />
        </section>
    );
}

export default Layout;