import { promises as fs } from 'fs';

export interface Todo {
  completed: boolean;
}

export async function getTodos(): Promise<Todo[]> {
  const file = await fs.readFile("todos.json", "utf8");
  return JSON.parse(file.toString()) as Todo[];
}

export async function addTodo(title: string) {
  const todos = await getTodos();
  const newTodo = {
    id: Math.random().toString(36).substring(7),
    title,
    completed: false,
  };
  todos.push(newTodo);
  await fs.writeFile("todos.json", JSON.stringify(todos, null, 2));
}