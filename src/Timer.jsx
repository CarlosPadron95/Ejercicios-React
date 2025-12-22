import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  // Estado para almacenar el tiempo total transcurrido en segundos
  const [seconds, setSeconds] = useState(0);
  // Estado para controlar si el temporizador está corriendo o pausado
  const [isActive, setIsActive] = useState(false);

  // useRef nos permite guardar la referencia del intervalo sin provocar nuevos renderizados.
  // Es como una "caja" donde guardamos el ID del cronómetro para poder pararlo luego.
  const timerRef = useRef(null);

  // useEffect se encarga de encender o apagar el intervalo cada vez que 'isActive' cambie
  useEffect(() => {
    if (isActive) {
      // Iniciamos el intervalo: cada 1000ms (1 segundo) sumamos uno al estado
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      // Si pausamos, limpiamos el intervalo usando la referencia guardada
      clearInterval(timerRef.current);
    }

    // Función de limpieza: evita que el cronómetro siga corriendo si salimos del componente
    return () => clearInterval(timerRef.current);
  }, [isActive]);

  // Función para convertir los segundos totales en formato HH:MM:SS
  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // padStart(2, "0") asegura que siempre veamos dos dígitos (ej: "05" en lugar de "5")
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Función para detener el cronómetro y volver el contador a cero
  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Temporizador</h1>

      {/* Pantalla del tiempo con tipografía monoespaciada para que no "baile" al cambiar números */}
      <div
        style={{ fontSize: "3rem", margin: "20px 0", fontFamily: "monospace" }}
      >
        {formatTime()}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {/* Renderizado condicional: mostramos 'Iniciar' o 'Pausar' según el estado */}
        {!isActive ? (
          <button onClick={() => setIsActive(true)} style={startBtn}>
            Iniciar
          </button>
        ) : (
          <button onClick={() => setIsActive(false)} style={pauseBtn}>
            Pausar
          </button>
        )}

        <button onClick={handleReset} style={resetBtn}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

// Configuración de estilos para los botones de control
const startBtn = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
};
const pauseBtn = {
  padding: "10px 20px",
  backgroundColor: "#ffc107",
  color: "black",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
};
const resetBtn = {
  padding: "10px 20px",
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
};

export default Timer;
