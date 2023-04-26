import React, { useState, } from 'react';
import './descripcion.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/descripcion/beneficios.png';
import image2 from '../assets/descripcion/economia.png';
import image3 from '../assets/descripcion/share.png';
import image4 from '../assets/descripcion/pagos.png'
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";

const videos = [
  'https://www.youtube.com/embed/GLsMFXZU_bc',  
];

function Descripcion() {   
  const [currentSlide, setCurrentSlide] = useState(0);
  const externalLink = "https://medium.com/@yogamernftjuegos/primeros-tokens-no-fungibles-del-universo-yo-gamer-nft-6d7b181539cb";
  
 
  function handleNext() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
  }

  function handlePrevious() {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  }
  return (
    <div className="futuristic-section">
      <Carousel showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={false}
        autoPlay={false}
        interval={5000}
        transitionTime={500}
        emulateTouch={false}        
        swipeable={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        >              
        <div className="card-car">
          <div className="content-wrapper">
            <img src={image1} alt="Imagen 1" className="carousel-image" />
            <div className="text-wrapper">
              <h2 className="h2-1">Descripción de la colección</h2>
              <p>
              La colección NFT "YO GAMER GENESIS" es una serie exclusiva de 200 ejemplares creada por el reconocido youtuber YO GAMER NFT. <br/>  Esta será la primera colección del canal, lo que la hace aún más especial y única.
              Cada uno de los 200 ejemplares de "YO GAMER GENESIS" se obtendrán mediante un proceso de minteo seguro que generará diferentes probabilidades de rarezas, lo que hará que cada NFT sea verdaderamente especial y exclusivo para su propietario.
              La colección está especialmente diseñada para entusiastas del mundo cripto y seguidores de YO GAMER NFT. 
              Dado que será la primera serie del canal, se espera que "YO GAMER GENESIS" sea muy popular y se convierta en una verdadera alegría para los coleccionistas de NFT. Si eres un fanático del universo cripto o simplemente un entusiasta de las nuevas tendencias, esta colección es definitivamente algo que no querrás perderte.
              </p>
            </div>
          </div>
        </div>
        <div className="card-car">
          <div className="content-wrapper">
            <img src={image2} alt="Imagen 2" className="carousel-image" />
            <div className="text-wrapper">
              <h2 className="h2-2">Share For Win</h2>
              <p>
              La colección es una propuesta innovadora que brinda a sus propietarios la oportunidad de obtener ingresos económicos a 
              largo plazo gracias al concepto "SHARE FOR WIN" desarrollado por el youtuber Daniel. Este concepto se basa en compartir una parte de 
              las ganancias de patrocinio del canal de YouTube con los propietarios,
               obteniendo que estos puedan afectarse de las contrataciones del canal.
              </p>
            </div>
          </div>
        </div>
        <div className="card-car">
          <div className="content-wrapper">
            <img src={image3} alt="Imagen 3" className="carousel-image" />
            <div className="text-wrapper">
              <h2 className="h2-3">Beneficios de la colección</h2>
              <p>
              Los propietarios de la colección pueden acceder a los beneficios monetarios al compartir el contenido del canal en otras comunidades.
               Además, la colección ofrece múltiples beneficios adicionales, como acceso a contenido premium y otras oportunidades de recompensas. En consecuencia, la colección se presenta como una oportunidad interesante para obtener 
              ingresos económicos a largo plazo, siempre y cuando el canal de YouTube mantenga una buena cantidad de contrataciones que generen ingresos.
              </p>
            </div>
          </div>
        </div>
        <div className="card-car">
          <div className="content-wrapper">
            <img src={image4} alt="Imagen 3" className="carousel-image-fourth-image" />
            <div className="text-wrapper">
              <h2 className="h2-3">TAREAS Y PAGOS</h2>
              <p>
              Es importante destacar que todas las recompensas se pagarán en USDT y los pagos se realizarán una vez que el inversor alcance los $10. Esta medida ha sido tomada con el objetivo de aprovechar de manera eficiente los costos de las transacciones.
              Además, cabe mencionar que habrá un límite de 10 tareas diarias por propietario. Esto garantiza que las tareas sean realizadas de manera efectiva y que los inversores puedan recibir sus recompensas de manera oportuna.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="icon-controls">
        <AiFillStepBackward onClick={handlePrevious} />
        <AiFillStepForward onClick={handleNext} />
      </div>     
      <a href={externalLink} target="_blank" rel="noreferrer" className="learn-more-button">
        Conoce más
      </a>
      {videos.map((videoUrl, index) => (
        <div key={index} className="video">
          <iframe
            width="560"
            height="415"
            src={videoUrl}
            title={`Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}      
    </div>
  );
}
export default Descripcion;
