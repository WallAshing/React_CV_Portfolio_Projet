import React from "react";
import PictureBox from "./components/PictureBox";
import SocialBox from "./components/SocialBox"
import LinkBox from "./components/LinkBox";

const Nav = () => {
    return(
        <nav>
            <PictureBox />
            <ul>
                <LinkBox title="Home" link="/" />
                <LinkBox title="CV" link="/cv" />
                <LinkBox title="Portfolio" link="/portfolio" />
                <LinkBox title="Quizz" link="/quizz" />
                <LinkBox title="About" link="/about" />
            </ul>
            <SocialBox />
        </nav>
    )
}

export default Nav