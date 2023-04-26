import React from 'react';
import './youtube.css';

const videos = [
  'https://www.youtube.com/embed/qLTLxuKreUk',
  'https://www.youtube.com/embed/xJid3qqgnsU',
  'https://www.youtube.com/embed/ll-4pSBhUFA',
  'https://www.youtube.com/embed/X28JvLezb_k',
];

const YouTubeVideos = () => {
  return (
    <div className="youtube-videos">
      {videos.map((videoUrl, index) => (
        <div key={index} className="video-wrapper">
          <iframe
            width="560"
            height="315"
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
};

export default YouTubeVideos;
