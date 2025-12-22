import React, { useState } from "react";

const Calculator = () => {
  // Estados para capturar los números de los inputs y mostrar el resultado o errores
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Función principal que maneja todas las operaciones matemáticas
  const calculate = (operation) => {
    // Reseteamos el error y el resultado anterior antes de calcular de nuevo
    setError("");
    setResult(null);

    // Convertimos los textos de los inputs a números reales para poder operar
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Validación: si alguno de los campos no es un número válido, mostramos error
    if (isNaN(n1) || isNaN(n2)) {
      setError("Por favor, introduce dos números válidos.");
      return; // Salimos de la función para no seguir ejecutando el código
    }

    // Estructura para decidir qué operación realizar según el botón pulsado
    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "subtract":
        setResult(n1 - n2);
        break;
      case "multiply":
        setResult(n1 * n2);
        break;
      case "divide":
        // Validación especial para evitar el error matemático de dividir por 0
        if (n2 === 0) {
          setError("No se puede dividir por cero.");
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h1>Calculadora Sencilla</h1>

      {/* Contenedor de inputs: Usamos el evento onChange para guardar lo que escribe el usuario */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ padding: "10px", fontSize: "1rem" }}
        />
      </div>

      {/* Botonera: Cada botón envía un texto diferente a la función calculate */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => calculate("add")} style={btnStyle}>
          Sumar
        </button>
        <button onClick={() => calculate("subtract")} style={btnStyle}>
          Restar
        </button>
        <button onClick={() => calculate("multiply")} style={btnStyle}>
          Multiplicar
        </button>
        <button onClick={() => calculate("divide")} style={btnStyle}>
          Dividir
        </button>
      </div>

      {/* Sección de resultados: Solo se muestran si existe un error o un resultado */}
      <div style={{ marginTop: "30px" }}>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

        {result !== null && (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#eef",
              borderRadius: "8px",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>
              Resultado: <strong>{result}</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Objeto de estilos para reutilizar en todos los botones
const btnStyle = {
  padding: "10px 15px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "0.9rem",
};

export default Calculator;
