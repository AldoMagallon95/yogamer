import React from 'react';
import './FuturisticTitle.css';
import combinedImage from './assets/titulo.png'; // Importa la nueva imagen combinada
 

const FuturisticTitle = () => {
  return (
    <div className="futuristic-title-container">
      <img src={combinedImage} alt="Imagen combinada" className="combined-image" />
    </div>
  );
};


export default FuturisticTitle;
