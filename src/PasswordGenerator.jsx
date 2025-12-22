import React, { useState } from "react";

const PasswordGenerator = () => {
  // Estados para manejar la configuración de la contraseña y la salida de datos
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Función que contiene la lógica de generación aleatoria
  const generatePassword = () => {
    // Limpiamos mensajes anteriores cada vez que intentamos generar una nueva
    setError("");

    // Validación básica: evitamos contraseñas demasiado cortas para mayor seguridad
    if (!length || length < 4) {
      setError("La longitud debe ser mayor o igual a 4.");
      setPassword("");
      return;
    }

    // Definimos el conjunto de caracteres permitidos (letras, números y símbolos)
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let generatedPassword = "";

    // Bucle que selecciona un carácter aleatorio del charset tantas veces como indique 'length'
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }

    // Actualizamos el estado con la cadena final construida
    setPassword(generatedPassword);
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
      <h1>Generador de Contraseñas</h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Longitud de la contraseña:
        </label>
        {/* Input numérico vinculado al estado 'length' */}
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{ padding: "8px", width: "60px", textAlign: "center" }}
        />
      </div>

      <button
        onClick={generatePassword}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Generar contraseña
      </button>

      <div style={{ marginTop: "20px" }}>
        {/* Renderizado condicional del mensaje de error */}
        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

        {/* Bloque de visualización: solo aparece si ya se ha generado una contraseña */}
        {password && (
          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              border: "1px solid #999",
            }}
          >
            {/* Usamos 'monospace' para que la contraseña sea más fácil de leer letra por letra */}
            <span
              style={{
                fontSize: "1.2rem",
                fontFamily: "monospace",
                wordBreak: "break-all",
              }}
            >
              {password}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
