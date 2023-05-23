import React, { useEffect, useReducer } from "react";

const TodoList = ({ getTodos, todos, dispatch }) => {
  useEffect(() => {
    getTodos();
  }, []);

  const handledeleteTodo = (id) => {
    console.log("id for del is: ", id);
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div className="todoList flex flex-wrap  justify-around m-4 p-4 w-full">
      {console.log(">>>>", todos)}

      {todos &&
        todos.map((todo, idx) => {
          return (
            <div
              className="antialiased   text-slate-700  md:w-1/2 w-full"
              key={todo.id}
            >
              <div className="max-w-lg mx-4 my-10 bg-white p-4 rounded-xl shadow shadow-slate-300">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h1 className="text-xl font-medium">{todo.text}</h1>
                  </div>
                  <div className="inline-flex space-x-2 items-center ml-12">
                    <button className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500">
                      <i className="fa-solid fa-pen-to-square text-white"></i>
                    </button>
                    <button
                      href="#"
                      className="p-2 border border-red-200 rounded-md inline-flex space-x-1 items-center bg-red-600 hover:bg-red-500"
                      onClick={() => handledeleteTodo(todo.id)}
                    >
                      <i className="fa-solid fa-trash text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
