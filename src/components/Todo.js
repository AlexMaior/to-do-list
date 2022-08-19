import { useState } from "react";
import Button from "./Button";
import classes from "./Todo.module.css";

const Todo = (props) => {
  const { index, removeTodo, markTodo, editTodo, todo } = props;

  const [text, setText] = useState(todo.text);
  const [edit, setEdit] = useState(false);

  const updateHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={classes.container}>
      {edit ? (
        <span>
          <input value={text} onChange={updateHandler}></input>
          <Button
            btnStyle={classes.btnStyleMark}
            clickEvent={() => editTodo(index, text, setEdit)}
          >
            Update
          </Button>
        </span>
      ) : (
        <p style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {props.todo.text}
        </p>
      )}

      <div className={classes.btnContainer}>
        <Button
          btnStyle={classes.btnStyleMark}
          clickEvent={() => {
            markTodo(index);
          }}
        >
          Done
        </Button>

        <Button
          btnStyle={classes.btnStyleMark}
          clickEvent={() => {
            setEdit(true);
          }}
        >
          Edit
        </Button>

        <Button
          btnStyle={classes.btnStyleDelete}
          clickEvent={() => {
            removeTodo(index);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Todo;
