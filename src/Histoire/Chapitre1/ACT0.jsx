import React, { useState } from "react";

import "../../css/Chapitre1css/ACT0.css";
import Dialogue from "../../components/Dialogue";
import Alarme from "../../Assets/Sons/alarm_clock.mp3";

const ACT0 = () => {
  const dialogues1 = [
    {
      nom: "???",
      texte:
        " Tu sais que tout ira bien, bien qu'on ne soit plus que deux, n'est-ce pas ?",
    },
    { nom: "???", texte: "..." },
    { nom: "???", texte: "Je t'aimerai toute ma vie, ma pe..." },
  ];
  const dialogues2 = [
    { nom: " ", texte: "Bip...bip...bip" },
    { nom: "???", texte: "Il est déjà 7h...?" },
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick1 = () => {
    if (index1 < dialogues1.length - 1) {
      setIndex1((prevIndex) => prevIndex + 1);
      setIsPlaying(true);
    } else {
      // Passer au premier dialogue du deuxième ensemble une fois que tous les dialogues du premier ensemble ont été affichés
      setIndex2(0);
    }
  };

  const handleClick2 = () => {
    if (index2 < dialogues2.length - 1) {
      setIndex2((prevIndex) => prevIndex + 1);
      setIsPlaying(true);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div id="chapitre1">
      {index1 < dialogues1.length && (
        <Dialogue nom={dialogues1[index1].nom} onClick={handleClick1}>
          {dialogues1[index1].texte}
        </Dialogue>
      )}
      {index1 === dialogues1.length - 1 && (
        <>
          <Dialogue nom={dialogues2[index2].nom} onClick={handleClick2}>
            {dialogues2[index2].texte}
          </Dialogue>
          {isPlaying && (
            <audio src={Alarme} autoPlay onEnded={handleAudioEnd} />
          )}
        </>
      )}
    </div>
  );
};

export default ACT0;
