import React, { useState } from 'react';

const CalcularAreaRectangulo = () => {
  // Estado para la base y altura
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  // Función para calcular el área
  const calcularArea = () => {
    if (base && altura) {
      const resultado = parseFloat(base) * parseFloat(altura);
      setArea(resultado);
    }
  };

  return (
    <div>
      <h1>Cálculo del área de un rectángulo</h1>
      <div>
        <label>Base:</label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
      </div>
      <div>
        <label>Altura:</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <button onClick={calcularArea}>Calcular Área</button>

      {area !== null && (
        <div>
          <h2>Área del Rectángulo: {area} unidades²</h2>
        </div>
      )}
    </div>
  );
};

export default CalcularAreaRectangulo;
