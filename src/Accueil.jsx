import React from 'react';

import { Link } from 'react-router-dom';
import './Accueil.css';


import PisteAthletisme from './PisteAthletisme';
import './styles/ButtonStyles.css'; 
import imgpodium from './assets/podium.png';


function Home() {
    return (
        <>
            <PisteAthletisme />
            <div style={{ width: '100vw', overflow: 'hidden' }}>
               
                <img src={imgpodium} alt="Podium" style={{ width: '100%', height: 'auto' }} />
                


            </div>

            <Link to="/athlete" className="button2"> {/* Utilisez le composant Link pour créer un lien vers la page Athlete */}
             LEURS HISTOIRES
            </Link>
        </>
    );
}

export default Home;
