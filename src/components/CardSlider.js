import React, { useState } from "react";
import prevIcon from "../assets/images/prev.png"
import nextIcon from "../assets/images/next.png"
import clickIcon from "../assets/images/click-cursor.svg"
import { questionset } from "../utils/data"
import { Link , useNavigate } from "react-router-dom";



const CardSlider = () => {

    const data = questionset;
    const navigate= useNavigate();
   
    const [slider, setSlider] = useState(0);
    const [isActive, setActive] = useState("false");
   
    const showAns = (id) => {
        // console.log(id);
        setActive(!isActive);
        const newArray = questionset.filter((item) => item.id == id ? item : item);
        // console.log("after filter", newArray)
    }
    const showQus = () => {
        setActive(true);
    }

    const nextSlide = () => { 
        setActive(true);
        if(slider === data.length -1){
            navigate('/end');
        }
        else{
             setSlider(slider + 1 );
        }
    }

    const prevSlide = () => {     
        setActive(true);
        setSlider(slider === 0 ? data.length - 1 : slider - 1);
    }

    return (
        <div className="card-slider">
            <div className="slider-dots">
                <p className="card-counter"><span>{slider + 1}</span>/{data?.length}</p>
                <div className="slider-dot">
                    {data.map((item, key) => {
                        return (
                            <span className={slider+1 === item.id ? "active" : "notActive"} key={item?.id}></span>
                        )
                    })
                    }
                </div>
            </div>

            <div className={`slider-carousel`}>
                {
                    data?.map((item, index) => {
                        return (
                            <div className={`card-div ${slider === index ?  'card-active' : 'hidden'} `} key={item?.id}>                               
                                {/* {console.log("active ========", isActive)} */}
                                {<div className={isActive ? "hover" : "hover active"}>
                                    <div className="question-box">
                                        <div className="question-div">
                                            <h2>{item?.qstn}</h2>
                                        </div>
                                        <div  className="tap-btn" to={index} onClick={() => showAns(item.id)}>
                                            <img src={clickIcon} alt="cursor" />
                                            <p>Tap to reveal the answer</p>
                                        </div>
                                    </div>
                                    <div className="answer-box" onClick={showQus}>
                                        <div className="img-div">
                                            <img src={item?.des.img} alt="answer-img" />
                                        </div>
                                        <div className="ans-div">
                                            <p className="">{item?.des.ans}</p>
                                        </div>
                                    </div>
                                    
                                </div>}
                            </div>
                        )
                    })
                }
            </div>
            <div className="slider-buttons">
                <button onClick={prevSlide} className="prev-btn">
                    <img src={prevIcon} alt="slider-prev-btn" />
                </button>
                <button onClick={nextSlide} className="next-btn">
                    <img src={nextIcon} alt="slider-next-btn" />
                </button>
            </div>
        </div>
    )
}

export default CardSlider