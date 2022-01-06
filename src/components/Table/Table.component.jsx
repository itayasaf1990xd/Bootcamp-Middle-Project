import React from "react";
import "./Table.style.css";

const Table = (props) => {
  const classes = props.className ? `${props.className} table` : `table`;
  return (
    <span className={classes + (props.state === "X" ? ` table-aqua` : ` table-white`)} onClick={() => props.onClick(props.index)}>
      {props.state}
    </span>
  );
};
export default Table;
