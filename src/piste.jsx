import React from 'react';

const PisteAthletisme = () => {
  return (
    <div className="piste-athletisme">
      {/* Image de la piste d'athlétisme en arrière-plan */}
      <img src="lien_vers_l'image_de_la_piste" className="piste-background" alt="Piste d'athlétisme" />

      {/* Images des athlètes sur la piste */}
      <div className="athlete-image" style={{ backgroundImage: `url(lien_image_athlete_piste1)` }}></div>
      <div className="athlete-image" style={{ backgroundImage: `url(lien_image_athlete_piste2)` }}></div>
      <div className="athlete-image" style={{ backgroundImage: `url(lien_image_athlete_piste3)` }}></div>
      <div className="athlete-image" style={{ backgroundImage: `url(lien_image_athlete_piste4)` }}></div>
    </div>
  );
}

export default PisteAthletisme;
