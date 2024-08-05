import React, { useState } from 'react';
import './App.css';

function gem() {
    const [destinos, setDestinos] = useState([
      { nome: 'Paris', descricao: 'A cidade do amor.' },
      { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
      { nome: 'Tóquio', descricao: 'A capital do Japão.' }
    ]);
  
    const adicionarDestino = (novoDestino) => {
      setDestinos([...destinos, novoDestino]);
    };
  }

const Destino = ({ nome, descricao }) => {
  return (
    <div className="destino">
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
};

export default Destino;