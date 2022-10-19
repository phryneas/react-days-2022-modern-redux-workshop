import { useUpdateTodoMutation } from "../../app/api";
import { useAppDispatch } from "../../app/hooks";
import { todoRemoved } from "./todoSlice";
import { Todo } from "./types";

export function TodoListItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();
  const [trigger, result] = useUpdateTodoMutation();

  return (
    <article>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          aria-label="erledigt"
          onChange={(e) => {
            if (e.currentTarget.checked) {
              trigger({
                id: todo.id,
                completed: true,
              });
            } else {
              console.log(
                "Todo als noch nicht erledigt markiert: %s",
                todo.title
              );
            }
          }}
        />
        {todo.title}
      </label>
      <button onClick={() => dispatch(todoRemoved(todo.id))}>delete</button>
    </article>
  );
}
