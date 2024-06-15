import React from "react";
import playIcon from "../assets/images/play-icon.svg"
import { Link } from "react-router-dom";


const CardContainer = () => {
    return (
        <>
            <div className="card-container">
                <div className="card-start">
                    <h1>Addition and Subtraction Facts within 20</h1>
                    <p>Test your knowledge with the following questions, tap a card to flip it and uncover the answer, good luck!</p>
                    <Link to="/slider" className="play-btn">
                        <img className="play-icon" src={playIcon} alt="play-icon" />
                        Lets Play
                    </Link>
                </div>


            </div>

        </>

    )
}

export default CardContainer;