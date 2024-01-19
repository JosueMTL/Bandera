import React, { useState } from 'react';
import './App.css';

interface FranjaProps {
  color: string;
  onClick: () => void;
}

const Franja = ({ color, onClick }: FranjaProps) => {
  return (
    <div className="franja" style={{ backgroundColor: color }} onClick={onClick} />
  );
};

const App: React.FC = () => {
  const [colores, setColores] = useState<string[]>(['yellow', 'blue', 'red']);
  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleClick = (color: string) => {
    setMensaje(`Color: ${color} - Ecuador`);
  };

  return (
    <div className="bandera">
      <div className="mensaje">{mensaje}</div>
      <div className="franjas-container">
        {colores.map((color, index) => (
          <Franja key={index} color={color} onClick={() => handleClick(color)} />
        ))}
      </div>
    </div>
  );
};

export default App;
