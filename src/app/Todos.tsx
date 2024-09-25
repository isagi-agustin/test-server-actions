"use client";

import React, { useState, useEffect } from "react";
import { Todo, getTodoCount } from "../todos";

export default function Todos({
  todos,
  addTodo,
  todoCount,
 }: {
  todos: Todo[],
  addTodo: (title: string) => Promise<void>,
  todoCount: number,
}) {

  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">
        Todos ({todoCount})
      </h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            {todo.title}
          </li>
        ))}
      </ul>
      <form onSubmit={async (e) => {
        e.preventDefault();
        setNewTodo("");
        addTodo(newTodo);
      }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-1 text-black"
        />
        <button type="submit" className="border p-1">
          Add
        </button>
      </form>
    </>
  );
}