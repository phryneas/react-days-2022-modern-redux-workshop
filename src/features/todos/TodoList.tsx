import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { TodoListItem } from "./TodoListItem";
import { selectTodos } from "./todoSlice";

export function TodoList() {
  const [showCompleted, setShowCompleted] = useState(true);
  const todos = useAppSelector((state) => selectTodos(state, showCompleted));

  return (
    <section>
      <h2>Todos</h2>
      <label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => setShowCompleted(e.currentTarget.checked)}
        />
        Show unselected
      </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoListItem todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
