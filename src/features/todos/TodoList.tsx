import { useState } from "react";
import { useGetAllTodosQuery } from "../../app/api";
import { TodoListItem } from "./TodoListItem";

export function TodoList() {
  const [filter, setFilter] = useState("");
  const result = useGetAllTodosQuery(
    filter
      ? {
          title: filter,
        }
      : undefined
  );
  if (result.isUninitialized || result.isLoading) {
    return <>loading</>;
  }
  if (result.isError) {
    return <>error</>;
  }

  return (
    <section>
      <h2>Todos</h2>
      <label>
        Filter:
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
      </label>
      <ul>
        {result.data.map((todo) => (
          <li key={todo.id}>
            <TodoListItem todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
