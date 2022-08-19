import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    {
      text: "Example to do ",
      isDone: false,
    },
  ]);

  const inputHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = () => {
    if (value.trim() === "") {
      alert("Input cannot be empty");
      setValue("");
    } else {
      setList([
        ...list,
        {
          text: value,
          isDone: false,
        },
      ]);
      setValue("");
    }
  };
  const removeTodo = (index) => {
    const newTodos = [...list];
    newTodos.splice(index, 1);
    setList(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...list];
    newTodos[index].isDone = true;
    setList(newTodos);
  };

  const editTodo = (index, text, setEdit) => {
    const newTodos = [...list];
    newTodos[index].text = text;
    newTodos[index].isDone = false;
    setEdit(false);
    setList(newTodos);
  };

  return (
    <div className="App">
      <Input
        styling="toDoInput"
        placeholder={"pay bills..."}
        type={"text"}
        onChange={inputHandler}
        value={value}
      />
      <Button btnStyle="submitBtn" clickEvent={submitHandler}>
        Submit
      </Button>
      <List
        list={list}
        removeTodo={removeTodo}
        markTodo={markTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
