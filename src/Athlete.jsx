import React from 'react';
import sample from './video/gif.mp4';
import backgroundImage from './assets/bleu.png'; // Chemin vers votre image
import '../src/styles/Athlete.css'
import Ath1 from './assets/ath1.png';
import Ath2 from './assets/ath2.png';
import Ath3 from './assets/ath3.png';

import { Link } from 'react-router-dom';
function Page2() {
  return (
    <div >
      <video className='videoTag' autoPlay loop muted >
        <source src={sample} type='video/mp4' />
      </video>
      
      <div className="image-overlay">
        {/* Utilisez la classe background-image pour l'image de fond */}
        <img src={backgroundImage} alt="Background" className="background-image" />

        <Link to="/athlete/ath1" className="athlete-link">
          <div className="athlete-container">
            <img src={Ath1} alt="" className="Athlete1" />
            <p className="text-1">Renaud Lavillenie</p>
          </div>
        </Link>

        <Link to="/athlete/ath2" className="athlete-link">
          <div className="athlete-container">
            <img src={Ath2} alt="" className="Athlete2" />
            <p className="text-2">Christophe Lemaitre</p>
          </div>
        </Link>
        <Link to="/athlete/ath3" className="athlete-link">
          <div className="athlete-container">
            <img src={Ath3} alt="" className="Athlete3" />
            <p className="text-3">Jimmy Vicaut</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Page2;
