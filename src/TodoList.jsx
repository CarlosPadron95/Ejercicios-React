import React, { useState, useEffect } from "react";

const TodoList = () => {
  // Inicializamos el estado con una función: esto permite leer LocalStorage
  // solo una vez cuando se carga el componente.
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("mis_tareas");
    // Convertimos el texto de LocalStorage de nuevo a un objeto/arreglo de JS
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState("");

  // Este efecto se dispara cada vez que la lista 'todos' cambia
  useEffect(() => {
    // Guardamos la lista actualizada convirtiéndola a texto (JSON)
    localStorage.setItem("mis_tareas", JSON.stringify(todos));
  }, [todos]);

  // Crea una nueva tarea con un ID único basado en el tiempo actual
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue(""); // Limpiamos el input
  };

  // Cambia el estado de una tarea (completada / pendiente)
  const toggleTodo = (id) => {
    // Recorremos la lista y solo modificamos la que coincida con el ID
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Elimina de la lista todas las tareas que ya han sido marcadas como completadas
  const clearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1> Lista de Tareas con LocalStorage</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{ padding: "8px", width: "70%" }}
        />
        <button onClick={addTodo} style={{ padding: "8px", cursor: "pointer" }}>
          Añadir
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: "10px" }}
              />
              {/* Aplicamos estilos dinámicos si la tarea está completada */}
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#aaa" : "#000",
                  transition: "all 0.3s ease",
                }}
              >
                {todo.text}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Solo mostramos el botón de limpieza si hay al menos una tarea completada */}
      {todos.some((t) => t.completed) && (
        <button
          onClick={clearCompleted}
          style={{
            marginTop: "20px",
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Limpiar Completadas
        </button>
      )}
    </div>
  );
};

export default TodoList;
