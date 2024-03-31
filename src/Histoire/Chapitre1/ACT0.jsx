import React, { useState, useEffect } from "react";

import "../../css/Chapitre1css/ACT0.css";
import Dialogue from "../../components/Dialogue";
// Assets
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
    { nom: "???", texte: "Hmm...Il est déjà 7h...?" },
    { nom: "???", texte: "Arg..." },
    { nom: "???", texte: "..." },
    { nom: "???", texte: "Je devrais me préparer et aller déjeuner." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Audios
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);

  const bgmVolume = 0.2;
  // IMGS
  const [isBgChambre, setIsBgChambre] = useState(false);
  const [isBgBack, setIsBgBack] = useState(false);
  // IMGS PROFILS
  const [isProfil, setIsProfil] = useState(false);

  // Mode de jeu
  const [isIconArmoire, setIsIconArmoire] = useState(false);
  const [isIconPorteChambreSuzy, setIsIconPorteChambreSuzy] = useState(false);

  const handleClick = () => {
    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === 6) {
        setIsProfil(false);
        setIsIconArmoire(true);
        setIsIconPorteChambreSuzy(true);
        setDisplayText(false);
      }

      if (currentIndex === 5) {
        setIsPlaying(false); // Arrêter le son du réveil
        setIsBgBack(false);
        setIsBgmPlaying(true);
        setIsBgChambre(true); // Faire apparaitre le background de la chambre
        setIsProfil(true); // Faire apparaitre le profil
      }
      if (currentIndex === 2) {
        setIsPlaying(true); // Démarrer le son du réveil
      }
      if (currentIndex === 0) {
        setDisplayText(true);
        setIsBgBack(true); // Apparaitre bg noir
      }
    } else {
      setIsPlaying(false);
      setIsBgChambre(false);
      setIsProfil(false);
      setIsBgBack(false);
    }
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setIsBgBack(true); // Apparaitre bg noir au chargement de la page
    }
  }, []); // Le tableau vide en seconde argument signifie que cet effet ne s'exécutera qu'une seule fois, au chargement initial de la page

  return (
    <div id="chapitre1">
      <Dialogue nom={dialogues[currentIndex].nom} onClick={handleClick}>
        {dialogues[currentIndex].texte}
      </Dialogue>
      {/* Audios */}
      {isPlaying && (
        <audio src={Alarme} autoPlay loop />
      )}
      {isBgmPlaying && (
        <audio src={Bgm_Chambre_Suzy} autoPlay loop volume={bgmVolume} />)}
      {/* Backgrounds */}
      {isBgChambre && (
        <div className="Bg_Chambre_Suzy"></div>
      )}
      {isBgBack && (
        <div className="Bg_Black"></div>
      )}
      {/* Profils */}
      {isProfil && (
        <div className="Suzy_Pyjama_Neutre"></div>
      )}
      {/* Mode de jeu */}
      {isIconArmoire && (
        <div className="Icon_Armoire">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#c00000"
              d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
            />
          </svg></div>
      )}
      {isIconPorteChambreSuzy && (
        <div className="Icon_Porte_Chambre_Suzy">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#c00000"
              d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
            />
          </svg></div>
      )}
    </div>
  );
};

export default ACT0;
