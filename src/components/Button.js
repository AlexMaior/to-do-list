import React from "react";

const Button = (props) => {
  const { btnStyle, clickEvent } = props;
  return (
    <button className={btnStyle} onClick={clickEvent}>
      {props.children}
    </button>
  );
};

export default Button;
