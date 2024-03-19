import React, { useState, useEffect } from 'react';
import '../css/DialoguePersonnage.css';

const DialoguePersonnage = ({ nom, dialogue }) => {
  const [affichageDialogue, setAffichageDialogue] = useState('');
  let intervalID; 

  useEffect(() => {
    const afficherDialogueLentement = () => {
      const motsDialogue = dialogue.split(' ');
      let texteTemporaire = '';
      let indexMot = 0;

      intervalID = setInterval(() => { 
        if (indexMot < motsDialogue.length) {
          texteTemporaire += motsDialogue[indexMot] + ' ';
          setAffichageDialogue(texteTemporaire);
          indexMot++;
        } else {
          clearInterval(intervalID);
        }
      }, 100);
    };

    afficherDialogueLentement();

    // Nettoyage de l'interval lors du démontage du composant
    return () => clearInterval(intervalID);
  }, [dialogue]);

  return (
    <div className="dialogue-container">
      <h3>{nom}</h3>
      <p>{affichageDialogue}</p>
    </div>
  );
};

export default DialoguePersonnage;
