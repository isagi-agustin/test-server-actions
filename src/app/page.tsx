import { getTodos, addTodo, getTodoCount } from "../todos";
import Todos from './Todos';

export default async function Home() {
  const todos = await getTodos();
  const todoCount = await getTodoCount();

  return (
    <main className="max-w-xl mx-auto mt-5">
      <Todos todos={todos} addTodo={addTodo} todoCount={todoCount} />
    </main>
  );
}
