import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { todoAdded } from "./todoSlice";

export function NewTodo() {
  // lokaler State wie ein Formular-State sollte lokal bleiben und nicht in Redux landen
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <article>
      <h2>Neues Todo anlegen</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            todoAdded({
              title,
              completed: checked,
            })
          );
        }}
      >
        <label>
          Titel:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </label>
        <label>
          Erledigt:
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.currentTarget.checked)}
          />
        </label>
        <button>Hinzufügen</button>
      </form>
    </article>
  );
}
