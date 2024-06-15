import React from "react";
import { useState } from "react";
import logo from "../assets/images/head-logo.png"
import muteIcon from "../assets/images/muted.svg"
import soundIcon from "../assets/images/sound-icon.svg"
import "../assets/css/header.css"

const Header = ()=> {
    const [muted, setMuted] = useState(false);
    const handleAudio = () => {
       
        if (!muted) {
            setMuted(true);
          
        }
        else {
            setMuted(false);
        
        }
    }
    

    return (
        <div className="header">
            <div className="logo">
            <img src={logo} alt="hader-logo" />
            </div>
            <div className="audiobox" onClick={handleAudio}>
            {muted ? <img src={soundIcon} /> : <img src={muteIcon} />}
            {/* <img src={audiobox} alt="hader-logo" /> */}
            </div>

        </div>
    );
}

export default Header;