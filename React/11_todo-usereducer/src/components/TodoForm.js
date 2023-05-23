import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "../todoReducer";

const TodoForm = ({ dispatch, state }) => {
  const [title, setTitle] = useState("");
  // const [state, dispatch] = useReducer(todoReducer,initialState)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: title });
    console.log(title, state);
    // createTodo(title)
    setTitle("");
  };

  return (
    <div className="todoForm">
      <div className="flex  md:w-screen w-full items-center justify-center p-5">
        <form
          className="w-full rounded-lg bg-gray-200 p-5 md:w-2/4 w-1/1"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex">
            <input
              type="text"
              className="w-full bg-white pl-2 text-base font-semibold outline-0 rounded-tl-lg rounded-bl-lg "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder=""
              id=""
            />
            <input
              type="submit"
              value="Add Todo"
              className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
