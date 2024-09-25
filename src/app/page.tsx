import { getTodos } from "./todos";

export default async function Home() {
  const todos = await getTodos();

  return <main className="p-5">{JSON.stringify(todos)}</main>;
}
