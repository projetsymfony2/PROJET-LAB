import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/LouiseModal.css'; 
import './styles/BastienModal.css'; 
import './styles/MamieModal.css'; 
import './styles/MarieModal.css'; 
const Modal = ({ children, isOpen }) => {
  // On ne rend rien si la modale n'est pas ouverte 
  if (!isOpen) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Créer un élément pour attacher le contenu de la modale 
    const modalElement = document.createElement('div');

    // Attacher l'élément créé au 'modal-root'
    const modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(modalElement);

    return () => {
      // Nettoyer en supprimant l'élément lors du démontage 
      modalRoot.removeChild(modalElement);
    };
  }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une fois

  return ReactDOM.createPortal(
    // Le contenu de la modale
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>, 
    document.getElementById('modal-root')
  );
};

export default Modal;
