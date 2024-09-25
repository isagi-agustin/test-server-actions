import { getTodos, addTodo } from "../todos";
import Todos from './Todos';

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="max-w-xl mx-auto mt-5">
      <Todos todos={todos} addTodo={addTodo} />
    </main>
  );
}
