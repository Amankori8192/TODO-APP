import { AppName } from "./Components/AppName/AppName";
import { AddTodo } from "./Components/AddTodo/AddTodo";
import { TodoItems } from "./Components/TodoItems/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "02/07/2025",
    },
    {
      name: "Go to College",
      dueDate: "02/07/2025",
    },
    {
      name: "Go to Gym",
      dueDate: "02/07/2025",
    },
    {
      name: "Buy Groceries",
      dueDate: "02/07/2025",
    },
    {
      name: "Complete Assignment",
      dueDate: "02/07/2025",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
