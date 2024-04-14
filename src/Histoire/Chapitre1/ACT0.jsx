import React, { useState, useEffect } from "react";

import "../../css/Chapitre1css/ACT0.css";

import Dialogue from "../../components/Dialogue";

// Assets
import Alarme from "../../Assets/Sons/alarm_clock.mp3";
import EteintAlarme from "../../Assets/Sons/light-switch.mp3";
import BougerLit from "../../Assets/Sons/sitting-on-bed-97752.mp3";

import Bgm_Chambre_Suzy from "../../Assets/Musiques/Golden_Eye.mp3";

const ACT0 = () => {
  const dialogues = [
    {
      nom: "???",
      texte:
        " Tu sais que tout ira bien, bien qu'on ne soit plus que deux, n'est-ce pas ?",
    },
    { nom: "???", texte: "..." },
    { nom: "???", texte: "Je t'aimerai toute ma vie, ma pe..." },
    { nom: " ", texte: "Bip...bip...bip" },
    { nom: "???", texte: "Hmm...Il est déjà 7h...?" },
    { nom: "???", texte: "Arg..." },
    { nom: "???", texte: "..." },
    { nom: "???", texte: "Je devrais me préparer et aller déjeuner." },
  ];

  const interactionsPorteSuzy = [
    { nom: "???", texte: " Je devrais d'abord m'habiller." },
  ];

  const interactionsArmoire = [
    {
      nom: "???",
      texte:
        "Bien, je suis prête ! C'est étrange, aujourd'hui, j'ai vraiment envie d'aller à l'école.",
    },
    {
      nom: "???",
      texte:
        "Ce n'est pas tous les jours qu'on a ce genre de sentiment. Peut-être que quelque chose de bien va se produire ?",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [interactionsIndex, setInteractionsIndex] = useState(0);
  const [interactionsIndex2, setInteractionsIndex2] = useState(0);
  const [isDisplayText, setDisplayText] = useState(false);

  // Audios
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const [isBgmEteindreAlarme, setIsBgmEteindreAlarme] = useState(false);
  const [isBgmBougerLit, setIsBgmBougerLit] = useState(false);

  // IMGS
  const [isBgChambre, setIsBgChambre] = useState(false);
  const [isBgBack, setIsBgBack] = useState(false);
  const [isProfilSuzyPyjama, setIsProfilSuzyPyjama] = useState(false);
  const [isProfilSuzyEcole, setIsProfilSuzyEcole] = useState(false);

  // IMGS PROFILS CINEMATIQUE
  const [isProfilSuzyCinematique, setIsProfilSuzyCinematique] = useState(false);

  // Mode de jeu
  const [isIconArmoire, setIsIconArmoire] = useState(false);
  const [isIconPorteChambreSuzy, setIsIconPorteChambreSuzy] = useState(false);
  const [isShowDialogueArmoire, setIsShowDialogueArmoire] = useState(false);
  const [isShowDialoguePorte, setIsShowDialoguePorte] = useState(false);

  const [isBgBackNonCinematique, setIsBgBlackNonCinematique] = useState(false);

  // TEMPS
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const habiller = false;

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
        setIsBgmEteindreAlarme(true); // Mettre le son du bouton éteindre
      }

      if (currentIndex === 4) {
        setIsBgmBougerLit(true);
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
    setIsBgChambre(true);
  };

  const handleClickInteraction2 = () => {
    setInteractionsIndex2(interactionsIndex2 + 1);
    setIsBgChambre(true);
  };

  const handleClickIconPorte = async () => {
    // Si les conditons ne sont pas remplies, affiche le dialogue Porte Chambre de Suzy
    habiller = await handleClickIconArmoire(habiller);
    if (habiller === true) {
      setIsShowDialogueArmoire(false);
      setIsProfilSuzyPyjama(false);
      setIsBgBack(true);
      // A AJOUTER -> SINON SORTIE DE LA CHAMBRE
    } else {
      setIsShowDialoguePorte(true);
      setIsProfilSuzyPyjama(true);
    }
  };

  const handleClickIconArmoire = async (habiller) => {
    habiller = true;
    setIsBgChambre(false);
    setIsIconArmoire(false);
    setIsIconPorteChambreSuzy(false);
    setIsBgBlackNonCinematique(true);
    setIsBgmBougerLit(true);
    await delay(2000);
    setIsBgBlackNonCinematique(false);
    setIsBgChambre(true);
    setIsShowDialogueArmoire(true);
    setIsProfilSuzyEcole(true);
    return habiller;
  };

  // Après avoir défini le statut du dialogue, vérifie si c'est le dernier dialogue armoire
  useEffect(() => {
    if (
      isShowDialogueArmoire &&
      interactionsIndex2 === interactionsArmoire.length - 1
    ) {
      setIsShowDialogueArmoire(false);
      setIsProfilSuzyEcole(false);
      setIsIconPorteChambreSuzy(true);
    }
  }, [isShowDialogueArmoire, interactionsIndex2, interactionsArmoire.length]);

  // Après avoir défini le statut du dialogue, vérifie si c'est le dernier dialogue porte
  useEffect(() => {
    if (
      isShowDialoguePorte &&
      interactionsIndex === interactionsPorteSuzy.length - 1
    ) {
      setIsShowDialoguePorte(true);
      setIsProfilSuzyPyjama(true);
      setIsIconPorteChambreSuzy(false);
    }
  }, [isShowDialoguePorte, interactionsIndex, interactionsPorteSuzy.length]);

  // Fait apparaitre immédiatement les éléments dès le chargement
  useEffect(() => {
    if (currentIndex === 0) {
      setIsBgBack(true); // Apparaitre bg noir au chargement de la page
      setDisplayText(true); // Apparaitre le texte au chargement de la page
    }
  }, []); // Le tableau vide en seconde argument signifie que cet effet ne s'exécutera qu'une seule fois, au chargement initial de la page

  return (
    <div id="chapitre1">
      {/* CINEMATIQUE 1 */}
      {/* Assure que dialogues[currentIndex] est défini avant d'essayer d'accéder à sa propriété 'nom'. */}
      {isDisplayText && (
        <Dialogue nom={dialogues[currentIndex].nom} onClick={handleClick}>
          {dialogues[currentIndex].texte}
        </Dialogue>
      )}

      {/* Audios */}
      {isBgmEteindreAlarme && <audio src={EteintAlarme} autoPlay />}

      {isBgmBougerLit && <audio src={BougerLit} autoPlay />}

      {isPlaying && <audio src={Alarme} autoPlay loop />}

      {isBgmPlaying && (
        <audio
          src={Bgm_Chambre_Suzy}
          className="Bgm_Chambre_Suzy"
          autoPlay
          loop
          controls
        />
      )}

      {/* Backgrounds */}
      {isBgChambre && <div className="Bg_Chambre_Suzy"></div>}
      {isBgBack && <div className="Bg_Black"></div>}

      {/* Profils */}
      {isProfilSuzyCinematique && (
        <div className="Suzy_Pyjama_Neutre_Cinematique"></div>
      )}

      {isProfilSuzyPyjama && (
        <div className="Suzy_Pyjama_Neutre_Gameplay"></div>
      )}

      {/* FIN CINEMATIQUE 1 */}

      {/* Mode de jeu - ARMOIRE */}
      {isIconArmoire && (
        <div className="Icon_Armoire" onClick={handleClickIconArmoire}>
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

      {isBgBackNonCinematique && (
        <div className="Bg_Black_Non_Cinematique">
          <audio src={BougerLit} autoPlay />
        </div>
      )}

      {isShowDialogueArmoire && (
        <Dialogue
          nom={interactionsArmoire[interactionsIndex2].nom}
          onClick={handleClickInteraction2}
        >
          {interactionsArmoire[interactionsIndex2].texte}
        </Dialogue>
      )}

      {isProfilSuzyEcole && <div className="Suzy_Ecole_Neutre"></div>}
      {/* FIN Mode de jeu - ARMOIRE */}

      {/* Mode de jeu - PORTE */}
      {isIconPorteChambreSuzy && (
        <div
          className="Icon_Porte_Chambre_Suzy"
          onClick={handleClickIconPorte}
        >
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
      {isShowDialoguePorte && (
        <Dialogue nom={interactionsPorteSuzy[interactionsIndex].nom} onClick={handleClickInteraction}>
          {interactionsPorteSuzy[interactionsIndex].texte}
        </Dialogue>
      )}
      {isBgBack && <div className="BgBlack"></div>}
    </div>
  )
}
export default ACT0
