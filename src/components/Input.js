import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { styling } = props;
  return (
    <input
      className={styling}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
};

export default Input;
