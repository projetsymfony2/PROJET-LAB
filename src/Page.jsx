import React from 'react';
import { Link } from 'react-router-dom';
import sample from './video/intro.mp4';
import logo from './assets/logo.png'; // Assurez-vous de remplacer 'logo.png' par le chemin correct de votre logo
import "./styles/Page.css" 
import NewsletterForm from './NewsletterForm';
function Page() {
  return (
    <div style={{ position: 'relative' }}>
      <video className='videoTag' autoPlay loop muted style={{ width: '100%', height: '100vh', objectFit: 'cover' }}>
        <source src={sample} type='video/mp4' />
      </video>
      <img src={logo} alt="Logo" style={{ position: 'absolute', top: '20px', left: '10px', width: '200px', height: '200px' }} />
      
      {/* Ajouter le bouton et utiliser Link pour la redirection */}
      <Link to="/Accueil" className="button3"> {/* Utilisez le composant Link pour créer un lien vers la page Athlete */}
             PARTEZ
      </Link>
      <Link to="/login" className="login-button">Login</Link>
      <Link to="/subscribe" className="subscribe-button">S'abonner</Link>
      <NewsletterForm />
    </div>
  );
}

export default Page;