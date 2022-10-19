import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          something: "hi",
        },
      },
    });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
