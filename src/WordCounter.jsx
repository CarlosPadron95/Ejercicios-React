import React, { useState } from "react";

const WordCounter = () => {
  // Estado para capturar el texto ingresado en el área de escritura
  const [text, setText] = useState("");

  // Cálculo de caracteres: Usamos una expresión regular para eliminar espacios
  // y contar solo letras, números y símbolos.
  const charCount = text.replace(/\s+/g, "").length;

  // Cálculo de palabras:
  // 1. trim() elimina espacios al inicio y final.
  // 2. split(/\s+/) divide el texto cada vez que encuentra uno o más espacios.
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h1>Contador de Palabras y Caracteres</h1>

      {/* Área de texto controlada por el estado 'text' */}
      <textarea
        placeholder="Escribe aquí..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "2px solid black",
          fontFamily: "inherit",
        }}
      />

      {/* Panel de resultados: muestra las métricas calculadas en tiempo real */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "20px",
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid black",
        }}
      >
        <div>
          <span
            style={{ display: "block", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            {charCount}
          </span>
          <small>Caracteres (sin espacios)</small>
        </div>

        <div>
          <span
            style={{ display: "block", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            {wordCount}
          </span>
          <small>Palabras</small>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
