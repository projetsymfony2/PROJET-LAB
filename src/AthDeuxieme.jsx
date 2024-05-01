import React from 'react';
import styled from 'styled-components';

import Overlaybackground2 from './video/background.mp4';
import Rinetoverlay from './assets/athlet2.png';

const Container = styled.div`
  background-color: #0A094B;
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
        <Overlayname>Christophe <br />  Lemaitre</Overlayname>
        <Overlaydata2>
          



        Christophe Lemaitre est un sprinter français né le 11 juin 1990 à Annecy, en France <br /> <br />

        Il est surtout connu pour être le premier athlète blanc à avoir couru le 100 mètres en moins de 10 secondes, un exploit qu'il a réalisé en 2010 lors des Championnats de France à Valence.
        <br /> <br />
       Lemaitre a remporté plusieurs médailles lors des championnats d'Europe d'athlétisme en salle et en plein air, ainsi qu'aux Championnats du monde juniors.
       <br /> <br />
       Il a participé aux Jeux olympiques d'été de 2012 à Londres et aux Jeux olympiques d'été de 2016 à Rio de Janeiro, représentant la France dans les épreuves de sprint.
       <br /> <br />
       Bien qu'il n'ait pas remporté de médaille olympique, Lemaitre reste l'un des sprinters français les plus renommés et a contribué à populariser l'athlétisme en France.
 
</Overlaydata2>
        </Overlaymargin>
    </Container>
  );
}

export default Overlay;
