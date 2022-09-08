import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync,deleteTodoAsync,putTodoAsync, addTodoAsync, showTodo } from "./features/todoSlice";

export default function App() {
  const todo = useSelector(showTodo);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    userId: 69,
    id: 69,
    title: "",
    completed: false
  });

  const addNewTodo = () => {
    dispatch(addTodoAsync(newTodo));
  };

  return (
    <div className="App">
      <h1>Crud Operation using redux toolkit and axios</h1>
      <h2>Please check console in case of put , post or delete</h2>
      <p>all operation are working asynchronous</p>

      <input
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <button onClick={addNewTodo}>Add new todo ( Post  req.)</button>
      {todo.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <button onClick={() => dispatch(getTodoAsync("4"))}>Get TODO</button>
      <button onClick={() => dispatch(deleteTodoAsync("2"))}>Remove TODO  </button>
      <button onClick={() => dispatch(putTodoAsync("5"))}>Update TODO</button>
    </div>
  );
}
