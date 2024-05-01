import React from 'react';
import styled from 'styled-components';

import Overlaybackground2 from './video/background.mp4';
import Rinetoverlay from './assets/Athlet3.png';

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
        <Overlayname>Jimmy <br />  Vicaut</Overlayname>
        <Overlaydata2>
          Jimmy Vicaut est également un sprinter français, né le 27 février 1992 à Bondy, en France.<br /> <br />
          Il détient le record de France sur 100 mètres avec un temps de 9,86 secondes, établi en 2015.        <br /> <br />
          Vicaut a remporté plusieurs médailles lors des championnats d'Europe d'athlétisme en salle et en plein air, ainsi que lors des championnats du monde en salle.       <br /> <br />
          Il a également représenté la France aux Jeux olympiques d'été de 2012 à Londres et aux Jeux olympiques d'été de 2016 à Rio de Janeiro, participant aux épreuves de sprint.       <br /> <br />
          Tout comme Lemaitre, Vicaut n'a pas encore remporté de médaille olympique, mais il demeure l'un des sprinters les plus talentueux de la scène internationale.  <br /> <br />
          En fait les deux personnes que tu as trouvé ont eu des médailles mais pas pendant les JOs.
        </Overlaydata2>
      </Overlaymargin>
    </Container>
  );
}

export default Overlay;
