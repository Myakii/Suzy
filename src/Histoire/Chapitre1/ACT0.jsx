import React, { useState, useEffect } from "react";

import "../../css/Chapitre1css/ACT0.css";
import Dialogue from "../../components/Dialogue";
import Alarme from "../../Assets/Sons/alarm_clock.mp3";
import Bgm_Chambre_Suzy from '../../Assets/Musiques/Golden_Eye.mp3';

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

  const bgmVolume = 0.1

  const handleClick = () => {
    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === 5) {
        setIsPlaying(false); // Arrêter le son avant d'afficher le troisième dialogue
      }
      if (currentIndex === 2) {
        setIsPlaying(true); // Démarrer le son avant d'afficher le troisième dialogue
      }
    } else {
      setIsPlaying(false);
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
        <audio src={Bgm_Chambre_Suzy} autoPlay loop onVolumeChange={bgmVolume}/>)}
    </div>
  );
};

export default ACT0;
