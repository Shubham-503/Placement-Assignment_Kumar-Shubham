import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect, useReducer, useState } from "react";
import { initialState, todoReducer } from "./todoReducer";

function App() {
  const [todos, setTodos] = useState([]);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const getTodos = () => {
    try {
      setTodos([...state]);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTodos();
    console.log("useEffect of app called", state);
  }, [state]);

  return (
    <div className="App bg-[#03203C] pt-4 flex items-center justify-center flex-col border-2">
      <TodoForm dispatch={dispatch} state={state} />
      <TodoList dispatch={dispatch} getTodos={getTodos} todos={state} />
    </div>
  );
}

export default App;
