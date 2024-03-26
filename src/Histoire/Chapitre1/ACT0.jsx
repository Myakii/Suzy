import React, { useState } from "react";
import "../../css/Chapitre1css/ACT0.css";
import Dialogue from "../../components/Dialogue";

const ACT0 = () => {
  const dialogues1 = [
    { nom: "???", texte: "Je reviens. Ne bouge surtout pas d'ici, ok ?"},
    { nom: "???", texte: "..."}
  ];

  const [index, setIndex] = useState(0);

  // Gestionnaire d'événements pour passer au prochain dialogue
  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % dialogues1.length);
  };

  return (
    <div id="chapitre1">
      <Dialogue nom={dialogues1[index].nom} onClick={handleClick}>
        {dialogues1[index].texte}
      </Dialogue>
    </div>
  );
};

export default ACT0;
