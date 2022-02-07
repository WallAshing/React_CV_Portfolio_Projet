import React from "react";
import Photo from "../../../img/01000299.jpg"


const PictureBox = () => {
    return(
        <>
            <img style={{width: 250, height: 250, borderRadius: 999, objectFit: "cover", objectPosition: "42% 0" }} src={Photo} alt="Me" />
            <h1>Alexandre Vauthier</h1>
        </>
    )
}

export default PictureBox