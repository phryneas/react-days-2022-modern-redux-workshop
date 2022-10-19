import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TodoListItem } from "./TodoListItem";
import { fetchTodos, selectTodos } from "./todoSlice";

export function TodoList() {
  const [showCompleted, setShowCompleted] = useState(true);
  const todos = useAppSelector((state) => selectTodos(state, showCompleted));
  const dispatch = useAppDispatch();

  useEffect(() => {
    const runningThunk = dispatch(fetchTodos({ page: 1 }));
    return () => runningThunk.abort();
  }, [dispatch]);

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
