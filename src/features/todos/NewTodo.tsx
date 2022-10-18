import { useState } from "react";

export function NewTodo() {
  // lokaler State wie ein Formular-State sollte lokal bleiben und nicht in Redux landen
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <article>
      <h2>Neues Todo anlegen</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Neues Todo mit den Werten %o", { title, checked });
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
