import React from 'react';
import './aboutme.css';
import YouTubeVideos from './youtube';
import ContactForm from './ContactForm';
 // Reemplaza con la ruta de tu imagen o usa una imagen en línea

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-container">        
        <p className="about-me-text">
        El canal YO GAMER NFT nació en septiembre del 2021, justo en el apogeo del auge de los juegos NFT, y desde entonces ha ganado una enorme repercusión. A medida que ha pasado el tiempo, el canal ha ido proporcionando cada vez más información sobre inversiones DeFi y técnicas de trading en el mundo cripto. Solo un mes después de su creación, el canal comenzó a recibir muchas ofertas de proyectos criptos para colaborar. La popularidad del canal aumentó aún más cuando su creador, Daniel, comenzó a hacer videos de "funerales" para los juegos NFT que fracasaban, una idea que llamó mucho la atención. A pesar del mercado bajista, muchos youtubers desaparecieron del panorama cripto, pero YO GAMER NFT siguió publicando videos constantemente. Hoy en día, el canal sigue creciendo y mejorando en calidad de contenido día tras día.
        Además de su canal de YouTube, Daniel también creó un grupo de Telegram para su comunidad de seguidores. En este grupo, la comunidad comenzó a intercambiar información sobre tokens y oportunidades cripto, convirtiéndose en un espacio de encuentro para aquellos interesados en el mundo de las criptomonedas. El grupo se ha convertido en una comunidad activa y vibrante que comparte conocimientos y experiencia en el mercado de las criptomonedas. Con el tiempo, el grupo se ha consolidado como un punto de referencia para aquellos que buscan estar al tanto de las últimas tendencias en el mercado cripto.
        </p>
      </div>
      <div className="youtube-videos-container">
        <h2 className="youtube-videos-title">Mis ultimos videos.</h2>
        <YouTubeVideos />
        <h2 className="youtube-videos-title">Contactame.</h2>
        <ContactForm />
      </div>
    </div>
  );
};
export default AboutMe;
