
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css'; // Import du fichier CSS
import "@fontsource/jost"; // Defaults to weight 400
import "@fontsource/jost/400.css"; // Specify weight
import "@fontsource/jost/400-italic.css"; // Specify weight and style

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
        <p className="texte-1">louise 14 ans </p>
        <p className="texte-2">Motiver par son idole </p>
        <p className="texte-4"> Notre conseil : courir pendant 1 à 2 minutes, puis marcher pendant 1 à 2 minutes pour récupérer et augmenter le rythme petit à petit.
 
Ajouter des exercices de renforcement musculaire à la routine pour améliorer la force des jambes, comme les squats, les fentes, les pompes ou des exercices de gainage. 

Essayer de courir plusieurs fois par semaine, la régularité est la clé.
</p>
        <p className="texte-3">Elle admire Marie-José Perec, son idole, depuis plusieurs années, elle décide de se lancer dans l'athlétisme, inspirée par cette cette figure far de l’athlétisme. Elle attend avec impatience les J-O qui sont pour elle un moyen de se rapprocher un peu plus de son idole et de rentrer dans son monde.</p>
      </div>
    </div>, 
    document.getElementById('modal-root')
  );
};

export default Modal;
