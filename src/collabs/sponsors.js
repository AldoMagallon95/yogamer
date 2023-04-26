import React from "react";
import "./sponsors.css"
import img1 from '../assets/sponsors/wolf.png'
import img2 from '../assets/sponsors/loop.png'
import img3 from '../assets/sponsors/tokoin.png'

function Sponsors() {
    return(                        
        <div className="sponsor-cards">            
            <div className="sponsor-card">
              <div className="sponsor-images">
                <a href="https://www.wolfcapital.app/dapp/stake/?ref=0xF10785F3B2c744ff59De829a9eDB8d973d5a0609">
                  <img className="sponsor-1" src={img1} alt="Imagen 1" /> 
                </a>   
                <a href="https://loopweb3.io/">   
                  <img className="sponsor-2" src={img2} alt="Imagen 2" />                        
                </a> 
                <a href="https://tokoin.io/">   
                  <img className="sponsor-3" src={img3} alt="Imagen 2" />                        
                </a>
              </div> 
            </div> 
        </div>
    );      
}

export default Sponsors