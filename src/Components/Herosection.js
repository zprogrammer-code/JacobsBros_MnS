import React from "react";
import { Button } from "react-bootstrap";

const Herosection = () => {

    return(
        <div className="hero-section">
        <img src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1703703281/Jacobs_Brothers_Moving_asnd_storage_w2xnkg.png" alt="da-logo" className="hero-pic"/>
        <div className="hero-info">
            <Button className="hero-info-button"> Get Pricing </Button>
    
        </div>
        </div>
    )
}

export default Herosection;