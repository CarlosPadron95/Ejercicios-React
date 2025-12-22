import React, { useState } from "react";

const DynamicList = () => {
  // Estado para almacenar la lista de elementos (un arreglo vacío al inicio)
  const [items, setItems] = useState([]);

  // Estado para controlar el texto que el usuario escribe en el input
  const [inputValue, setInputValue] = useState("");

  // Función para añadir un nuevo elemento a la lista
  const addItem = () => {
    // Validamos que el input no esté vacío o solo contenga espacios
    if (inputValue.trim() !== "") {
      // Usamos el operador spread (...) para crear una copia de la lista y añadir el nuevo item
      setItems([...items, inputValue]);

      // Limpiamos el campo de texto después de agregar
      setInputValue("");
    }
  };

  // Función para eliminar un elemento basado en su posición (index)
  const deleteItem = (indexToDelete) => {
    // Filtramos el arreglo para excluir el elemento que coincida con el índice recibido
    const newItems = items.filter((_, index) => index !== indexToDelete);
    setItems(newItems);
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
      <h1>Lista Dinámica</h1>

      <div style={{ marginBottom: "20px" }}>
        {/* Input controlado: su valor depende del estado 'inputValue' */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: "8px", marginRight: "5px" }}
          placeholder="Escribe algo..."
        />
        <button
          onClick={addItem}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
            border: "0",
          }}
        >
          Agregar
        </button>
      </div>

      {/* Renderizado de la lista: recorremos el arreglo 'items' para generar los elementos <li> */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index} // 'key' es necesaria para que React identifique cada elemento de la lista
            style={{
              backgroundColor: "#f4f4f4",
              margin: "10px 0",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "4px",
            }}
          >
            {item}
            <button
              onClick={() => deleteItem(index)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
