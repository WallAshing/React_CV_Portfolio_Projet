import React from "react";

const LinkBox = (props) => {
    return(
        <li>
            <a href={props.link}> {props.title} </a>
        </li>
    )
}

export default LinkBox