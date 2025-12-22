import React, { useState } from "react";
// Importamos todos los componentes de los ejercicios
import ColorChanger from "./ColorChanger";
import Counter from "./Counter";
import DynamicList from "./DynamicList";
import RealTimeFilter from "./RealTimeFilter";
import Calculator from "./Calculator";
import Timer from "./Timer";
import PasswordGenerator from "./PasswordGenerator";
import WordCounter from "./WordCounter";
import TodoList from "./TodoList";

function App() {
  // Este estado controla qué ejercicio se ve en pantalla. Por defecto empieza en "home".
  const [view, setView] = useState("home");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {/* SECCIÓN DEL MENÚ: Solo aparece si estamos en "home" */}
      {view === "home" && (
        <div style={{ paddingTop: "50px" }}>
          <h1>Mis Ejercicios React</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            {/* Al hacer clic en cada botón, cambiamos el valor de 'view' por el nombre del ejercicio */}
            <button onClick={() => setView("ejercicio1")} style={btnStyle}>
              1. Cambiador de Color
            </button>

            <button onClick={() => setView("ejercicio2")} style={btnStyle}>
              2. Contador de Clics
            </button>

            <button onClick={() => setView("ejercicio3")} style={btnStyle}>
              3. Lista Dinámica
            </button>

            <button onClick={() => setView("ejercicio4")} style={btnStyle}>
              4. Filtro de Búsqueda en Tiempo Real
            </button>

            <button onClick={() => setView("ejercicio5")} style={btnStyle}>
              5. Calculadora Sencilla
            </button>

            <button onClick={() => setView("ejercicio6")} style={btnStyle}>
              6. Temporizador con Inicio, Pausa y Reinicio
            </button>

            <button onClick={() => setView("ejercicio7")} style={btnStyle}>
              7. Generador de contraseñas aleatorias
            </button>

            <button onClick={() => setView("ejercicio8")} style={btnStyle}>
              8. Contador de Palabras y Caracteres
            </button>

            <button onClick={() => setView("ejercicio9")} style={btnStyle}>
              9. Lista de Tareas con LocalStorage
            </button>
          </div>
        </div>
      )}

      {/* SECCIÓN DE CONTENIDO: Aparece cuando seleccionamos cualquier ejercicio */}
      {view !== "home" && (
        <div style={{ paddingTop: "20px" }}>
          {/* Botón para resetear la vista y volver al listado principal */}
          <button
            onClick={() => setView("home")}
            style={{
              marginBottom: "30px",
              padding: "5px 15px",
              cursor: "pointer",
            }}
          >
            ⬅ Volver al Índice
          </button>

          {/* Aquí React decide qué componente cargar dependiendo de la opción elegida en el menú */}
          {view === "ejercicio1" && <ColorChanger />}
          {view === "ejercicio2" && <Counter />}
          {view === "ejercicio3" && <DynamicList />}
          {view === "ejercicio4" && <RealTimeFilter />}
          {view === "ejercicio5" && <Calculator />}
          {view === "ejercicio6" && <Timer />}
          {view === "ejercicio7" && <PasswordGenerator />}
          {view === "ejercicio8" && <WordCounter />}
          {view === "ejercicio9" && <TodoList />}
        </div>
      )}
    </div>
  );
}

// Estilo sencillo para no repetir código en los botones del menú
const btnStyle = {
  padding: "10px 20px",
  cursor: "pointer",
  width: "250px",
};

export default App;
