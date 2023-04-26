import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./header/header";
import FuturisticTitle from './FuturisticTitle';
import Descripcion from "./descripcion/descripcion";
import FuturisticCards from "./descripcion/tarjetasfuturas";
import FuturisticImageCards from "./descripcion/futuristicicards";
import Sponsors from "./collabs/sponsors"
import Partners from "./collabs/partners";
import Footer from "./footer/footer";
import AboutMe from "./aboutme/aboutme";
import GrainEffect from "./effects/GrainEffect";
import CursorLight from "./effects/CursorLight";



function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-image"></div>        
        <Header />
        <CursorLight />
        <GrainEffect />
        <Routes>
          <Route
            path="/"
            element={
              <>
              <FuturisticTitle />
              <Descripcion />                
                <FuturisticCards />
                <button className="mint" onClick={() => window.location.href = "https://app.risebit.co/#/launchpad-nft/list/0"}>Mint</button>                     
                <FuturisticImageCards />
                <h1 className="socios">Socios</h1>
                <Partners />
                <h3 className="sponsors">Sponsors</h3>
                <Sponsors/>
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;