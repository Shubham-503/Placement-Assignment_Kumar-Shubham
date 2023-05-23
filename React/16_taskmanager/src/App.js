import "./App.css";
import axios from "axios";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
// import { deleteCurrentSession } from './appwrite/utils';

function App() {
  const [todos, setTodos] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();
  const cookies = new Cookies();

  const createTodo = async (title) => {
    try {
      // const res = await axios.post('/createtodo', { title })
      // console.log(res)
      const token = cookies.get("f_token");
      console.log(!cookies.get(token));
      if (!cookies.get(token)) {
        let newtodos = [title];
        console.log(newtodos);
        cookies.set(token, JSON.stringify(newtodos));
      } else {
        let newtodos = cookies.get(token);
        console.log(newtodos);
        // newtodos=JSON.parse((newtodos));

        newtodos.push(title);
        cookies.set(token, JSON.stringify(newtodos));
        console.log(newtodos);
      }

      // cookies.set(newtodos)
      getTodos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTodos = async () => {
    try {
      // const res = await axios.get(`https://reqres.in/gettodos/`)
      // setTodos(res.data.todos)
      // console.log(todos);
      let token = cookies.get("f_token");
      let allTodos = cookies.get(token);
      console.log(allTodos);
      setTodos(allTodos);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      // await deleteCurrentSession();
      cookies.remove(cookies.get("f_token"));
      cookies.remove("f_token");
      setIsAuth(false);
      await axios.get("https://reqres.in/api/logout");
    } catch (e) {
      console.log(e);
    }
    history.push("/login");
  };

  return (
    <div className="App bg-[#03203C] pt-4 flex items-center justify-center flex-col border-2">
      <Switch>
        <Route path="/todos" exact>
          {isAuth ? (
            <>
              <div class="shadow bg-white w-full bg-transparent">
                <div class="h-16 mx-auto px-5 flex items-center justify-end">
                  <ul class="flex items-center gap-5">
                    <li>
                      <button
                        className="border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
                        type="submit"
                        onClick={(e) => {
                          handleSignOut(e);
                        }}
                        color="white"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <TodoForm createTodo={createTodo} />

              <TodoList todos={todos} getTodos={getTodos} setTodos={setTodos} />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login" exact>
          <h1>login Page</h1>
          <LoginUser setIsAuth={setIsAuth} />
        </Route>
        <Route path="/register" exact>
          <RegisterUser />
        </Route>
        <Route path="/" exact>
          <Redirect to={"login"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
