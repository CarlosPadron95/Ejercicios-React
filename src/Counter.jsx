import React, { useState } from "react";

const Counter = () => {
  // Estado para llevar la cuenta de los clics, inicializado en 0
  const [count, setCount] = useState(0);

  // Función que incrementa el valor actual del contador en 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Contador de Clics</h1>

      {/* Mostramos el valor del estado 'count' en tiempo real */}
      <p style={{ fontSize: "1.5rem" }}>
        Clics: <strong>{count}</strong>
      </p>

      {/* Botón principal que dispara la función de incremento */}
      <button
        onClick={handleIncrement}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Contar clics
      </button>

      {/* Botón secundario para resetear el estado a cero directamente */}
      <button
        onClick={() => setCount(0)}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default Counter;
