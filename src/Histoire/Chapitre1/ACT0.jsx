import React, { useState, useEffect } from "react";

import "../../css/Chapitre1css/ACT0.css";
import Dialogue from "../../components/Dialogue";
// Assets
import Alarme from "../../Assets/Sons/alarm_clock.mp3";
import Bgm_Chambre_Suzy from '../../Assets/Musiques/Golden_Eye.mp3';
import Bg_Chambre_Suzy from '../../Assets/Fonds/bg_chambre_suzy.jpg'

const ACT0 = () => {
  const dialogues = [
    {
      nom: "???",
      texte: " Tu sais que tout ira bien, bien qu'on ne soit plus que deux, n'est-ce pas ?",
    },
    { nom: "???", texte: "..." },
    { nom: "???", texte: "Je t'aimerai toute ma vie, ma pe..." },
    { nom: " ", texte: "Bip...bip...bip" },
    { nom: "???", texte: "Il est déjà 7h...?" },
    { nom: "???", texte: "Arg..." },
    { nom: "???", texte: "Je devrais me préparer et aller déjeuner." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const [isBg, setIsBg] = useState(false);
  const [isProfil, setIsProfil] = useState(false);

  const handleClick = () => {
    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === 5) {
        setIsPlaying(false); // Arrêter le son avant d'afficher le troisième dialogue
        setIsBg(true); // Faire apparaitre le background de la chambre
        setIsProfil(true); // Faire apparaitre le profil
      }
      if (currentIndex === 2) {
        setIsPlaying(true); // Démarrer le son avant d'afficher le troisième dialogue
      }
    } else {
      setIsPlaying(false);
      setIsBg(false)
      setIsProfil(false)
    }
  };

  useEffect(() => {
    if (currentIndex === dialogues.length - 1) {
      setIsPlaying(false);
      setIsBgmPlaying(true);
    }
  }, [currentIndex, dialogues]);

  return (
    <div id="chapitre1">
      <Dialogue nom={dialogues[currentIndex].nom} onClick={handleClick}>
        {dialogues[currentIndex].texte}
      </Dialogue>
      {isPlaying && ( // Ajout de la condition pour déclencher le son après le dialogue "Bip...bip...bip"
        <audio src={Alarme} autoPlay loop />
      )}
      {isBgmPlaying && (
        <audio src={Bgm_Chambre_Suzy} autoPlay loop />)}
      {isBg && (
        <div className="Bg_Chambre"></div>
      )}
      {isProfil && (
        <div className="Suzy_Pyjama_Neutre"></div>
      )}
    </div>
  );
};

export default ACT0;
