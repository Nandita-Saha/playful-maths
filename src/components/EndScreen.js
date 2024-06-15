import React from "react";
import endScreenImg from "../assets/images/groupendscreen-tick.svg"
import playAgainIcon from "../assets/images/play-again-icon.svg"
import { Link } from "react-router-dom";

const EndScreen = () => {
    return (
        <div className="end-screen">
            <img src={endScreenImg} className="end-tick" alt="slider-end" />
            <p>Hope you learned something new!</p>
            <Link to="/" className="play-btn">
                <img className="play-icon" src={playAgainIcon} alt="play-again-icon" />
                Play Again
            </Link>
        </div>
    )
}

export default EndScreen