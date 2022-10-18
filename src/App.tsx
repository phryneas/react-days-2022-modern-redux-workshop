import { useState } from "react";
import { NewTodo } from "./features/todos/NewTodo";
import { TodoList } from "./features/todos/TodoList";

function App() {
  const [selectedTab, setSelectedTab] = useState<"listTodos" | "newTodo">(
    "listTodos"
  );
  return (
    <div>
      <header>
        <h1>Soon-to-be Redux Todo App</h1>
      </header>
      <nav>
        <button onClick={() => setSelectedTab("listTodos")}>Todos</button>
        <button onClick={() => setSelectedTab("newTodo")}>neues Todo</button>
      </nav>
      {selectedTab === "listTodos" ? <TodoList /> : null}
      {selectedTab === "newTodo" ? <NewTodo /> : null}
    </div>
  );
}

export default App;
