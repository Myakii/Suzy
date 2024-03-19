import React from 'react';
import DialoguePersonnage from '../components/DialoguePersonnage';

const MonHistoire = () => {
  return (
    <div>
      <h1>Mon Histoire</h1>
      <DialoguePersonnage nom="Alice" dialogue="Bonjour, je suis Alice et je suis ravie de vous rencontrer !" />
      <DialoguePersonnage nom="Bob" dialogue="Salut Alice, comment vas-tu ?" />
    </div>
  );
};

export default MonHistoire;
