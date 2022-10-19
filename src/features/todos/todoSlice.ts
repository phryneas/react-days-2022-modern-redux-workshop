import { Todo } from "./types";
import {
  createSelector,
  createSlice,
  PayloadAction,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const todosAdapter = createEntityAdapter<Todo>();

const initialState = todosAdapter.getInitialState({
  status: "uninitialized" as
    | "uninitialized"
    | "pending"
    | "fulfilled"
    | "error",
  error: undefined as unknown,
});

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
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "fulfilled";
        todosAdapter.addMany(state, action.payload);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      });
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

export const fetchTodos = createAsyncThunk(
  "todos/fetch",
  async ({ page }: { page: number }, thunkApi) => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/todos?page=${page}`,
      { signal: thunkApi.signal }
    );
    const data: Todo[] = await result.json();
    return data;
  }
);

export default slice.reducer;
