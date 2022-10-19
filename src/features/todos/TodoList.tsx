import { TodoListItem } from "./TodoListItem";
import { Todo } from "./types";

export function TodoList() {
  const fakeData: Todo[] = [
    {
      id: 0,
      title: "Store in `app.store.ts` anlegen",
      completed: false,
    },
    {
      id: 1,
      title: "Für TypeScript-Nutzer: hooks in app/hooks.ts anlegen",
      completed: false,
    },
    {
      id: 2,
      title: "Store in der `index.tsx` per `Provider` verdrahten",
      completed: false,
    },
    {
      id: 3,
      title: "Slice in features/todos/todoSlice.ts anlegen",
      completed: false,
    },
    { id: 4, title: "Slice im store registrieren", completed: false },
    {
      id: 5,
      title: "TodoList: Daten mittels `useAppSelector` aus dem Store holen",
      completed: false,
    },
    {
      id: 6,
      title:
        "NewTodo: Formular mit einem Action-dispatch (Action creator aus dem Slice importiert, dispatch aus `useAppDispatch`) absenden",
      completed: false,
    },
    {
      id: 7,
      title: "Todo: Todos unchecken und checken mittels Action-dispatch",
      completed: false,
    },
    {
      id: 8,
      title: "Bei langeweile: Todo-Text editierbar machen oder Todos löschen",
      completed: false,
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
