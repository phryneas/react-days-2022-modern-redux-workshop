import { Todo } from "./types";
import {
  createSelector,
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const todosAdapter = createEntityAdapter<Todo>();

const initialState = todosAdapter.addMany(todosAdapter.getInitialState(), [
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
    title: "Erledigte Todos ausblenden",
    completed: false,
  },
  {
    id: 9,
    title: "Bei langeweile: Todo-Text editierbar machen oder Todos löschen",
    completed: false,
  },
]);

export const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: todosAdapter.addOne,
    todoChecked(state, action: PayloadAction<number>) {
      todosAdapter.updateOne(state, {
        id: action.payload,
        changes: {
          completed: true,
        },
      });
    },
    todoRemoved: todosAdapter.removeOne,
  },
});

export const { todoAdded, todoChecked, todoRemoved } = slice.actions;

const todosSelectors = todosAdapter.getSelectors(
  (state: RootState) => state.todos
);

export const selectTodos = createSelector(
  [
    todosSelectors.selectAll,
    (state: RootState, showCompleted: boolean) => showCompleted,
  ],
  (todos, showCompleted) =>
    todos.filter((todo) => showCompleted || !todo.completed)
);

export default slice.reducer;
