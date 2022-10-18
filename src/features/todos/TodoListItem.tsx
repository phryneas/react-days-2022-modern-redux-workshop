import { Todo } from "./types";

export function TodoListItem({ todo }: { todo: Todo }) {
  return (
    <article>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          aria-label="erledigt"
          onChange={(e) => {
            if (e.currentTarget.checked) {
              console.log("Todo als erledigt markiert: %s", todo.title);
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
