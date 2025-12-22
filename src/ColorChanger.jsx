import React, { useState, useEffect } from "react";

const ColorChanger = () => {
  // Estado para almacenar el valor del color actual en formato RGB
  const [color, setColor] = useState("rgb(255, 255, 255)");

  // Función para generar valores aleatorios entre 0 y 255 para cada canal de color
  const generarColor = () => {
    const r = () => Math.floor(Math.random() * 256);
    setColor(`rgb(${r()}, ${r()}, ${r()})`);
  };

  // useEffect para sincronizar el estado de React con el estilo del cuerpo (body) del documento
  useEffect(() => {
    // Aplicamos el color al fondo del body cada vez que el estado 'color' cambie
    document.body.style.backgroundColor = color;
    document.body.style.margin = "0";

    // Función de limpieza: Se ejecuta cuando el componente se desmonta (al salir del ejercicio)
    // Esto asegura que el fondo vuelva a ser blanco al navegar a otra parte de la app
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [color]);

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Cambiador de Color</h1>

      {/* Botón que dispara la generación del nuevo color aleatorio */}
      <button
        onClick={generarColor}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Cambiar color
      </button>

      {/* Muestra el código RGB generado actualmente */}
      <p style={{ marginTop: "20px" }}>
        Color actual: <strong>{color}</strong>
      </p>
    </div>
  );
};

export default ColorChanger;
