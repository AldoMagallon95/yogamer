import React from 'react';
import './futuristicards.css';
import image1 from '../assets/rarezas/comun.jpg';
import image2 from '../assets/rarezas/raro.jpg';
import image3 from '../assets/rarezas/epico.jpg';
import image4 from '../assets/rarezas/legendario.jpg';

function FuturisticImageCards() {
  return (
    <div className="futuristic-image-cards">
      <div className="image-card">
        <img src={image1} alt="Imagen 1" />
        <h3 className='h3-1'>Comun</h3>
        <p>
        El propietario de un NFT común puede realizar hasta 10 tareas diarias, compartiendo publicaciones del canal Yo Gamer en diferentes comunidades como Telegram, Instagram, 
        Twitter, Discord y TikTok. Cada tarea completada se le pagará $0.03 centavos de dólar, lo que le permitirá obtener un retorno de inversión en tan solo 3 meses y 15 días.
         Además, el propietario puede optar por "farming" en una segunda instancia para acelerar el ROI. 
        </p>
      </div>
      <div className="image-card">
        <img src={image2} alt="Imagen 2" />
        <h3 className='h3-2' >Raro</h3>
        <p>
        El propietario de un NFT raro tiene la tarea de verificar la legitimidad de las publicaciones realizadas por los propietarios de los NFT comunes.
         Puede realizar hasta 10 tareas diarias y ganar $0.05 centavos de dólar por cada tarea completada. 
         Con estas tareas, el propietario puede obtener un retorno de inversión en tan solo 2 meses y 4 días. 
         Además, el propietario puede optar por "farming" en una segunda instancia para aumentar aún más sus ganancias.
        </p>
      </div>
      <div className="image-card">
      <img src={image3} alt="Imagen 3" />
      <h3 className='h3-3'>Epico</h3>
    <p>
    El propietario de un NFT épico recibirá un porcentaje del pool de recompensas que aporta el youtuber YO GAMER NFT en cada contratación del canal, 
    siendo un 35% del 30% que se les paga a los propietarios de NFT épicos y legendarios. Además, el propietario de un NFT épico puede realizar hasta 10 tareas diarias, 
    ganando $0.07 centavos de dólar por tarea, lo que le permite obtener un retorno de inversión en tan solo 1 mes y 15 días. 
    También puede optar por "farming" en una segunda instancia para aumentar aún más sus ganancias. 
    Es muy probable que con una o dos contrataciones del canal, el propietario alcance su ROI.
    </p>
  </div>
  <div className="image-card">
    <img src={image4} alt="Imagen 4" />
    <h3 className='h3-4'>Legendario</h3>
    <p>
    El propietario de un NFT Legendario recibirá un porcentaje del pool de recompensas que aporta el youtuber YO GAMER NFT en cada contratación del canal,
     siendo un 65% del 30% que se les paga a los propietarios de NFT épicos y legendarios. Además, el propietario de un NFT Legendario puede realizar hasta 10 tareas diarias, 
     ganando $0.1 centavos de dólar por tarea, lo que le permite obtener un retorno de inversión en tan solo 1 mes y 2 días. 
     También puede optar por "farming" en una segunda instancia para aumentar aún más sus ganancias. 
    Es muy probable que con una contratación del canal, el propietario alcance su ROI.
    </p>
  </div>
</div>
);
}

export default FuturisticImageCards;
