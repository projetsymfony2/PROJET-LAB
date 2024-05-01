// FelicitationsPage.jsx
import React from 'react';
import './styles/Felicitations.css'; // Importez les styles CSS
import { Link } from 'react-router-dom';
function FelicitationsPage() {
  return (
    <div className="felicitations-container">
      <Link to="/" className="back-button">Retour à l'accueil</Link>
      <h2>Félicitations !</h2>
      <p>Votre inscription à la newsletter a été effectuée avec succès.</p>
      <div className="animation-container">
        <svg width="400" height="400">
          <circle
            fill="none"
            stroke="#68E534"
            strokeWidth="20"
            cx="200"
            cy="200"
            r="190"
            strokeLinecap="round"
            transform="rotate(-90 200 200)"
            className="circle"
          />
          <polyline
            fill="none"
            stroke="#68E534"
            points="88,214 173,284 304,138"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tick"
          />
        </svg>
      </div>
    </div>
  );
}

export default FelicitationsPage;
