import React from "react";
import "./partner.css"
import img1 from '../assets/socios/risebit.png'
import img2 from '../assets/socios/kraken.png'

function Partners() {
    return(                        
        <div className="partner-cards">            
            <div className="partner-card">
                 <a href="https://risebit.co/#/">
                 <img class="risebit" src={img1} alt="Imagen 1" />
                 </a>                        
            </div>
            <div className="partner-card">
            <img class="kraken" src={img2} alt="Imagen 1" />
            </div>
        </div>
    );      
}

export default Partners