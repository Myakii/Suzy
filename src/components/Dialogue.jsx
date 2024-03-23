import React from 'react';
import './Dialogue.css';

export default function Dialogue({ nom, children }) {
  return (
    <div id='Dialogue'>
      <div className='Background'>
        <div className='CadreDialogue'>
          <img src='' className='Profil' alt='Profile'></img>
          <h4 className='Nom'>{nom}</h4>
          <p className='Dialogue'>{children}</p>
        </div>
      </div>
    </div>
  );
}
