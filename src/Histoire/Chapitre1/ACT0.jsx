import React, { useState, useEffect } from "react";

import "../../css/Chapitre1css/ACT0.css";

import Dialogue from "../../components/Dialogue";

// Assets
import Alarme from "../../Assets/Sons/alarm_clock.mp3";
import EteintAlarme from '../../Assets/Sons/light-switch.mp3'
import BougerLit from '../../Assets/Sons/sitting-on-bed-97752.mp3'


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

  const interactions = [
    { nom: "???", texte: " Je devrais d'abord m'habiller" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [interactionsIndex, setInteractionsIndex] = useState(0);
  const [isDisplayText, setDisplayText] = useState(false);

  // Audios
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const [isBgmEteindreAlarme, setIsBgmEteindreAlarme] = useState(false);
  const [isBgmBougerLit, setIsBgmEBougerLit] = useState(false);

  // IMGS
  const [isBgChambre, setIsBgChambre] = useState(false);
  const [isBgBack, setIsBgBack] = useState(false);
  const [isProfilSuzyPyjama, setIsProfilSuzyPyjama] = useState(false);
  // IMGS PROFILS CINEMATIQUE
  const [isProfilSuzyCinematique, setIsProfilSuzyCinematique] = useState(false);

  // Mode de jeu
  const [isIconArmoire, setIsIconArmoire] = useState(false);
  const [isIconPorteChambreSuzy, setIsIconPorteChambreSuzy] = useState(false);
  const [isShowDialogueGamePlay, setIsShowDialogueGamePlay] = useState(false);


  const handleClick = () => {
    if (currentIndex < dialogues.length - 1) {
      setCurrentIndex(currentIndex + 1);

      if (currentIndex === 6) {
        setIsBgBack(false);
        setIsBgmPlaying(true);
        setIsProfilSuzyCinematique(true); // Faire apparaitre le profil
      }

      if (currentIndex === 5) {
        setIsPlaying(false); // Arrêter le son du réveil
        setIsBgmEteindreAlarme(true) // Mettre le son du bouton éteindre
      }

      if (currentIndex === 4) {
        setIsBgmEBougerLit(true)
      }

      if (currentIndex === 2) {
        setIsPlaying(true); // Démarrer le son du réveil
      }
      if (currentIndex === 0) {
        setIsBgBack(true); // Apparaitre bg noir
        setDisplayText(true); // Apparaitre le texte
      }
    } else {
      // Comme un : 
      // if (currentIndex === 7) {
      setIsProfilSuzyCinematique(false);
      setIsIconArmoire(true);
      setIsIconPorteChambreSuzy(true);
      setDisplayText(false);
    }
    if (currentIndex === 6) {
      setIsBgChambre(true); // Faire apparaitre le background de la chambre
    }
  };

  const handleClickInteraction = () => {
    setInteractionsIndex(interactionsIndex + 1);
  }

  const handleShowDialogueGamePlay = () => {
    const habiller = false;

    // Si les conditons ne sont pas remplies, affiche le dialogue
    if (habiller === true) {
      setIsShowDialogueGamePlay(false);
      setIsProfilSuzyPyjama(false);
      // Alors suite de l'histoire
    } else {
      setIsShowDialogueGamePlay(true);
      setIsProfilSuzyPyjama(true);
    }
    // A AJOUTER -> SINON SORTIE DE LA CHAMBRE
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setIsBgBack(true); // Apparaitre bg noir au chargement de la page
      setDisplayText(true); // Apparaitre le texte au chargement de la page
    }
  }, []); // Le tableau vide en seconde argument signifie que cet effet ne s'exécutera qu'une seule fois, au chargement initial de la page

  return (
    <div id="chapitre1">
      {/* Assure que dialogues[currentIndex] est défini avant d'essayer d'accéder à sa propriété 'nom'. */}
      {isDisplayText && dialogues[currentIndex] && dialogues[currentIndex].nom && (
        <Dialogue nom={dialogues[currentIndex].nom} onClick={handleClick}>
          {dialogues[currentIndex].texte}
        </Dialogue>
      )}


      {/* Audios */}
      {isBgmEteindreAlarme && (
        <audio src={EteintAlarme} autoPlay />
      )}

      {isBgmBougerLit && (
        <audio src={BougerLit} autoPlay />
      )}

      {isPlaying && (
        <audio src={Alarme} autoPlay loop />
      )}

      {isBgmPlaying && (
        <audio src={Bgm_Chambre_Suzy} className="Bgm_Chambre_Suzy" autoPlay loop controls />
      )}

      {/* Backgrounds */}
      {isBgChambre && (
        <div className="Bg_Chambre_Suzy"></div>
      )}
      {isBgBack && (
        <div className="Bg_Black"></div>
      )}

      {/* Profils */}
      {isProfilSuzyCinematique && (
        <div className="Suzy_Pyjama_Neutre_Cinematique"></div>
      )}

      {isProfilSuzyPyjama && (
        <div className="Suzy_Pyjama_Neutre_Gameplay"></div>
      )}

      {/* Mode de jeu */}
      {isIconArmoire && (
        <div className="Icon_Armoire">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#c00000"
              stroke="#ffffff" /* Couleur de la bordure */
              strokeWidth="30" /* Largeur de la bordure */
              d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
            />
          </svg>
        </div>
      )}
      {isIconPorteChambreSuzy && (
        <div className="Icon_Porte_Chambre_Suzy" onClick={handleShowDialogueGamePlay}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#c00000"
              stroke="#ffffff" /* Couleur de la bordure */
              strokeWidth="30" /* Largeur de la bordure */
              d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
            />
          </svg>
          {isShowDialogueGamePlay && (
            <Dialogue nom={interactions[interactionsIndex].nom} onClick={handleClickInteraction}>
              {interactions[interactionsIndex].texte}
            </Dialogue>
          )}
        </div>
      )}
    </div>
  );
};

export default ACT0;
