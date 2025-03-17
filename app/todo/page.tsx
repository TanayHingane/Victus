"use client";
import { useState, useEffect } from "react";

interface Todo {
  name: string;
  status: "pending" | "completed";
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todo-list") || "[]")
  );
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);

  const addOrEditTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && task.trim()) {
      if (editId !== null) {
        const updatedTodos = todos.map((t, i) =>
          i === editId ? { ...t, name: task } : t
        );
        setTodos(updatedTodos);
        setEditId(null);
      } else {
        setTodos([...todos, { name: task, status: "pending" }]);
      }
      setTask("");
    }
  };

  const updateStatus = (index: number) => {
    const updatedTodos = todos.map((t, i) =>
      i === index
        ? { ...t, status: t.status === "pending" ? "completed" : "pending" }
        : t
    );
    setTodos(updatedTodos);
  };

  const deleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          className="border p-2 w-full rounded"
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={addOrEditTask}
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          {["all", "pending", "completed"].map((f) => (
            <button
              key={f}
              className={`px-2 py-1 ${filter === f ? "font-bold" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
      <ul>
        {todos
          .filter((t) => filter === "all" || t.status === filter)
          .map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.status === "completed"}
                  onChange={() => updateStatus(index)}
                />
                <span
                  className={todo.status === "completed" ? "line-through" : ""}
                >
                  {todo.name}
                </span>
              </label>
              <div className="space-x-2">
                <button
                  className="text-blue-500"
                  onClick={() => setEditId(index) || setTask(todo.name)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
