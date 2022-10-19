import { useAppDispatch } from "../../app/hooks";
import { todoChecked } from "./todoSlice";
import { Todo } from "./types";

export function TodoListItem({ todo }: { todo: Todo }) {
  const dispatch = useAppDispatch();

  return (
    <article>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          aria-label="erledigt"
          onChange={(e) => {
            if (e.currentTarget.checked) {
              dispatch(todoChecked(todo.id));
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
    </article>
  );
}
