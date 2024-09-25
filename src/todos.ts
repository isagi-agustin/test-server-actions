import { promises as fs } from 'fs';
import { unstable_cache, revalidateTag } from 'next/cache';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

async function getTodosFromFile(): Promise<Todo[]> {
  const file = await fs.readFile("todos.json", "utf8");
  return JSON.parse(file.toString()) as Todo[];
}

export async function addTodo(title: string) {
  "use server";
  const todos = await getTodos();
  const newTodo = {
    id: Math.random().toString(36).substring(7),
    title,
    completed: false,
  };
  todos.push(newTodo);
  await fs.writeFile("todos.json", JSON.stringify(todos, null, 2));
  revalidateTag("todos");
}

export const getTodos = unstable_cache(
  getTodosFromFile,
  ["todo-list"],
  {
    tags: ["todos"]
  }
);