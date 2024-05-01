import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { useNavigate } from 'react-router-dom'; 
import './styles/backstyles/NewsletterForm.css';

function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Nom de l\'abonné :', name);
      await addDoc(collection(db, 'newsletterSubscribers'), {
        name: name,
        email: email
      });

      console.log('Abonné ajouté avec succès !');
      setName('');
      setEmail('');
      setIsSubmitted(true);
      navigate('/felicitation'); // Redirigez vers la page de félicitations
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'abonné :', error);
    }
  };

  return (
    <div className="container-Form"> {/* Ajoutez cette ligne */}
      <form onSubmit={handleSubmit} className="newsletter-form">
        <h2>Inscrivez-vous à notre newsletter</h2>
        <input 
          type="text" 
          placeholder="Votre nom" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Votre adresse e-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">S'inscrire</button>
      </form>
      {isSubmitted && <p>Inscription à la newsletter effectuée avec succès !</p>}
    </div>
  );
}

export default NewsletterForm;
