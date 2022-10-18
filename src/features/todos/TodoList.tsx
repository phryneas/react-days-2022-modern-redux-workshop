import { TodoListItem } from "./TodoListItem";
import { Todo } from "./types";

export function TodoList() {
  const fakeData: Todo[] = [
    {
      id: 0,
      title: "Store in `app.store.ts` anlegen",
      done: false,
    },
    {
      id: 1,
      title: "Für TypeScript-Nutzer: hooks in app/hooks.ts anlegen",
      done: false,
    },
    {
      id: 2,
      title: "Store in der `index.tsx` per `Provider` verdrahten",
      done: false,
    },
    {
      id: 3,
      title: "Slice in features/todos/todoSlice.ts anlegen",
      done: false,
    },
    { id: 4, title: "Slice im store registrieren", done: false },
    {
      id: 5,
      title: "TodoList: Daten mittels `useAppSelector` aus dem Store holen",
      done: false,
    },
    {
      id: 6,
      title:
        "NewTodo: Formular mit einem Action-dispatch (Action creator aus dem Slice importiert, dispatch aus `useAppDispatch`) absenden",
      done: false,
    },
    {
      id: 7,
      title: "Todo: Todos unchecken und checken mittels Action-dispatch",
      done: false,
    },
    {
      id: 8,
      title: "Bei langeweile: Todo-Text editierbar machen oder Todos löschen",
      done: false,
    },
  ];

  return (
    <section>
      <h2>Todos</h2>
      <ul>
        {fakeData.map((todo) => (
          <li key={todo.id}>
            <TodoListItem todo={todo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
