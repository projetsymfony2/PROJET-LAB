import React, { useState } from 'react';
import './styles/PisteAthletisme.css';
import image1 from './assets/petite fille.png';
import image2 from './assets/stressé.png';
import image3 from './assets/mamie.png';
import image4 from './assets/coureuse.png';
import Modal from "./Modal";
import { createGlobalStyle } from 'styled-components';

// Importation de la police Bebas Neue
import "@fontsource/bebas-neue"; // Defaults to weight 400

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Bebas Neue', sans-serif;
  }
`;


const imageTexts = {
    
    [image1]: (
        <div>
             <p className="texte-1">Louise 14 ans</p>
             <p className="texte-2">Motivée par son idole</p>
             <p className="texte-4">
                 Notre conseil : courir pendant 1 à 2 minutes, puis marcher pendant 1 à 2 minutes pour récupérer et augmenter le rythme petit à petit. Ajouter des exercices de renforcement musculaire à la routine pour améliorer la force des jambes, comme les squats, les fentes, les pompes ou des exercices de gainage. Essayer de courir plusieurs fois par semaine, la régularité est la clé.
             </p>
             <p className="texte-3">
                 Elle admire Marie-José Perec, son idole, depuis plusieurs années, elle décide de se lancer dans l'athlétisme, inspirée par cette cette figure far de l’athlétisme. Elle attend avec impatience les J-O qui sont pour elle un moyen de se rapprocher un peu plus de son idole et de rentrer dans son monde.
             </p>
           </div>
     ),
 
     [image2]: (
        <div>
             <p className="Bastien1">Bastien - 35 ans</p>
             <p className="Bastien2">L’athlétisme est son échappatoire</p>
             <p className="Bastien3">
             Il utilise la course à pied comme un moyen de libérer le stress accumulé tout au long de sa journée de travail.
            Il est impatient d’assister aux J-O 2024, une expérience qui lui permettra de sortir de son train-train quotidien et comme lorsqu’il court, d’oublier ses tracas.  
             </p>
             <p className="Bastien4">
                 

Libère des endorphines qui procurent une sensation de bien-être, la course à pied est un excellent moyen de booster son humeur. 

Permet de relâcher la tension musculaire et surtout de réduire l'anxiété.

Est est un bon moyen de médiation et offre une qualité de temps seul.

Peut se pratiquer n’importe où, à n’importe quelle heure, même après une journée de travail, que ce soit dans la nature, le long des sentiers boisés, au bord de l'eau, il est possible de se décompresser peu importe le lieu où l’on se trouve
             </p>
           </div>
     ),
     [image3]: (
        <div>
             <p className="mamie1">CAROLINE - 63 ANS</p>
             <p className="mamie2">L’athlétisme pour rester en forme</p>
             <p className="mamie4">
             Sollicite le système cardiovasculaire.

Renforce le cœur et les poumons.

Peut réduire le risque de maladies cardiovasculaires.

Peut aider à stimuler le métabolisme et à maintenir un poids corporel adéquat.

Renforce les muscles, ce qui peut améliorer sla mobilité, l’équilibre et la posture.

        
             </p>
             <p className="mamie3">
             Caroline est une femme de 63 ans qui a récemment pris sa retraite. Soucieuse de se maintenir et de garder un mode de vie sain et actif, elle continue à courir et en a fait une habitude quotidienne. C’est une sportive dans l’âme, elle ne manquerait une édition des J-O pour rien au monde et suit religieusement les diffusions tous les quatre ans. Elle compte bien aller supporter les coureurs et se remémorer le temps où elle était elle-même en compétition. 

             </p>
           </div>
     ),
     [image4]: (
        <div>
             <p className="marie1">Marie-José Pérec - 55 ANS</p>
             <p className="marie2">Athlète professionnelle</p>
             <p className="marie4">
                 Notre conseil : courir pendant 1 à 2 minutes, puis marcher pendant 1 à 2 minutes pour récupérer et augmenter le rythme petit à petit. Ajouter des exercices de renforcement musculaire à la routine pour améliorer la force des jambes, comme les squats, les fentes, les pompes ou des exercices de gainage. Essayer de courir plusieurs fois par semaine, la régularité est la clé.
                 Même après sa retraite sportive, Marie-José Perec reste active dans le domaine du sport en tant que consultante et ambassadrice, partageant son expérience et son expertise avec les jeunes athlètes et contribuant à promouvoir l'athlétisme à travers le monde.
             </p>
             <p className="marie3">
             Marie-José Pérec se déclare candidate, pour être la dernière porteuse de la flamme olympique, dans le cadre des Jeux Olympiques de Paris 2024, qui se tiendront cet été. Pour la triple championne olympique, ce serait de l'acabit d'un quatrième sacre. Cela représenterait quelque chose de fort pour elle, à titre familial, en référence à Muhammad Ali, elle explique dans une interview le 22 mars 2024 que ce serait son rêve.
             </p>
           </div>
     ),
  
 
};


function PisteAthletisme() {
    const [selectedMessage, setSelectedMessage] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const imageMessages = {
        [image1]: "/static/media/petite fille.b1152f0166dee1222f76.png",
        [image2]: "/static/media/stressé.12891e19ca5d9ce97f82.png",
        [image3]: "/static/media/mamie.dc7a5c1b8ddf85fe9d08.png",
        [image4]: "/static/media/coureuse.c04b2e2c8d9267a5a190.png"
    };
    
  
    const handleImageClick = (image) => {
        setSelectedMessage(imageMessages[image]);
        setSelectedText(imageTexts[image]);
        console.log("Selected Message:", selectedMessage);
        console.log("Selected Text:", selectedText);
        setIsModalVisible(true);
    };
    ;

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedMessage("");
    };


    return (
        <>
            <GlobalStyle />
            <div className="piste-athletisme">
               <h1 className="texte-piste">CHACUN SON OBJECTIF</h1>
            
         
                <div className='piste'>
                    
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                </div>
                <div className='piste'>
                    <div className='etage'></div>
                    <div className='etage'><img className='bat1' onClick={() => handleImageClick(image1)} src={image1} alt="" /></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'><p className='texte4'> Marie-José Pérec - 55 ANS Athlète professionnelle     </p></div>
                </div>
                <div className='piste'>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>

                    
                    <div className='etage'><p className='fleche1'> ________________ </p></div>
                    <div className='etage'></div>
                    <div className='etage'><p className='texte2'> BASTIEN - 35 ANS L’ATHLÉTISME EST SON ÉCHAPPATOIRE   </p></div>
                    <div className='etage'><img className='bat3' onClick={() => handleImageClick(image3)} src={image3} alt="" /></div>  
                    <div className='etage'></div>   
                    <div className='etage'></div> 
                    <div className='etage'></div> 
                    <div className='etage'></div> 
                        
                    <div className='etage'><p className='fleche4'> ________________ </p></div>
                </div>
                <div className='piste'>
                    <div className='etage'></div>
                                                                        
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'><p className='texte1'> LOUISE - 14 ans MOTIVER PAR SON IDOLE  </p></div>
                    <div className='etage'></div>
                    
                    <div className='etage'><p className='fleche2'> ________________ </p></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'><p className='fleche3'> ________________ </p></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'><img className='bat4' onClick={() => handleImageClick(image4)} src={image4} alt="" /></div>
                    <div className='etage'></div>
                </div>
                <div className='piste'>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'><img className='bat2' onClick={() => handleImageClick(image2)} src={image2} alt="" /></div>
                    <div className='etage'></div>
                    
                    <div className='etage'></div>
                    <div className='etage'></div>
                    
    
                    <div className='etage'><p className='texte3'> CAROLINE - 63 ans L’Athlétisme pour rester en forme   </p></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                </div>
                <div className='piste'>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                    <div className='etage'></div>
                   
                    <div className='etage'></div>
                    
    
                </div>
                
    
    
                <Modal isOpen={isModalVisible}>
                    <div className='fermer'>
                        <h2>  </h2>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <img style={{ width: '40%' }} src={selectedMessage} alt="" />
                    <p>{selectedText}</p> {/* Affichage du texte associé à l'image sélectionnée */}
                </Modal>
            </div>
        </>
    );
}

export default PisteAthletisme;
