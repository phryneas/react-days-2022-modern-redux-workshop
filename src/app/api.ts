import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "../features/todos/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["todo"],
  endpoints(build) {
    return {
      getAllTodos: build.query<Todo[], Partial<Todo> | void>({
        query(filter = {}) {
          // return "todos/";
          return {
            url: "todos/",
            params: filter || undefined,
          };
        },
        providesTags: (result, error) =>
          result
            ? result.map((todo) => ({ type: "todo" as const, id: todo.id }))
            : [],
      }),
      updateTodo: build.mutation<unknown, Partial<Todo> & { id: number }>({
        query(arg) {
          return {
            url: `todos/${arg.id}`,
            method: "PATCH",
            body: {
              arg,
            },
          };
        },
        invalidatesTags: (result, error, arg) => [
          {
            type: "todo" as const,
            id: arg.id,
          },
        ],
      }),
    };
  },
});

export const { useGetAllTodosQuery, useUpdateTodoMutation } = api;
