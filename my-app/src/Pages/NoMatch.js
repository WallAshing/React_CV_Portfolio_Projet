import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    return(
        <>
            <h2>No match for</h2> 
            <code>{location.pathname}</code>
        </>
    )
}

export default Home