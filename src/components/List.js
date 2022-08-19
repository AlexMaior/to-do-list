import React from "react";
import Todo from "./Todo";
import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={classes.listContainer}>
      {props.list.map((todo, index) => {
        return (
          <Todo
            key={index}
            todo={todo}
            removeTodo={props.removeTodo}
            markTodo={props.markTodo}
            editTodo={props.editTodo}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default List;
