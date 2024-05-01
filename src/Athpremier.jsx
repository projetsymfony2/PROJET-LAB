import React from 'react';
import styled from 'styled-components';

import Overlaybackground2 from './video/background.mp4';
import Rinetoverlay from './assets/Athlet1.png';

const Container = styled.div`
  
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: left;
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Overlayimage = styled.img`
  position: absolute;
  height: 107%;
  left: 5%;
  overflow: hidden;
  animation: slideInLeft 1s;
`;

const Overlayname = styled.div`
  color: white;
  font-size: 12vh;
  margin-bottom: 2%;
  font-family: bebas neue;
`;

const Overlaymargin = styled.div`
  margin-top: 5%;
  margin-left: 60%;
  animation: zoomIn 1s;
  position: relative;
`;

const Overlaydata2 = styled.div`
  color: #ffffff;
  height: 55vh;
  width: 80vh;
  overflow-y: auto;
  font-family: Aileron;
  font-size: 3vh;
  background-color: transparent;
`;

function Overlay() {
  return (
    <Container>
      <BackgroundVideo autoPlay loop muted>
         <source src={Overlaybackground2} type="video/mp4" />
         Your browser does not support the video tag.
       </BackgroundVideo>
        <Overlayimage src={Rinetoverlay}></Overlayimage>
        <Overlaymargin>
        <Overlayname>RENAUD <br />  LAVILLENIE</Overlayname>
        <Overlaydata2>
          Médailles olympiques : Renaud Lavillenie est un sauteur à la perche français qui a remporté la médaille d'or aux Jeux olympiques d'été de 2012 à Londres. Il a également remporté la médaille d'argent aux Jeux olympiques de 2016 à Rio de Janeiro. <br /> <br />
          Parcours professionnel : Renaud Lavillenie est l'un des sauteurs à la perche les plus talentueux de l'histoire. En plus de ses succès olympiques, il a établi de nombreux records du monde et a remporté plusieurs titres aux championnats du monde d'athlétism <br /> <br />
        </Overlaydata2>
        </Overlaymargin>
    </Container>
  );
}

export default Overlay;
