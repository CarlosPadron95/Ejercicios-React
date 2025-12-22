import React, { useState } from "react";

const RealTimeFilter = () => {
  // Datos estáticos que servirán como base para la búsqueda
  const initialList = [
    "Perro",
    "Gato",
    "Pez",
    "Tortuga",
    "Caballo",
    "Conejo",
    "Gallina",
    "León",
  ];

  // Estado para guardar lo que el usuario escribe en el buscador
  const [searchTerm, setSearchTerm] = useState("");

  // LÓGICA DE FILTRADO: Se ejecuta automáticamente en cada renderizado.
  // Filtramos la lista original basándonos en el término de búsqueda,
  // pasando todo a minúsculas para que la búsqueda no sea sensible a mayúsculas.
  const filteredList = initialList.filter((animal) =>
    animal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h1>Filtro en Tiempo Real</h1>

      <div style={{ marginBottom: "20px" }}>
        {/* Input controlado que actualiza 'searchTerm' en cada pulsación de tecla */}
        <input
          type="text"
          placeholder="Buscar animal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Renderizado de la lista filtrada */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* Validación: Si no hay resultados, mostramos un mensaje amistoso */}
        {filteredList.length === 0 ? (
          <p style={{ color: "gray" }}>No se encontraron coincidencias.</p>
        ) : (
          // Si hay resultados, recorremos el nuevo arreglo filtrado
          filteredList.map((animal, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
                backgroundColor: "#fff",
              }}
            >
              {animal}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RealTimeFilter;
